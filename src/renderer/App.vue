<template>
  <div id="app" :style="{
    backgroundColor: settings.backgroundColor,
    color: settings.textColor }">
    <router-view></router-view>
  </div>
</template>

<script>
const path = require('path');
import store from './store';

import fs from 'fs';
import chokidar from 'chokidar';

store.dispatch('resetList'); // have to force a reset of the store at startup...
let gamePath = store.state.Settings.settings.gamePath;
let savePath = path.join(gamePath, 'Save');
let filePath = path.join(gamePath, 'Save', 'intel.sav');

const watcher = chokidar.watch(gamePath, {persistent: true});

watcher.add(filePath)
const log = console.log.bind(console);

watcher.on('error', error => log(error));
watcher.on('add', path => log(`File ${path} has been added`));
watcher.on('addDir', path => log(`Directory ${path} added.`));
watcher.on('change', path => {
  if(path == filePath) {
    log(`File ${path} has been changed`);
    parseIntel(path);
  }
  });

/*
* parseIntel: accepts a file path, assumed to be "intel.sav" text, returns an object containing the status of known intel items.
* 
* This function breaks apart the "intel.sav" file into individual items and builds an object structure out of them.
* The object structure takes the intel number as its key and the value as true if found. Unlisted intels will be assumed as false for not found later.
* Separately, the UI will compare the two and decide what to show the user based on the status of those keys.
*/
function parseIntel (path) {
  fs.readFile(path, 'utf8', (err, data) => {
    if (err) {
      console.error(err)
    } else {
      var obj = {};
      data += '\r\n'; //add a newline to make it easier below since the file doesn't have one already
      obj.lines = data.split('\n');
      obj.intels = {};
      let count8005 = 0;
      let count8013 = 0;
      obj.lines.forEach(function(line) {
        if(line.startsWith('Intel')) {
          // we now have the individual intel item strings here
          let sublines = line.split(','); //split on the comma to separate the intel ID from the rest of the string
          sublines.forEach(function(item) {
            if(!item.startsWith('I')) { //this skips the first half of each line
              let intel = item.slice(1,item.length-2); //trim out the extra space and the final parantheses
              //log(`Sliced out ${intel} from ${item}`);
              // We have two special cases; intel items 8005 and 8013 are duplicated in two separate missions.
              // To handle this, we just append 'a' or 'b' to either if it's the first or second time they've been found on this parse.
              // Since missions are sorted first to last top down, the same way the file is parsed, we will always find the earlier mission first
              // as long as a speedrunner doesn't decide to skip one of these intels for some reason.
              // The data store already expects them to have the prefix to describe which mission they were found in.
              if(intel === '8005') {
                count8005++;
                if(count8005 == 1) { intel = 'a8005'}
                if(count8005 == 2) { intel = 'b8005'}
                else intel = 'c8005';
              }
              if(intel === '8013') {
                count8013++;
                if(count8013 <= 1) { intel = 'a8013'}
                else intel = 'b8013';
              }
              obj.intels[intel] = true;
            }
          });
        }
      });
      store.dispatch('receiveList', obj);
    }
  })
}

  export default {
    name: 'inteltracker',
    computed: {
        settings: function () {
            return this.$store.state.Settings.settings;
        }
    },
  }
</script>

<style>
  /* CSS */
</style>
