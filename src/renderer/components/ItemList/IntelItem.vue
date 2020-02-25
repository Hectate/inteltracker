<template>
        <component :is="iconComponent" :iconColor="[found ? 'black' : 'grey']" height="16pt" width="35"></component>
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
        '198':'IconRoster'   // roster (on clipboard)
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
        IconRoster
    },
    data: function () {
        return data;
    },
    name: 'intel-item',
    props: ['id', 'found', 'info'],
    computed: {
        iconComponent: function() {
            return this.types[this.info.type];
        }
    }
}
</script>