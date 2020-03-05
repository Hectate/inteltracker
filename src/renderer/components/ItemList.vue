<template>
    <div style="padding-left: 5px;padding-right: 5px;">
    <div class="content">
        <div v-for="(mission, index) in missions" :key="mission.index">
            <div v-if="settings.showScenes">
                <div v-for="(scene, index2) in mission.scenes" :key="scene.num">
                    <p :style="{color: settings.headingColor}" v-if="index2 == 0" class="title is-4">{{mission.name}} {{missionIntelsFound(index)}}/{{missionIntelCount(index)}}</p>
                    <p :style="{color: settings.textColor}" class="subtitle is-6">Scene {{scene.num}} {{sceneIntelsFound(index,index2)}}/{{sceneIntelCount(index,index2)}}</p>
                    <div v-if="settings.showIcons">
                        <intel-item v-for="item in scene.items" :key="item.id" :id="item.id" :found="intels[item.id]" :info="item"></intel-item>
                    </div>
                </div>
            </div>
            <div v-else>
                <p :style="{color: settings.headingColor}" class="title is-4">{{mission.name}} {{missionIntelsFound(index)}}/{{missionIntelCount(index)}}</p>
                <span v-for="(scene, index2) in mission.scenes" :key="scene.num">
                    <span v-if="settings.showIcons">
                        <intel-item v-for="item in scene.items" :key="item.id" :id="item.id" :found="intels[item.id]" :info="item"></intel-item>
                    </span>
                </span>
            </div>
        </div>
    </div>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import IntelItem from './ItemList/IntelItem';

var data = {
    types: {
        '171':171,  // letter
        '172':172,  // film
        '173':173,  // blueprint
        '174':174,  // briefcase
        '175':175,  // dossier
        '176':176,  // loose files
        '177':177,  // envelope (large, not like letter)
        '178':178,  // tape (reel to reel)
        '193':193,  // note (pinned to corkboard style)
        '194':194,  // ticket
        '195':195,  // security pass
        '196':196,  // manifest (on clipboard)
        '197':197,  // captain's log (book)
        '198':198   // roster (on clipboard)
    },
    missions: [
        {
        index: 0,
        name: 'The Assignment',
        scenes:
            [
                {
                    num:3,
                    items: [
                        {
                        id: 20531,
                        type: 193,
                        image: null,
                        loc: 'On wall after picking locks and before poison dagger training'
                        },
                        {
                        id: 20538,
                        type: 175,
                        image: null,
                        loc: 'On table after lockpick training'
                        },
                        {
                        id: 20533,
                        type: 193,
                        image: null,
                        loc: 'On wall in 2nd firing range area - shoot through walls training'
                        },
                        {
                        id: 20534,
                        type: 193,
                        image: null,
                        loc: 'On wall in 2nd firing range area - dum dum rounds training'
                        },
                        {
                        id: 20539,
                        type: 171,
                        image: null,
                        loc: 'On table after stealth training'
                        },
                        {
                        id: 20537,
                        type: 173,
                        image: null,
                        loc: 'On table after leaving bomb deactivation training'
                        },
                        {
                        id: 'a8005',
                        type: 176,
                        image: null,
                        loc: 'On the table in Intelligence training room'
                        },
                        {
                        id: 8007,
                        type: 178,
                        image: null,
                        loc: 'On the table in Intelligence training room'
                        },
                        {
                        id: 8001,
                        type: 172,
                        image: null,
                        loc: 'On the table in Intelligence training room'
                        },
                        {
                        id: 8006,
                        type: 177,
                        image: null,
                        loc: 'On the table in Intelligence training room'
                        },
                        {
                        id: 8000,
                        type: 171,
                        image: null,
                        loc: 'On the table in Intelligence training room'
                        },
                        {
                        id: 8003,
                        type: 174,
                        image: null,
                        loc: 'On the table in Intelligence training room'
                        },
                        {
                        id: 8004,
                        type: 175,
                        image: null,
                        loc: 'On the table in Intelligence training room'
                        },
                        {
                        id: 8002,
                        type: 173,
                        image: null,
                        loc: 'On the table in Intelligence training room'
                        }
                    ]
                }
            ]
        },
        {
        index: 1,
        name: 'Misfortune in Morocco',
        scenes: 
            [
                {
                    num:1,
                    items: [
                        {
                        id: 20001,
                        type: 177,
                        image: null,
                        loc: 'On the table in starting room'
                        },
                        {
                        id: 20006,
                        type: 177,
                        image: null,
                        loc: 'In locked room (zipline or clip through door)'
                        },
                        {
                        id: 20002,
                        type: 171,
                        image: null,
                        loc: 'On the railing above courtyard with soda machines'
                        },
                        {
                        id: 20008,
                        type: 172,
                        image: null,
                        loc: 'Between soda machines'
                        },
                        {
                        id: 20003,
                        type: 176,
                        image: null,
                        loc: 'Under dresser in Room 12'
                        },
                        {
                        id: 20009,
                        type: 171,
                        image: null,
                        loc: 'In mailbox (Dialogue option 3 required)'
                        },
                        {
                        id: 20005,
                        type: 171,
                        image: null,
                        loc: 'In mailbox (Dialogue option 3 required)'
                        }
                    ]
                },
                {
                    num:2,
                    items: [
                        {
                        id: 20032,
                        type: 193,
                        image: null,
                        loc: 'On the wall near locked gate and monkey merchant'
                        },
                        {
                        id: 20024,
                        type: 175,
                        image: null,
                        loc: 'In locked room near arguing couple'
                        },
                        {
                        id: 20029,
                        type: 171,
                        image: null,
                        loc: 'Under bed in Room 101'
                        },
                        {
                        id: 20031,
                        type: 174,
                        image: null,
                        loc: 'In Room 201 (jump from balcony)'
                        },
                        {
                        id: 20025,
                        type: 171,
                        image: null,
                        loc: 'By TV in Room 204'
                        },
                        {
                        id: 20028,
                        type: 177,
                        image: null,
                        loc: 'On bar'
                        },
                        {
                        id: 20022,
                        type: 176,
                        image: null,
                        loc: 'On Travel Agent\'s desk'
                        },
                        {
                        id: 20021,
                        type: 175,
                        image: null,
                        loc: 'On window in courtyard'
                        },
                        {
                        id: 20030,
                        type: 174,
                        image: null,
                        loc: 'On ice machine next to toilets'
                        },
                        {
                        id: 20026,
                        type: 176,
                        image: null,
                        loc: 'On table in elevator courtyard'
                        },
                        {
                        id: 20027,
                        type: 174,
                        image: null,
                        loc: 'Near the luggage dolly in elevator courtyard'
                        },
                        {
                        id: 20023,
                        type: 176,
                        image: null,
                        loc: 'On table in outdoor courtyard near conference room'
                        },
                        {
                        id: 20033,
                        type: 193,
                        image: null,
                        loc: 'On wall in room where Bruno is killed'
                        }
                    ]
                },
                {
                    num:3,
                    items: [
                        {
                        id: 20044,
                        type: 175,
                        image: null,
                        loc: 'Near bench where thugs shoot from in beginning'
                        },
                        {
                        id: 20046,
                        type: 171,
                        image: null,
                        loc: 'In planter in 2nd story area (need to take ramp up)'
                        },
                        {
                        id: 20048,
                        type: 177,
                        image: null,
                        loc: 'Near phone in 2nd story area'
                        },
                        {
                        id: 20045,
                        type: 177,
                        image: null,
                        loc: 'On the floor in room past phone in 2nd story area'
                        },
                        {
                        id: 20047,
                        type: 171,
                        image: null,
                        loc: 'Under table past fruit stand in 2nd story area'
                        },
                        {
                        id: 20042,
                        type: 175,
                        image: null,
                        loc: 'Under table on balcony where thugs were shooting from in 2nd story area'
                        },
                        {
                        id: 20049,
                        type: 174,
                        image: null,
                        loc: 'At top of ramp that leads into the courtyard with 3 thugs'
                        },
                        {
                        id: 20043,
                        type: 176,
                        image: null,
                        loc: 'On crates in room with 2 thugs leaning on wall'
                        },
                        {
                        id: 20041,
                        type: 175,
                        image: null,
                        loc: 'Next to table in room with 2 thugs leaning on the wall'
                        },
                        {
                        id: 20050,
                        type: 173,
                        image: null,
                        loc: 'In last area after swimming to the end of the canal'
                        }
                    ]
                },
                {
                    num:4,
                    items: [
                        {
                        id: 20063,
                        type: 177,
                        image: null,
                        loc: 'In tent in 2nd ruins'
                        },
                        {
                        id: 20073,
                        type: 193,
                        image: null,
                        loc: 'On sign leading into mine field'
                        },
                        {
                        id: 20072,
                        type: 174,
                        image: null,
                        loc: 'Near van in mine field'
                        },
                        {
                        id: 20066,
                        type: 171,
                        image: null,
                        loc: 'Near vase after coming out of water (in the well)'
                        },
                        {
                        id: 20065,
                        type: 171,
                        image: null,
                        loc: 'In the water (near landing with 2 guards)'
                        },
                        {
                        id: 20067,
                        type: 174,
                        image: null,
                        loc: 'Behind chair OR near crate in room with 2 guards'
                        },
                        {
                        id: 20069,
                        type: 171,
                        image: null,
                        loc: 'On wall near 2 guards talking about the ship'
                        },
                        {
                        id: 20062,
                        type: 171,
                        image: null,
                        loc: 'On wall just past 2 guards talking about the ship'
                        },
                        {
                        id: 20071,
                        type: 172,
                        image: null,
                        loc: 'Under fountain past generator room'
                        },
                        {
                        id: 20064,
                        type: 177,
                        image: null,
                        loc: 'On ground past guard who shoots other guard'
                        },
                        {
                        id: 20068,
                        type: 171,
                        image: null,
                        loc: 'On crates in hallway before the generator room'
                        },
                        {
                        id: 20070,
                        type: 174,
                        image: null,
                        loc: 'Behind generator'
                        },
                        {
                        id: 20061,
                        type: 175,
                        image: null,
                        loc: 'In room with guard off main courtyard OR on crates in room between main courtyard and hallway to the water area'
                        }
                    ]
                }
            ]
        },
        {
        index: 3,
        name: 'Berlin by Night',
        scenes:
            [
                {
                    num:1,
                    items: [
                        {
                        id: 20082,
                        type: 177,
                        image: null,
                        loc: 'In the phone booth'
                        },
                        {
                        id: 20084,
                        type: 171,
                        image: null,
                        loc: 'On shelf in guard shack'
                        },
                        {
                        id: 20083,
                        type: 171,
                        image: null,
                        loc: 'In room outside alarm shutoff switch'
                        } 
                    ]
                },
                {
                    num:2,
                    items: [
                        {
                        id: 20098,
                        type: 193,
                        image: null,
                        loc: 'On the wall at the beginning'
                        },
                        {
                        id: 20091,
                        type: 171,
                        image: null,
                        loc: 'In room next to 2 guards talking about Dieter OR on shelf in room with 2 guards talking about Dieter'
                        },
                        {
                        id: 20096,
                        type: 178,
                        image: null,
                        loc: 'On desk in office above room with crates OR on shelf near exit door in room with crates'
                        },
                        {
                        id: 20092,
                        type: 171,
                        image: null,
                        loc: 'On crates in room you access by picking gate lock and climbing in through window'
                        },
                        {
                        id: 20093,
                        type: 176,
                        image: null,
                        loc: 'Near the sink in the kitchen OR on table in room with German flag'
                        },
                        {
                        id: 20094,
                        type: 171,
                        image: null,
                        loc: 'On table in upper area of last building (overlooks front desk) OR on table near door that leads to Von Haupt'
                        },
                        {
                        id: 20095,
                        type: 171, // TODO need to support dual icons here
                        image: null,
                        loc: 'Letter on crates in second basement room OR Film near pillar in the first basement room'
                        }
                    ]
                },
                {
                    num:3,
                    items: [
                        {
                        id: 20105,
                        type: 175,
                        image: null,
                        loc: 'On shelf in 1st room with scientist and periodic table chart'
                        },
                        {
                        id: 20101,
                        type: 171,
                        image: null,
                        loc: 'On bench behind lockers near CCCP soda machine'
                        },
                        {
                        id: 20108,
                        type: 173,
                        image: null,
                        loc: 'On table of second room near scientists talking'
                        },
                        {
                        id: 20104,
                        type: 176,
                        image: null,
                        loc: 'In room near the Super Goat (code breaker)'
                        },
                        {
                        id: 20106,
                        type: 171,
                        image: null,
                        loc: 'On table in room after taking elevator up'
                        },
                        {
                        id: 20103,
                        type: 176,
                        image: null,
                        loc: 'On shelf in room with small colored barrels'
                        },
                        {
                        id: 20102,
                        type: 174,
                        image: null,
                        loc: 'In small room with scientist and equipment (upstairs)'
                        },
                        {
                        id: 20107,
                        type: 171,
                        image: null,
                        loc: 'On shelf outside of kitchen near picnic tables'
                        },
                        {
                        id: 20109,
                        type: 176,
                        image: null,
                        loc: 'On bench in room at the end of the hall that leads to Dr. Schenker'
                        }
                    ]
                }
            ]
        },
        {
        index: 4,
        name: 'Unexpected Turbulence',
        scenes:
            [
                {
                    num:1,
                    items: [
                        {
                        id: 20112,
                        type: 175,
                        image: null,
                        loc: 'In the room on the left behind where you start'
                        },
                        {
                        id: 20114,
                        type: 171,
                        image: null,
                        loc: 'On the sink in the restroom'
                        }
                    ]
                },
                {
                    num:2,
                    items: [
                        {
                        id: 20126,
                        type: 176,
                        image: null,
                        loc: 'In conference room behind the cockpit'
                        },
                        {
                        id: 20122,
                        type: 174,
                        image: null,
                        loc: 'On table in the room at the bottom of the ladder'
                        },
                        {
                        id: 20123,
                        type: 175,
                        image: null,
                        loc: 'On seat blocking the open door'
                        },
                        {
                        id: 20125,
                        type: 172,
                        image: null,
                        loc: 'On shelf by two guards talking about parachutes'
                        },
                        {
                        id: 20127,
                        type: 177,
                        image: null,
                        loc: 'On table in last room before falling out of plane'
                        }
                    ]
                }
            ]
        },
        {
        index: 6,
        name: 'Rendezvous in Hamburg',
        scenes:
            [
                {
                    num:1,
                    items: [
                        {
                        id: 20131,
                        type: 171,
                        image: null,
                        loc: 'On the desk in Manager\'s Office'
                        },
                        {
                        id: 20132,
                        type: 171,
                        image: null,
                        loc: 'On table after talking twice to woman whose boyfriend is outside'
                        },
                        {
                        id: 20133,
                        type: 175,
                        image: null,
                        loc: 'In Ladies Room. Must be retrieved before talking to Goodman'
                        }
                    ]
                },
                {
                    num:2,
                    items: [
                        {
                        id: 20141,
                        type: 175,
                        image: null,
                        loc: 'On barrel in wine cellar'
                        },
                        {
                        id: 20143,
                        type: 171,
                        image: null,
                        loc: 'On desk in room just before the kitchen'
                        },
                        {
                        id: 20142,
                        type: 177,
                        image: null,
                        loc: 'In sink in kitchen'
                        },
                        {
                        id: 20145,
                        type: 175,
                        image: null,
                        loc: 'In the bar'
                        },
                        {
                        id: 20144,
                        type: 174,
                        image: null,
                        loc: 'In end room where you go out the window'
                        }
                    ]
                }
            ]
        },
        {
        index: 8,
        name: 'A Tenuous Lead',
        scenes:
            [
                {
                    num:1,
                    items:[
                        {
                        id: 20151,
                        type: 171,
                        image: null,
                        loc: 'On table in first building (up yellow stairs) OR behind the dumpster behind where you start'
                        },
                        {
                        id: 20153,
                        type: 171,
                        image: null,
                        loc: 'On shelf in back office upstairs'
                        },
                        {
                        id: 20156,
                        type: 171,
                        image: null,
                        loc: 'In locked room of second building (zip)'
                        },
                        {
                        id: 20152,
                        type: 176,
                        image: null,
                        loc: 'On boxes outside of locked room in 2nd building'
                        },
                        {
                        id: 20155,
                        type: 171,
                        image: null,
                        loc: 'In the locker before room with steam hazards'
                        },
                        {
                        id: 20158,
                        type: 193,
                        image: null,
                        loc: 'On the wall near missing valve handle'
                        },
                        {
                        id: 20157,
                        type: 193,
                        image: null,
                        loc: 'On wall near electrical switch'
                        },
                        {
                        id: 20154,
                        type: 171,
                        image: null,
                        loc: 'Behind boxes in room with electrical switch OR on catwalk above machine that was electrifying ladder'
                        },
                    ]
                },
                {
                    num:2,
                    items:[
                        {
                        id: 20163,
                        type: 171,
                        image: null,
                        loc: 'On forklift in warehouse OR on boxes near exit door of 1st building'
                        },
                        {
                        id: 20164,
                        type: 176,
                        image: null,
                        loc: 'On either of two desks in room with "Albatross" on the chalkboard'
                        },
                        {
                        id: 20167,
                        type: 177, // TODO dual icon
                        image: null,
                        loc: 'Letter on boxes outside to the right of the floating walkway OR Envelope behind the boxes outside on the barge'
                        },
                        {
                        id: 20166,
                        type: 178,
                        image: null,
                        loc: 'On table in locked room. Must listen to conversation'
                        }
                    ]
                },
                {
                    num:3,
                    items:[
                        {
                        id: 20172,
                        type: 176,
                        image: null,
                        loc: 'On table in room with guy talking about playing drums'
                        },
                        {
                        id: 20174,
                        type: 177,
                        image: null,
                        loc: 'On bookcase in room with guy talking about playing drums'
                        },
                        {
                        id: 20173,
                        type: 171,
                        image: null,
                        loc: 'On crate behind you at the very beginning of level OR on crates in storage room near the crane'
                        },
                        {
                        id: 20176,
                        type: 175,
                        image: null,
                        loc: 'In hidden room (zip)'
                        }
                    ]
                },
                {
                    num:4,
                    items:[
                        {
                        id: 20182,
                        type: 171,
                        image: null,
                        loc: 'By lockers in room between the 2 large storage rooms'
                        },
                        {
                        id: 20185,
                        type: 171,
                        image: null,
                        loc: 'In red cargo container (jump from lift)'
                        },
                        {
                        id: 20184,
                        type: 171,
                        image: null,
                        loc: 'On pipe in hallway with guard at the end (before taking ladder up to end level)'
                        }
                    ]
                },
                {
                    num:5,
                    items:[
                        {
                        id: 20193,
                        type: 176,
                        image: null,
                        loc: 'On the overhead pipe in room you go through to avoid steam'
                        },
                        {
                        id: 20191,
                        type: 171,
                        image: null,
                        loc: 'On floor in flooded corridor near steam leak'
                        },
                        {
                        id: 20194,
                        type: 177,
                        image: null,
                        loc: 'On the table in the room that has your equipment'
                        },
                        {
                        id: 20192,
                        type: 176,
                        image: null,
                        loc: 'On table in room behind the radio room'
                        }
                    ]
                }
            ]
        },
        {
        index: 10,
        name: 'The Dive',
        scenes:
            [
                {
                    num:1,
                    items:[
                        {
                        id: 20202,
                        type: 171,
                        image: null,
                        loc: 'In empty room across the hall from where you start'
                        },
                        {
                        id: 20205,
                        type: 174,
                        image: null,
                        loc: 'Near the luggage rack in area with guards on upper balconies'
                        },
                        {
                        id: 20201,
                        type: 171, // TODO dual icon
                        image: null,
                        loc: 'Letter on fireplace mantle OR Envelope on bed, in room to the left of area with 2 guards on upper balconies'
                        },
                        {
                        id: 20203,
                        type: 178, // TODO dual icon
                        image: null,
                        loc: 'Film in room at the end of the hall past guards who shut down the elevator OR Tape in room that maid opens for you'
                        },
                        {
                        id: 20204,
                        type: 171,
                        image: null,
                        loc: 'Under chair near fireplace in lounge area past guards who shut down the elevator'
                        }
                    ]
                },
                {
                    num:2,
                    items:[
                        {
                        id: 20211,
                        type: 171,
                        image: null,
                        loc: 'In the corner of roof below where 3 guards shoot at you from OR On the floor near ladder you take to get into the air duct'
                        },
                        {
                        id: 20212,
                        type: 176,
                        image: null,
                        loc: 'On roof with water tower OR On the floor near the couch in hall after falling into beer vat'
                        },
                        {
                        id: 20214,
                        type: 193,
                        image: null,
                        loc: 'On wall of shack in garden area'
                        },
                        {
                        id: 20213,
                        type: 177,
                        image: null,
                        loc: 'On stove near beer vat'
                        }
                    ]
                },
                {
                    num:3,
                    items:[
                        {
                        id: 8014,
                        type: 196,
                        image: null,
                        loc: 'On table of office near shark room'
                        },
                        {
                        id: 20221,
                        type: 171,
                        image: null,
                        loc: 'Near forklift in shark room (under office)'
                        },
                        {
                        id: 20223,
                        type: 173,
                        image: null,
                        loc: 'In crate on right side of shark room OR On floor near crates in next room after you swim through hole in ceiling'
                        },
                        {
                        id: 20224,
                        type: 178,
                        image: null,
                        loc: 'On shelf after coming out of vents OR In the center of shark room under toppled crates'
                        },
                        {
                        id: 20225,
                        type: 174,
                        image: null,
                        loc: 'Near ladder in room with blocked ceiling OR On shelf in the kitchen'
                        },
                        {
                        id: 20222,
                        type: 171,
                        image: null,
                        loc: 'In drawer of Captain\'s quarters'
                        },
                        {
                        id: 8015,
                        type: 197,
                        image: null,
                        loc: 'On the bed in Captain\'s quarters'
                        }
                    ]
                }
            ]
        },
        {
        index: 12,
        name: 'A Man of Influence',
        scenes:
            [
                {
                    num:1,
                    items:[
                        {
                        id: 20231,
                        type: 177,
                        image: null,
                        loc: 'On the secretary\'s desk in the beginning'
                        },
                        {
                        id: 20232,
                        type: 171,
                        image: null,
                        loc: 'On the desk next to secretary on the phone'
                        },
                        {
                        id: 20236,
                        type: 173,
                        image: null,
                        loc: 'On woodpile in room behind restrooms'
                        },
                        {
                        id: 20233,
                        type: 177,
                        image: null,
                        loc: 'On desk in Mr. Hilltop\'s office'
                        },
                        {
                        id: 20234,
                        type: 177,
                        image: null,
                        loc: 'On desk in office next to Mr. Hilltop\'s'
                        },
                        {
                        id: 20235,
                        type: 177,
                        image: null,
                        loc: 'On shelf behind Mr. Hilltop\'s secretary'
                        },
                        {
                        id: 'b8005',
                        type: 176,
                        image: null,
                        loc: 'On table next to 2 scientists in conference room'
                        },
                        {
                        id: 20237,
                        type: 172,
                        image: null,
                        loc: 'Next to model remote in the Baron\'s secret office'
                        }
                    ]
                },
                {
                    num:2,
                    items:[
                        {
                        id: 20241,
                        type: 171,
                        image: null,
                        loc: 'Near dog kennel in beginning'
                        },
                        {
                        id: 20243,
                        type: 171,
                        image: null,
                        loc: 'In office with guard yelling about the main process having been started'
                        },
                        {
                        id: 20242,
                        type: 177,
                        image: null,
                        loc: 'On table of 1st room in building across the train tracks'
                        }
                    ]
                },
                {
                    num:3,
                    items:[
                        {
                        id: 20262,
                        type: 174,
                        image: null,
                        loc: 'In the car trunk'
                        },
                        {
                        id: 20261,
                        type: 171,
                        image: null,
                        loc: 'In the car front seat'
                        },
                        {
                        id: 20264,
                        type: 177,
                        image: null,
                        loc: 'In the trash can to the left of the house'
                        },
                        {
                        id: 20263,
                        type: 171,
                        image: null,
                        loc: 'Under the front door of the house'
                        }
                    ]
                }
            ]
        },
        {
        index: 14,
        name: 'Safecracker',
        scenes:
            [
                {
                    num:1,
                    items:[
                        {
                        id: 20274,
                        type: 173,
                        image: null,
                        loc: 'On the drafting table in the outside trailer'
                        },
                        {
                        id: 20275,
                        type: 171,
                        image: null,
                        loc: 'On upper scaffold on 1st floor of building'
                        },
                        {
                        id: 20271,
                        type: 171,
                        image: null,
                        loc: 'In the empty shaft area on 1st floor of the building below scaffold OR On the crates located on the 1st floor of building'
                        },
                        {
                        id: 20272,
                        type: 177,
                        image: null,
                        loc: 'On the desk on the basement level of the building OR On wooden planks located on the basement floor'
                        },
                        {
                        id: 20273,
                        type: 172,
                        image: null,
                        loc: 'Behind the power generator on the basement floor OR In the outside pit area near the starting point for the mission'
                        }
                    ]
                },
                {
                    num:2,
                    items:[
                        {
                        id: 20281,
                        type: 171,
                        image: null,
                        loc: 'On wooden planks'
                        }
                    ]
                },
                {
                    num:3,
                    items:[
                        {
                        id: 20294,
                        type: 193,
                        image: null,
                        loc: 'Posted to the beam at the starting point'
                        },
                        {
                        id: 20293,
                        type: 176,
                        image: null,
                        loc: 'At the top of the 1st flight of stairs before jumping down to area with locked wooden door'
                        },
                        {
                        id: 20295,
                        type: 173,
                        image: null,
                        loc: 'On the drafting table in the 1st room where you need to zipcord'
                        },
                        {
                        id: 20292,
                        type: 171,
                        image: null,
                        loc: 'After jumping up the crates to the roof, on the concrete beam below OR On the 1st pile of wood planks that you encounter near the start point'
                        },
                        {
                        id: 20291,
                        type: 171,
                        image: null,
                        loc: 'Behind the locked wooden doorway leading to 1st zip OR On the small work scaffold after the 1st zipcord'
                        }
                    ]
                },
                {
                    num:4,
                    items:[
                        {
                        id: 20302,
                        type: 171,
                        image: null,
                        loc: 'On the box located in the room behind the door right at the beginning of the mission'
                        },
                        {
                        id: 20305,
                        type: 171,
                        image: null,
                        loc: 'Floating in the pool'
                        },
                        {
                        id: 20301,
                        type: 172,
                        image: null,
                        loc: 'By the lockers through the 1st set of doors in the level OR In the room downstairs looking out at the red barrels'
                        },
                        {
                        id: 20303,
                        type: 176,
                        image: null,
                        loc: 'Under the large furnace vent located in the room next to the window washer power room'
                        },
                        {
                        id: 'c8005',
                        type: 176,
                        image: null,
                        loc: 'On the table by the pool'
                        },
                        {
                        id: 20304,
                        type: 174,
                        image: null,
                        loc: 'Next to bench near the window washer platform OR Near the plants by the elevator shaft after climbing the crates'
                        }
                    ]
                },
                {
                    num:5,
                    items:[
                        {
                        id: 20311,
                        type: 177,
                        image: null,
                        loc: 'On top of the long table at the beginning OR Under the desk in the room across from the starting room'
                        },
                        {
                        id: 20313,
                        type: 175,
                        image: null,
                        loc: 'On the table in the room at the far end of the 1st hallway OR On desk in starting floor cubicle area'
                        },
                        {
                        id: 20312,
                        type: 176,
                        image: null,
                        loc: 'In between books on filing shelf in room on starting floor OR On the lobby bench on the starting floor'
                        },
                        {
                        id: 20315,
                        type: 176,
                        image: null,
                        loc: 'Under bench in hallway on starting floor OR Under a desk in the starting floor cubicle area'
                        },
                        {
                        id: 20316,
                        type: 174,
                        image: null,
                        loc: 'On desk on lower floor cubicle area OR Under the desk in the lower cubicle area'
                        },
                        {
                        id: 20307,
                        type: 175,
                        image: null,
                        loc: 'On top of middle toilet in Men\'s restroom'
                        },
                        {
                        id: 20306,
                        type: 175,
                        image: null,
                        loc: 'On top of the far toilet in the Women\'s restroom'
                        },
                        {
                        id: 20317,
                        type: 172,
                        image: null,
                        loc: 'On shelf located in room behind the elevator on lower level OR On the desk in the room across from the lower cubicle area'
                        },
                        {
                        id: 20319,
                        type: 171,
                        image: null,
                        loc: 'On the table in the break room on the lower level OR By copy machine across from the elevator'
                        },
                        {
                        id: 20318,
                        type: 171,
                        image: null,
                        loc: 'By the podium in the lecture hall on the lower level OR In the middle isle of the lecture hall'
                        }
                    ]
                },
                {
                    num:6,
                    items:[
                        {
                        id: 20321,
                        type: 171,
                        image: null,
                        loc: 'On table in 1st room past the large room with the two guards talking about "Stinks" OR On a chair on the 2nd floor border overlooking the room past the large room containing the two guards talking about "Stinks"'
                        },
                        {
                        id: 20322,
                        type: 172,
                        image: null,
                        loc: 'By the L-shaped desk in a room on the bottom floor OR On the table in the room behind the L-shaped desk on the bottom floor'
                        },
                        {
                        id: 20324,
                        type: 174,
                        image: null,
                        loc: 'On the floor under a long table located in a room on the bottom floor OR Under a bench along the upper walkway overlooking the door the security camera control room'
                        },
                        {
                        id: 20323,
                        type: 176,
                        image: null,
                        loc: 'On a desk on the 2nd floor'
                        },
                        {
                        id: 20327,
                        type: 177,
                        image: null,
                        loc: 'On desk 3 in the larger cubicle area'
                        },
                        {
                        id: 20325,
                        type: 171,
                        image: null,
                        loc: 'On the floor under desk 4 in the larger cubicle area'
                        },
                        {
                        id: 20326,
                        type: 175,
                        image: null,
                        loc: 'On desk 7 in the large cubicle area'
                        },
                        {
                        id: 20329,
                        type: 171,
                        image: null,
                        loc: 'Under the floor of the Laser beam section (go back)'
                        },
                        {
                        id: 20328,
                        type: 171,
                        image: null,
                        loc: 'In the safe at the end of the level'
                        }
                    ]
                }
            ]
        },
        {
        index: 15,
        name: 'An Ounce of Hope',
        scenes:
            [
                {
                    num:1,
                    items: [
                        {
                            id: 20532,
                            type: 193,
                            image: null,
                            loc: 'After listening to bike tutorial, on garage wall'
                        }
                    ]
                }
            ]
        },
        {
        index: 16,
        name: 'Rescue Attempt',
        scenes: [
            {
                num:1,
                items:[
                    {
                    id: 8016,
                    type: 198,
                    image: null,
                    loc: 'In the conductor\'s room on the desk'
                    },
                    {
                    id: 20331,
                    type: 176,
                    image: null,
                    loc: 'On the Kitchen counter OR On the bottom shelf in one of the rooms near the Conductor\'s cabin'
                    },
                    {
                    id: 20333,
                    type: 174,
                    image: null,
                    loc: 'By the luggage net compartment in car after bathroom OR By the Passenger ticket in the room located in the middle passenger car'
                    },
                    {
                    id: 8012,
                    type: 194,
                    image: null,
                    loc: 'In the middle passenger room 2 cars down from the bathroom'
                    },
                    {
                    id: 20332,
                    type: 171,
                    image: null,
                    loc: 'On the sink in the bathroom of 2nd medium private passenger compartment OR Under one of the chairs in car with bathroom'
                    },
                    {
                    id: 20334,
                    type: 171,
                    image: null,
                    loc: 'Under the bed in one of the passenger compartments next to Conductor\'s office OR On the exit steps in the car before the luggage/caboose area'
                    },
                    {
                    id: 20335,
                    type: 178,
                    image: null,
                    loc: 'On one of two possible shelves near the caboose area'
                    }
                ]
            },
            {
                num:2,
                items:[
                    {
                    id: 20345,
                    type: 193,
                    image: null,
                    loc: 'Next to the entrance to the boarded off tunnel'
                    },
                    {
                    id: 20341, // TODO find a way to group this with 20343 in the display
                    type: 171,
                    image: null,
                    loc: 'On top of boxes in the large area outside of the tunnel'
                    },
                    {
                    id: 20343,
                    type: 171,
                    image: null,
                    loc: 'On the flatbed behind the wooden planks near the motorcycle'
                    },
                    {
                    id: 20342,
                    type: 172,
                    image: null,
                    loc: 'On the shelf upon coming up into the room from underneath the floor'
                    },
                    {
                    id: 20344,
                    type: 175,
                    image: null,
                    loc: 'On the desk in the outside guard shack'
                    }
                ]
            },
            {
                num:3,
                items:[
                    {
                    id: 20351,
                    type: 172,
                    image: null,
                    loc: 'On the cabinet in the shack at the base of the winding stairs OR On a shelf in the room with the lighter. It\'s the 1st room to the right when you enter the compound'
                    },
                    {
                    id: 20352,
                    type: 171,
                    image: null,
                    loc: 'On the top of one of the boxes in the larger area before retrieving the elevator keycard OR On the flat bed in the hallway before Dr. Schenker\'s room'
                    },
                    {
                    id: 'a8013',
                    type: 195,
                    image: null,
                    loc: 'In the gated area past the large room with the painted crates (AND Retrieval of the elevator keycard after using it?)'
                    },
                    {
                    id: 20354,
                    type: 173,
                    image: null,
                    loc: 'On the shelf in the gated area to the left after coming out of the door past the electric floor panel area'
                    },
                    {
                    id: 20353,
                    type: 176,
                    image: null,
                    loc: 'On the upper OR lower bunk bed, in the room with Dr. Schenker'
                    }
                ]
            }
        ]
        },
        {
        index: 18,
        name: 'Trouble in the Tropics',
        scenes:
            [
                {
                    num:1,
                    items:[
                        {
                        id: 20361,
                        type: 171,
                        image: null,
                        loc: 'On the desk in the room to the left once inside the compound OR On the shelf in the storage room by the UNITY box'
                        },
                        {
                        id: 20362,
                        type: 176,
                        image: null,
                        loc: 'Under the open drawer in the Radio room'
                        },
                        {
                        id: 20363,
                        type: 177,
                        image: null,
                        loc: 'On one of two possible crates, in the dark area before taking the lift'
                        },
                        {
                        id: 20364,
                        type: 173,
                        image: null,
                        loc: 'In the room next to the door where you must use the Code breaker to advance to the end of the level'
                        }
                    ]
                },
                {
                    num:2,
                    items:[
                        {
                        id: 20371,
                        type: 171,
                        image: null,
                        loc: 'On the ground near the two guards talking about the short circuit OR On the ground near one of the orange crates in the beginning outside crate area'
                        },
                        {
                        id: 20372,
                        type: 177,
                        image: null,
                        loc: 'On the wooden plank in the marsh area to the right of the fenced off guard post'
                        },
                        {
                        id: 20375,
                        type: 174,
                        image: null,
                        loc: 'On the bench at the far end of the ruins'
                        },
                        {
                        id: 20374,
                        type: 171,
                        image: null,
                        loc: 'On the ledge outside left guard tower in the ruins OR On the floor in far left side of the ruins'
                        },
                        {
                        id: 20373,
                        type: 176,
                        image: null,
                        loc: 'On the ground near the gate after coming out of the off trail area OR On the floor in the right side guard tower in the ruins'
                        },
                        {
                        id: 20376,
                        type: 171,
                        image: null,
                        loc: 'By the bed inside the ruins barracks area'
                        },
                        {
                        id: 20378,
                        type: 176,
                        image: null,
                        loc: 'Under a plant on the outskirts of the marsh area where the user must zipcord to the end of the level'
                        },
                        {
                        id: 20377,
                        type: 177,
                        image: null,
                        loc: 'On a rock located in the stream heading to the marsh area at the end of the level'
                        }
                    ]
                },
                {
                    num:3,
                    items:[
                        {
                        id: 20381,
                        type: 171,
                        image: null,
                        loc: 'In the water right underneath the rocket'
                        },
                        {
                        id: 20382,
                        type: 176,
                        image: null,
                        loc: 'On the table in the cafeteria after the failed rocket launch'
                        }
                    ]
                },
                {
                    num:4,
                    items: [
                        {
                        id: 20391,
                        type: 175,
                        image: null,
                        loc: 'On the shelf by the room with the two scientists talking about Big Mama and the Paris Caper OR On crates outside by the two scientists talking about the rocket explosion'
                        },
                        {
                        id: 20392,
                        type: 171,
                        image: null,
                        loc: 'On the floor near lockers outside the room with the two scientists talking about Big Mama OR under a bench in that room'
                        },
                        {
                        id: 20397,
                        type: 171,
                        image: null,
                        loc: 'On the bench in the room with the two scientists talking about Big Mama'
                        },
                        {
                        id: 20393,
                        type: 177,
                        image: null,
                        loc: 'On top of the control panel in the lower OR upper rocket launch control room'
                        },
                        {
                        id: 20394,
                        type: 174,
                        image: null,
                        loc: 'On the bench in the room with the astronaut whose suit you must steal OR In the corner in the Radio room'
                        },
                        {
                        id: 20396,
                        type: 171,
                        image: null,
                        loc: 'On the bench in the room with the astronaut whose suit you must steal'
                        }
                    ]
                }
            ]
        },
        {
        index: 19,
        name: 'Low Earth Orbit',
        scenes:
            [
                {
                    num:1,
                    items:[
                        {
                        id: 20401,
                        type: 171,
                        image: null,
                        loc: 'By empty spacesuit alcove near beginning'
                        },
                        {
                        id: 20408,
                        type: 171,
                        image: null,
                        loc: 'On the crates in area after taking elevator from Goldenrod down'
                        },
                        {
                        id: 20407,
                        type: 177,
                        image: null,
                        loc: 'On table in room near mutated plant bays OR On swingset in arboretum'
                        },
                        {
                        id: 'b8013',
                        type: 195,
                        image: null,
                        loc: 'In Pink Space Lounge (AND after using it?)'
                        },
                        {
                        id: 20403,
                        type: 174,
                        image: null,
                        loc: 'On second tier of Pink Space Lounge by the couch OR In room with scientists making out'
                        },
                        {
                        id: 20402,
                        type: 176,
                        image: null,
                        loc: 'Near phones by Goldenrod up elevator OR Under bench near entrance to Pink Space Lounge'
                        },
                        {
                        id: 20404,
                        type: 172,
                        image: null,
                        loc: 'In Periwinkle section in room with Code Breaker OR In other room across from room with Code Breaker'
                        },
                        {
                        id: 20405,
                        type: 171,
                        image: null,
                        loc: 'In upper Zero Gravity room'
                        },
                        {
                        id: 20409,
                        type: 172,
                        image: null,
                        loc: 'On console in Raspberry section'
                        },
                        {
                        id: 20406,
                        type: 171,
                        image: null,
                        loc: 'In railing of walkway over arboretum OR On mutated plant bays after taking elevator down from Goldenrod'
                        }
                    ]
                },
                {
                    num:2,
                    items:[
                        {
                        id: 20411,
                        type: 171,
                        image: null,
                        loc: 'Wedged in the corner in the 1st room containing boxes before entering the escape pod area'
                        },
                        {
                        id: 20412,
                        type: 172,
                        image: null,
                        loc: 'In the far right escape pod lies a film canister. You must retrieve it before getting the antidote'
                        }
                    ]
                }
            ]
        },
        {
        index: 21,
        name: 'Alpine Intrigue',
        scenes:
            [
                {
                    num:1,
                    items:[
                        {
                        id: 20421,
                        type: 171,
                        image: null,
                        loc: 'After trailing the Baroness past the 1st pair of guards, next to a barrel OR On the upper balcony starting point, on the table to the left'
                        },
                        {
                        id: 20422,
                        type: 174,
                        image: null,
                        loc: 'Next to the 2nd pair of guards, in the building to the left by the couch OR On the bench right next to the window in the upstairs room'
                        },
                        {
                        id: 20423,
                        type: 171,
                        image: null,
                        loc: 'After jumping through the window in the upstairs room, next to the trashcan OR On the bench in the room near the lone guard under the icicle'
                        }
                    ]
                },
                {
                    num:2,
                    items:[
                        {
                        id: 20432,
                        type: 176,
                        image: null,
                        loc: 'Next to the desk in the room to the right of the outside garage'
                        },
                        {
                        id: 20433,
                        type: 172,
                        image: null,
                        loc: 'By the sleeping guard in the room by the Rocket launcher briefcase'
                        },
                        {
                        id: 20431,
                        type: 171,
                        image: null,
                        loc: 'By the controls for the gate'
                        }
                    ]
                }
            ]
        },
        {
        index: 22,
        name: 'The Indomitable Cate Archer',
        scenes:
            [
                {
                    num:1,
                    items:[
                        {
                        id: 20462,
                        type: 171,
                        image: null,
                        loc: 'On the shelf in the room after getting off the rafters OR On the rafters at the beginning of the level'
                        },
                        {
                        id: 20463,
                        type: 172,
                        image: null,
                        loc: 'By the boots when you descend the spiral stairs OR On the mantle of the fireplace as you descend the spiral stairs'
                        },
                        {
                        id: 20466,
                        type: 174,
                        image: null,
                        loc: 'In the room on the lower level by the gate and double doors, on the crate OR On the bench in the room with the elevator'
                        },
                        {
                        id: 20461,
                        type: 176,
                        image: null,
                        loc: 'On the shelf as you climb the ladder to the small 2nd floor area behind the large generator mechanisms OR On the desk in front of the ladder leading up to the attic area.'
                        },
                        {
                        id: 20464,
                        type: 171,
                        image: null,
                        loc: 'On the floor as you open the grating from the ladder to expose the attic area OR By the toilet on the lower level.'
                        },
                        {
                        id: 20465,
                        type: 177,
                        image: null,
                        loc: 'After scaling the roof from the attic to the gated crate area, on one of the boxes OR By the bookcase to the left of the elevator control box.'
                        }
                    ]
                },
                {
                    num:2,
                    items:[
                        {
                        id: 20473,
                        type: 171,
                        image: null,
                        loc: 'On the bed located in the jail area'
                        },
                        {
                        id: 20471,
                        type: 177,
                        image: null,
                        loc: 'On a crate to the left after retrieving your gear'
                        }
                    ]
                },
                {
                    num:4,
                    items: [
                        {
                        id: 20491,
                        type: 171,
                        image: null,
                        loc: 'TEXT'
                        },
                        {
                        id: 20492,
                        type: 177,
                        image: null,
                        loc: 'TEXT'
                        },
                        {
                        id: 20495, // TODO group this with 20493
                        type: 174,
                        image: null,
                        loc: 'TEXT'
                        },
                        {
                        id: 20493,
                        type: 174,
                        image: null,
                        loc: 'TEXT'
                        },
                        {
                        id: 20494,
                        type: 171,
                        image: null,
                        loc: 'TEXT'
                        },
                        {
                        id: 8017,
                        type: 198,
                        image: null,
                        loc: 'TEXT'
                        }
                    ]
                }
            ]
        },
        {
        index: 24,
        name: 'Such Is the Nature of Revenge',
        scenes:
            [
                {
                    num:1,
                    items:[
                        {
                        id: 20521,
                        type: 171,
                        image: null,
                        loc: 'On the ground to the left of phone booth'
                        },
                        {
                        id: 20522,
                        type: 172,
                        image: null,
                        loc: 'On the table in the first room to your right'
                        }
                    ]
                },
                {
                    num:2,
                    items:[
                        {
                        id: 20525,
                        type: 171,
                        image: null,
                        loc: 'On the steps to the church'
                        },
                        {
                        id: 20526,
                        type: 174,
                        image: null,
                        loc: 'On the edge of a crypt to the far left of the antidote'
                        },
                        {
                        id: 20527,
                        type: 171,
                        image: null,
                        loc: 'Beneath a door to the back left area of the graveyard'
                        }
                    ]
                }
            ]
        },
        {
        index: 25,
        name: 'Rest and Relaxation',
        scenes:
            [
                {
                    num:1,
                    items:[
                        {
                        id: 30015,
                        type: 171,
                        image: null,
                        loc: 'Behind the table in starting room'
                        },
                        {
                        id: 30013,
                        type: 193,
                        image: null,
                        loc: 'On the wall in open area where girl asks if dress makes her look fat'
                        },
                        {
                        id: 30017,
                        type: 171,
                        image: null,
                        loc: 'Opposite of the bar in the lounge'
                        },
                        {
                        id: 30014,
                        type: 171,
                        image: null,
                        loc: 'On the table in room 2'
                        },
                        {
                        id: 30016,
                        type: 171,
                        image: null,
                        loc: 'On the floor near beds in the first room on the right before code breaker locked gate'
                        }
                    ]
                },
                {
                    num:2,
                    items:[
                        {
                        id: 30072,
                        type: 171,
                        image: null,
                        loc: 'On a crate to the right after entering motorcycle area'
                        },
                        {
                        id: 30018,
                        type: 193,
                        image: null,
                        loc: 'On the wall outside of SVD room in motorcycle area'
                        },
                        {
                        id: 30071,
                        type: 173,
                        image: null,
                        loc: 'On a crate in a pit after falling rocks'
                        },
                        {
                        id: 30070,
                        type: 174,
                        image: null,
                        loc: 'Under the table in gate control shack'
                        },
                        {
                        id: 30019,
                        type: 193,
                        image: null,
                        loc: 'On the ground after the lava pit (watch out for falling rock)'
                        }
                    ]
                },
                {
                    num:3,
                    items:[
                        {
                        id: 30076,
                        type: 193,
                        image: null,
                        loc: 'On the left pillar in starting area'
                        },
                        {
                        id: 30077,
                        type: 193,
                        image: null,
                        loc: 'Near lockers in room with soda machine and big pipe'
                        },
                        {
                        id: 30075,
                        type: 171,
                        image: null,
                        loc: 'On the cabinet in gate control room'
                        },
                        {
                        id: 30073,
                        type: 173,
                        image: null,
                        loc: 'On the table in side room in the area with lava and pipes'
                        },
                        {
                        id: 30074,
                        type: 171,
                        image: null,
                        loc: 'On the bench near soda machine in big area with lava and arches'
                        }
                    ]
                },
                {
                    num:4,
                    items:[
                        {
                        id: 30078,
                        type: 171,
                        image: null,
                        loc: 'On the left of the balcony after red cave section close to start'
                        },
                        {
                        id: 30079,
                        type: 172,
                        image: null,
                        loc: 'On far shelf after exiting the ventilation'
                        },
                        {
                        id: 30080,
                        type: 193,
                        image: null,
                        loc: 'On the wall after passing soda machine on the other side of broken bridge'
                        },
                        {
                        id: 30081,
                        type: 176,
                        image: null,
                        loc: 'Upstairs in room with equipment'
                        }
                    ]
                }
            ]
        }
    ]
}

export default {
    name: 'item-list',
    data: function () {
        return data;
    },
    components: { IntelItem },
    computed: {
        intels: function () {
            return this.$store.state.Intel.intels;
        },
        settings: function () {
            return this.$store.state.Settings.settings;
        }
    },
    methods: {
        missionIntelCount: function (mission) {
            let self = this;
            let i = 0;
            data.missions[mission].scenes.forEach(function(scene) {
                scene.items.forEach(function(item) {
                    i++;
                });
            });
            return i;
        },
        sceneIntelCount: function (mission, scene) {
            let self = this;
            let i = 0;
            data.missions[mission].scenes[scene].items.forEach(function(item) {
                i++;
            });
            return i;
        },
        missionIntelsFound: function (mission) {
            let self = this;
            let i = 0;
            data.missions[mission].scenes.forEach(function(scene) {
                scene.items.forEach(function(item) {
                    if(self.$store.state.Intel.intels[item.id]) { i++; }
                });
            });
            return i;
        },
        sceneIntelsFound: function (mission, scene) {
            let self = this;
            let i = 0;
            data.missions[mission].scenes[scene].items.forEach(function(item) {
                if(self.$store.state.Intel.intels[item.id]) { i++; }
            });
            return i;
        }
    }
}
</script>