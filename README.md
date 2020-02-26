# inteltracker

> A tracker for speedrunners of No One Lives Forever.

## To use

Windows builds are attached to the project as a Github release. Download and extract the contents of the zip file to use. **Note that ``CTRL + S`` as a shortcut is required to open and close the Settings screen**, which is needed to select the path where the NOLF executable will be running. This is required so the tracker can locate and watch the ``intel.sav`` file. You may freely delete the save file or folder without impacting the tracker; although it will only update the list if intel is collected.

You may also use the ``build`` instructions below to create it yourself on your machine from the source code. Be sure to run ``install`` first to install the dependencies.

### Reporting issues
You may report issues, feedback, or suggestions to this Github project or directly to me in the NOLF Discord channel.

If you are so inclined, it is possible to get *some* debugging information from the program by launching it in debug mode and then accessing the debug console in a separate Chrome browser window.
* Launch IntelTracker in remote debug mode:
* ``inteltracker.exe --remote-debugging-port=8315``
* Open a Chrome browser window and go to the URL ``http://localhost:8315``
* Click the ``inteltracker`` link, and then the Console tab.

#### Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:9080
npm run dev

# build electron application for production
npm run build


```

---

This project was generated with [electron-vue](https://github.com/SimulatedGREG/electron-vue) using [vue-cli](https://github.com/vuejs/vue-cli). Documentation about the original structure can be found [here](https://simulatedgreg.gitbooks.io/electron-vue/content/index.html).
