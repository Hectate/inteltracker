<template>
    <div :style="{display: ifHelpShown(!settings.showHelp)}">
        <div v-if="info.type == 'Group'" :style="{outline: settings.iconGroupOutlineStyle}">
            <div v-for="(item, index) in info.items" :key="index" :style="{display: ifHelpShown(!settings.showHelp), backgroundColor: settings.iconGroupBackgroundColor}">
                <span v-if="showThisItem(info.items, item)">
                    <component v-if="showThisItem(info.items, item)" :is="groupIconComponent(item.type)" :inGroup="true" style="vertical-align: middle" :iconColor="[intelFound(item.id) ? settings.iconFoundColor : settings.iconNotFoundColor]" :height="settings.iconHeight" :width="settings.iconWidth"></component>
                    <span v-if="settings.showHelp" class="help" style="display: inline-block; vertical-align: middle">{{item.loc}}</span>
                </span>
            </div>
        </div>
        <div v-else>
            <component :is="iconComponent" :inGroup="false" style="vertical-align: middle" :iconColor="[intelFound(info.id) ? settings.iconFoundColor : settings.iconNotFoundColor]" :height="settings.iconHeight" :width="settings.iconWidth"></component>
            <span v-if="settings.showHelp" class="help" style="display: inline-block; vertical-align: middle">{{info.loc}}</span>
        </div>
    </div>
</template>

<script>
import IconLetter from './Icons/IconLetter';
import IconFilm from './Icons/IconFilm';
import IconBlueprint from './Icons/IconBlueprint';
import IconBriefcase from './Icons/IconBriefcase';
import IconDossier from './Icons/IconDossier';
import IconLooseFiles from './Icons/IconLooseFiles';
import IconEnvelope from './Icons/IconEnvelope';
import IconTape from './Icons/IconTape';
import IconNote from './Icons/IconNote';
import IconTicket from './Icons/IconTicket';
import IconSecurityPass from './Icons/IconSecurityPass';
import IconCaptainsLog from './Icons/IconCaptainsLog';
import IconRoster from './Icons/IconRoster';
import IconQuestion from './Icons/IconQuestion';

var data = {
    types: {
        '171':'IconLetter',  // letter
        '172':'IconFilm',  // film
        '173':'IconBlueprint',  // blueprint
        '174':'IconBriefcase',  // briefcase
        '175':'IconDossier',  // dossier
        '176':'IconLooseFiles',  // loose files
        '177':'IconEnvelope',  // envelope (large, not like letter)
        '178':'IconTape',  // tape (reel to reel)
        '193':'IconNote',  // note (pinned to corkboard style)
        '194':'IconTicket',  // ticket
        '195':'IconSecurityPass',  // security pass
        '196':'IconRoster',  // manifest (on clipboard) - using Roster for now
        '197':'IconCaptainsLog',  // captain's log (book)
        '198':'IconRoster',   // roster (on clipboard)
        '999':'IconQuestion'  // question mark for dual types
    }
}

export default {
    components: {
        IconLetter,
        IconFilm,
        IconBlueprint,
        IconBriefcase,
        IconDossier,
        IconLooseFiles,
        IconEnvelope,
        IconTape,
        IconNote,
        IconTicket,
        IconSecurityPass,
        IconCaptainsLog,
        IconRoster,
        IconQuestion
    },
    data: function () {
        return data;
    },
    name: 'intel-item',
    props: ['id', 'found', 'info'],
    /*
    // When the 'found' prop was moved/deleted, we lost the ability to detect the change this way. Moved to the icons instead...
    watch: {
        found() {
            if(this.$store.state.Settings.settings.scrollToScene) {
                console.log('triggered');
                this.$el.parentElement.scrollIntoView({behavior:"smooth"});
            }
        }
    },
    */
    methods: {
        showThisItem: function(items, item) {
            let result = false;
            if(!this.settings.collapseIntelGroups) {
                return true;
            }
            if(this.intelFound(item.id)) {
                result = true;
            }
            else if (!this.isOneFound(items)) {
                result = true;
            }
            return result;
        },
        isOneFound: function(items) {
            let result = false;
            items.forEach(item => {
                if(this.intelFound(item.id)) {
                    console.log(`ID ${item.id} found in group. isOneFound() is true`);
                    result = true;
                }
            });
            return result;
        },
        groupIconComponent: function(type) {
            return this.types[type];
        },
        ifHelpShown: function(bool) {
            if(bool) { return 'inline-block'; }
            else return 'block';
        },
        intelFound: function(id) {
            return this.intels[id]
        }
    },
    computed: {
        iconComponent: function() {
            return this.types[this.info.type];
        },
        settings: function () {
            return this.$store.state.Settings.settings;
        },
        intels: function() {
            return this.$store.state.Intel.intels;
        }
    }
}
</script>