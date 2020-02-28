<template>
    <div style="padding-left: 5px;padding-right: 5px;">
    <div class="content">
        <div v-for="(mission, index) in missions" :key="mission.index">
            <p>{{mission.name}} {{intelsFound(index)}}/{{mission.items.length}}</p>
            <div v-if="settings.showIcons">
                <intel-item v-for="item in mission.items" :key="item.id" :id="item.id" :found="intels[item.id]" :info="item"></intel-item>
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
        items: [
            {
            id: 20531,
            type: 193,
            image: null,
            name: ''
            },
            {
            id: 20538,
            type: 175,
            image: null,
            name: ''
            },
            {
            id: 20533,
            type: 193,
            image: null,
            name: ''
            },
            {
            id: 20534,
            type: 193,
            image: null,
            name: ''
            },
            {
            id: 20539,
            type: 171,
            image: null,
            name: ''
            },
            {
            id: 20537,
            type: 173,
            image: null,
            name: ''
            },
            {
            id: 'a8005',
            type: 176,
            image: null,
            name: ''
            },
            {
            id: 8007,
            type: 178,
            image: null,
            name: ''
            },
            {
            id: 8001,
            type: 172,
            image: null,
            name: ''
            },
            {
            id: 8006,
            type: 177,
            image: null,
            name: ''
            },
            {
            id: 8000,
            type: 171,
            image: null,
            name: ''
            },
            {
            id: 8003,
            type: 174,
            image: null,
            name: ''
            },
            {
            id: 8004,
            type: 175,
            image: null,
            name: ''
            },
            {
            id: 8002,
            type: 173,
            image: null,
            name: ''
            },
            {
            id: 20062,
            type: 171,
            image: null,
            name: ''
            }
        ]
        },
        {
        index: 1,
        name: 'Misfortune in Morocco',
        items: [
            {
                id: 20068,
                type: 171,
                image: null,
                name: ''
            },
            {
            id: 20073,
            type: 193,
            image: null,
            name: ''
            },
            {
            id: 20009,
            type: 171,
            image: null,
            name: ''
            },
            {
            id: 20005,
            type: 171,
            image: null,
            name: ''
            },
            {
            id: 20064,
            type: 177,
            image: null,
            name: ''
            },
            {
            id: 20070,
            type: 174,
            image: null,
            name: ''
            },
            {
            id: 20050,
            type: 173,
            image: null,
            name: ''
            },
            {
            id: 20046,
            type: 171,
            image: null,
            name: ''
            },
            {
            id: 20006,
            type: 177,
            image: null,
            name: ''
            },
            {
            id: 20061,
            type: 175,
            image: null,
            name: ''
            },
            {
            id: 20069,
            type: 171,
            image: null,
            name: ''
            },
            {
            id: 20067,
            type: 174,
            image: null,
            name: ''
            },
            {
            id: 20066,
            type: 171,
            image: null,
            name: ''
            },
            {
            id: 20072,
            type: 174,
            image: null,
            name: ''
            },
            {
            id: 20063,
            type: 177,
            image: null,
            name: ''
            },
            {
            id: 20043,
            type: 176,
            image: null,
            name: ''
            },
            {
            id: 20041,
            type: 175,
            image: null,
            name: ''
            },
            {
            id: 20049,
            type: 174,
            image: null,
            name: ''
            },
            {
            id: 20047,
            type: 171,
            image: null,
            name: ''
            },
            {
            id: 20042,
            type: 175,
            image: null,
            name: ''
            },
            {
            id: 20045,
            type: 177,
            image: null,
            name: ''
            },
            {
            id: 20048,
            type: 177,
            image: null,
            name: ''
            },
            {
            id: 20044,
            type: 175,
            image: null,
            name: ''
            },
            {
            id: 20033,
            type: 193,
            image: null,
            name: ''
            },
            {
            id: 20023,
            type: 176,
            image: null,
            name: ''
            },
            {
            id: 20027,
            type: 174,
            image: null,
            name: ''
            },
            {
            id: 20026,
            type: 176,
            image: null,
            name: ''
            },
            {
            id: 20030,
            type: 174,
            image: null,
            name: ''
            },
            {
            id: 20021,
            type: 175,
            image: null,
            name: ''
            },
            {
            id: 20022,
            type: 176,
            image: null,
            name: ''
            },
            {
            id: 20028,
            type: 177,
            image: null,
            name: ''
            },
            {
            id: 20031,
            type: 174,
            image: null,
            name: ''
            },
            {
            id: 20025,
            type: 171,
            image: null,
            name: ''
            },
            {
            id: 20024,
            type: 175,
            image: null,
            name: ''
            },
            {
            id: 20029,
            type: 171,
            image: null,
            name: ''
            },
            {
            id: 20032,
            type: 193,
            image: null,
            name: ''
            },
            {
            id: 20008,
            type: 172,
            image: null,
            name: ''
            },
            {
            id: 20003,
            type: 176,
            image: null,
            name: ''
            },
            {
            id: 20002,
            type: 171,
            image: null,
            name: ''
            },
            {
            id: 20001,
            type: 177,
            image: null,
            name: ''
            },
            {
            id: 20104,
            type: 176,
            image: null,
            name: ''
            }
        ]
        },
        {
        index: 3,
        name: 'Berlin by Night',
        items: [
            {
            id: 20091,
            type: 171,
            image: null,
            name: ''
            },
            {
            id: 20109,
            type: 176,
            image: null,
            name: ''
            },
            {
            id: 20107,
            type: 171,
            image: null,
            name: ''
            },
            {
            id: 20102,
            type: 174,
            image: null,
            name: ''
            },
            {
            id: 20103,
            type: 176,
            image: null,
            name: ''
            },
            {
            id: 20106,
            type: 171,
            image: null,
            name: ''
            },
            {
            id: 20108,
            type: 173,
            image: null,
            name: ''
            },
            {
            id: 20101,
            type: 171,
            image: null,
            name: ''
            },
            {
            id: 20105,
            type: 175,
            image: null,
            name: ''
            },
            {
            id: 20095,
            type: 172,
            image: null,
            name: ''
            },
            {
            id: 20094,
            type: 171,
            image: null,
            name: ''
            },
            {
            id: 20093,
            type: 176,
            image: null,
            name: ''
            },
            {
            id: 20092,
            type: 171,
            image: null,
            name: ''
            },
            {
            id: 20096,
            type: 178,
            image: null,
            name: ''
            },
            {
            id: 20098,
            type: 193,
            image: null,
            name: ''
            },
            {
            id: 20083,
            type: 171,
            image: null,
            name: ''
            },
            {
            id: 20084,
            type: 171,
            image: null,
            name: ''
            },
            {
            id: 20082,
            type: 177,
            image: null,
            name: ''
            },
            {
            id: 20125,
            type: 172,
            image: null,
            name: ''
            }
        ]
        },
        {
        index: 4,
        name: 'Unexpected Turbulence',
        items: [
            {
            id: 20127,
            type: 177,
            image: null,
            name: ''
            },
            {
            id: 20123,
            type: 175,
            image: null,
            name: ''
            },
            {
            id: 20122,
            type: 174,
            image: null,
            name: ''
            },
            {
            id: 20126,
            type: 176,
            image: null,
            name: ''
            },
            {
            id: 20114,
            type: 171,
            image: null,
            name: ''
            },
            {
            id: 20112,
            type: 175,
            image: null,
            name: ''
            },
            {
            id: 20144,
            type: 174,
            image: null,
            name: ''
            }
        ]
        },
        {
        index: 6,
        name: 'Rendezvous in Hamburg',
        items: [
            {
            id: 20145,
            type: 175,
            image: null,
            name: ''
            },
            {
            id: 20142,
            type: 177,
            image: null,
            name: ''
            },
            {
            id: 20143,
            type: 171,
            image: null,
            name: ''
            },
            {
            id: 20141,
            type: 175,
            image: null,
            name: ''
            },
            {
            id: 20132,
            type: 171,
            image: null,
            name: ''
            },
            {
            id: 20131,
            type: 171,
            image: null,
            name: ''
            },
            {
            id: 20133,
            type: 175,
            image: null,
            name: ''
            },
            {
            id: 20193,
            type: 176,
            image: null,
            name: ''
            }
        ]
        },
        {
        index: 8,
        name: 'A Tenuous Lead',
        items: [
            {
            id: 20191,
            type: 171,
            image: null,
            name: ''
            },
            {
            id: 20185,
            type: 171,
            image: null,
            name: ''
            },
            {
            id: 20166,
            type: 178,
            image: null,
            name: ''
            },
            {
            id: 20155,
            type: 171,
            image: null,
            name: ''
            },
            {
            id: 20156,
            type: 171,
            image: null,
            name: ''
            },
            {
            id: 20194,
            type: 177,
            image: null,
            name: ''
            },
            {
            id: 20176,
            type: 175,
            image: null,
            name: ''
            },
            {
            id: 20192,
            type: 176,
            image: null,
            name: ''
            },
            {
            id: 20184,
            type: 171,
            image: null,
            name: ''
            },
            {
            id: 20182,
            type: 171,
            image: null,
            name: ''
            },
            {
            id: 20174,
            type: 177,
            image: null,
            name: ''
            },
            {
            id: 20172,
            type: 176,
            image: null,
            name: ''
            },
            {
            id: 20173,
            type: 171,
            image: null,
            name: ''
            },
            {
            id: 20167,
            type: 177,
            image: null,
            name: ''
            },
            {
            id: 20164,
            type: 176,
            image: null,
            name: ''
            },
            {
            id: 20163,
            type: 171,
            image: null,
            name: ''
            },
            {
            id: 20157,
            type: 193,
            image: null,
            name: ''
            },
            {
            id: 20154,
            type: 171,
            image: null,
            name: ''
            },
            {
            id: 20158,
            type: 193,
            image: null,
            name: ''
            },
            {
            id: 20152,
            type: 176,
            image: null,
            name: ''
            },
            {
            id: 20153,
            type: 171,
            image: null,
            name: ''
            },
            {
            id: 20151,
            type: 171,
            image: null,
            name: ''
            },
            {
            id: 20221,
            type: 171,
            image: null,
            name: ''
            }
        ]
        },
        {
        index: 10,
        name: 'The Dive',
        items: [
            {
            id: 20223,
            type: 173,
            image: null,
            name: ''
            },
            {
            id: 20222,
            type: 171,
            image: null,
            name: ''
            },
            {
            id: 8015,
            type: 197,
            image: null,
            name: ''
            },
            {
            id: 20225,
            type: 174,
            image: null,
            name: ''
            },
            {
            id: 20224,
            type: 178,
            image: null,
            name: ''
            },
            {
            id: 8014,
            type: 196,
            image: null,
            name: ''
            },
            {
            id: 20213,
            type: 177,
            image: null,
            name: ''
            },
            {
            id: 20212,
            type: 176,
            image: null,
            name: ''
            },
            {
            id: 20214,
            type: 193,
            image: null,
            name: ''
            },
            {
            id: 20211,
            type: 171,
            image: null,
            name: ''
            },
            {
            id: 20203,
            type: 178,
            image: null,
            name: ''
            },
            {
            id: 20204,
            type: 171,
            image: null,
            name: ''
            },
            {
            id: 20201,
            type: 177,
            image: null,
            name: ''
            },
            {
            id: 20205,
            type: 174,
            image: null,
            name: ''
            },
            {
            id: 20202,
            type: 171,
            image: null,
            name: ''
            },
            {
            id: 20263,
            type: 171,
            image: null,
            name: ''
            }
        ]
        },
        {
        index: 12,
        name: 'A Man of Influence',
        items: [
            {
            id: 20264,
            type: 177,
            image: null,
            name: ''
            },
            {
            id: 20262,
            type: 174,
            image: null,
            name: ''
            },
            {
            id: 20261,
            type: 171,
            image: null,
            name: ''
            },
            {
            id: 20242,
            type: 177,
            image: null,
            name: ''
            },
            {
            id: 20243,
            type: 171,
            image: null,
            name: ''
            },
            {
            id: 20241,
            type: 171,
            image: null,
            name: ''
            },
            {
            id: 20237,
            type: 172,
            image: null,
            name: ''
            },
            {
            id: 'b8005',
            type: 176,
            image: null,
            name: ''
            },
            {
            id: 20235,
            type: 177,
            image: null,
            name: ''
            },
            {
            id: 20234,
            type: 177,
            image: null,
            name: ''
            },
            {
            id: 20233,
            type: 177,
            image: null,
            name: ''
            },
            {
            id: 20236,
            type: 173,
            image: null,
            name: ''
            },
            {
            id: 20232,
            type: 171,
            image: null,
            name: ''
            },
            {
            id: 20231,
            type: 177,
            image: null,
            name: ''
            },
            {
            id: 20329,
            type: 171,
            image: null,
            name: ''
            }
        ]
        },
        {
        index: 14,
        name: 'Safecracker',
        items: [
            {
                id: 20306,
                type: 175,
                image: null,
                name: ''
            },
            {
                id: 20356,
                type: 171,
                image: null,
                name:''
            },
            {
            id: 20328,
            type: 171,
            image: null,
            name: ''
            },
            {
            id: 20324,
            type: 174,
            image: null,
            name: ''
            },
            {
            id: 20315,
            type: 176,
            image: null,
            name: ''
            },
            {
            id: 20291,
            type: 171,
            image: null,
            name: ''
            },
            {
            id: 20327,
            type: 177,
            image: null,
            name: ''
            },
            {
            id: 20326,
            type: 175,
            image: null,
            name: ''
            },
            {
            id: 20321,
            type: 171,
            image: null,
            name: ''
            },
            {
            id: 20323,
            type: 176,
            image: null,
            name: ''
            },
            {
            id: 20322,
            type: 172,
            image: null,
            name: ''
            },
            {
            id: 20317,
            type: 172,
            image: null,
            name: ''
            },
            {
            id: 20319,
            type: 171,
            image: null,
            name: ''
            },
            {
            id: 20318,
            type: 171,
            image: null,
            name: ''
            },
            {
            id: 20307,
            type: 175,
            image: null,
            name: ''
            },
            {
            id: 20316,
            type: 174,
            image: null,
            name: ''
            },
            {
            id: 20312,
            type: 176,
            image: null,
            name: ''
            },
            {
            id: 20313,
            type: 175,
            image: null,
            name: ''
            },
            {
            id: 20311,
            type: 177,
            image: null,
            name: ''
            },
            {
            id: 20304,
            type: 174,
            image: null,
            name: ''
            },
            {
            id: 20305,
            type: 171,
            image: null,
            name: ''
            },
            {
            id: 20303,
            type: 176,
            image: null,
            name: ''
            },
            {
            id: 20301,
            type: 172,
            image: null,
            name: ''
            },
            {
            id: 20302,
            type: 171,
            image: null,
            name: ''
            },
            {
            id: 20295,
            type: 173,
            image: null,
            name: ''
            },
            {
            id: 20293,
            type: 176,
            image: null,
            name: ''
            },
            {
            id: 20292,
            type: 171,
            image: null,
            name: ''
            },
            {
            id: 20294,
            type: 193,
            image: null,
            name: ''
            },
            {
            id: 20281,
            type: 171,
            image: null,
            name: ''
            },
            {
            id: 20273,
            type: 172,
            image: null,
            name: ''
            },
            {
            id: 20272,
            type: 177,
            image: null,
            name: ''
            },
            {
            id: 20271,
            type: 171,
            image: null,
            name: ''
            },
            {
            id: 20275,
            type: 171,
            image: null,
            name: ''
            },
            {
            id: 20274,
            type: 173,
            image: null,
            name: ''
            }
        ]
        },
        {
            index: 15,
            name: 'An Ounce of Hope',
            items: [
                {
                    id: 20532,
                    type: 193,
                    image: null,
                    name: ''
                }
            ]
        },
        {
        index: 16,
        name: 'Rescue Attempt',
        items: [
            {
            id: 20351,
            type: 172,
            image: null,
            name: ''
            },
            {
            id: 20341,
            type: 171,
            image: null,
            name: ''
            },
            {
            id: 20332,
            type: 171,
            image: null,
            name: ''
            },
            {
            id: 20353,
            type: 176,
            image: null,
            name: ''
            },
            {
            id: 20352,
            type: 171,
            image: null,
            name: ''
            },
            {
            id: 20354,
            type: 173,
            image: null,
            name: ''
            },
            {
            id: 'a8013',
            type: 195,
            image: null,
            name: ''
            },
            {
            id: 20344,
            type: 175,
            image: null,
            name: ''
            },
            {
            id: 20343,
            type: 171,
            image: null,
            name: ''
            },
            {
            id: 20342,
            type: 172,
            image: null,
            name: ''
            },
            {
            id: 20345,
            type: 193,
            image: null,
            name: ''
            },
            {
            id: 20335,
            type: 178,
            image: null,
            name: ''
            },
            {
            id: 20334,
            type: 171,
            image: null,
            name: ''
            },
            {
            id: 20333,
            type: 174,
            image: null,
            name: ''
            },
            {
            id: 8012,
            type: 194,
            image: null,
            name: ''
            },
            {
            id: 8016,
            type: 198,
            image: null,
            name: ''
            },
            {
            id: 20331,
            type: 176,
            image: null,
            name: ''
            },
            {
            id: 20393,
            type: 177,
            image: null,
            name: ''
            }
        ]
        },
        {
        index: 18,
        name: 'Trouble in the Tropics',
        items: [
            {
                id: 20377,
                type: 177,
                image: null,
                name: ''
            },
            {
            id: 20378,
            type: 176,
            image: null,
            name: ''
            },
            {
            id: 20374,
            type: 171,
            image: null,
            name: ''
            },
            {
            id: 20394,
            type: 174,
            image: null,
            name: ''
            },
            {
            id: 20396,
            type: 171,
            image: null,
            name: ''
            },
            {
            id: 20397,
            type: 171,
            image: null,
            name: ''
            },
            {
            id: 20392,
            type: 171,
            image: null,
            name: ''
            },
            {
            id: 20391,
            type: 175,
            image: null,
            name: ''
            },
            {
            id: 20382,
            type: 176,
            image: null,
            name: ''
            },
            {
            id: 20381,
            type: 171,
            image: null,
            name: ''
            },
            {
            id: 20376,
            type: 171,
            image: null,
            name: ''
            },
            {
            id: 20375,
            type: 174,
            image: null,
            name: ''
            },
            {
            id: 20373,
            type: 176,
            image: null,
            name: ''
            },
            {
            id: 20372,
            type: 177,
            image: null,
            name: ''
            },
            {
            id: 20371,
            type: 171,
            image: null,
            name: ''
            },
            {
            id: 20364,
            type: 173,
            image: null,
            name: ''
            },
            {
            id: 20361,
            type: 171,
            image: null,
            name: ''
            },
            {
            id: 20363,
            type: 177,
            image: null,
            name: ''
            },
            {
            id: 20362,
            type: 176,
            image: null,
            name: ''
            },
            {
            id: 20411,
            type: 171,
            image: null,
            name: ''
            }
        ]
        },
        {
        index: 19,
        name: 'Low Earth Orbit',
        items: [
            {
            id: 20406,
            type: 171,
            image: null,
            name: ''
            },
            {
            id: 20402,
            type: 176,
            image: null,
            name: ''
            },
            {
            id: 20412,
            type: 172,
            image: null,
            name: ''
            },
            {
            id: 20409,
            type: 172,
            image: null,
            name: ''
            },
            {
            id: 20405,
            type: 171,
            image: null,
            name: ''
            },
            {
            id: 20404,
            type: 172,
            image: null,
            name: ''
            },
            {
            id: 20407,
            type: 177,
            image: null,
            name: ''
            },
            {
            id: 20408,
            type: 171,
            image: null,
            name: ''
            },
            {
            id: 20403,
            type: 174,
            image: null,
            name: ''
            },
            {
            id: 'b8013',
            type: 195,
            image: null,
            name: ''
            },
            {
            id: 20401,
            type: 171,
            image: null,
            name: ''
            },
            {
            id: 20431,
            type: 171,
            image: null,
            name: ''
            }
        ]
        },
        {
        index: 21,
        name: 'Alpine Intrigue',
        items: [
            {
            id: 20433,
            type: 172,
            image: null,
            name: ''
            },
            {
            id: 20432,
            type: 176,
            image: null,
            name: ''
            },
            {
            id: 20423,
            type: 171,
            image: null,
            name: ''
            },
            {
            id: 20422,
            type: 174,
            image: null,
            name: ''
            },
            {
            id: 20421,
            type: 171,
            image: null,
            name: ''
            },
            {
            id: 8017,
            type: 198,
            image: null,
            name: ''
            }
        ]
        },
        {
        index: 22,
        name: 'The Indomitable Cate Archer',
        items: [
            {
                id: 20495,
                type: 174,
                image: null,
                name: ''
            },
            {
            id: 20494,
            type: 171,
            image: null,
            name: ''
            },
            {
            id: 20493,
            type: 174,
            image: null,
            name: ''
            },
            {
            id: 20492,
            type: 177,
            image: null,
            name: ''
            },
            {
            id: 20491,
            type: 171,
            image: null,
            name: ''
            },
            {
            id: 20471,
            type: 177,
            image: null,
            name: ''
            },
            {
            id: 20473,
            type: 171,
            image: null,
            name: ''
            },
            {
            id: 20465,
            type: 177,
            image: null,
            name: ''
            },
            {
            id: 20464,
            type: 171,
            image: null,
            name: ''
            },
            {
            id: 20461,
            type: 176,
            image: null,
            name: ''
            },
            {
            id: 20466,
            type: 174,
            image: null,
            name: ''
            },
            {
            id: 20463,
            type: 172,
            image: null,
            name: ''
            },
            {
            id: 20462,
            type: 171,
            image: null,
            name: ''
            },
            {
            id: 20526,
            type: 174,
            image: null,
            name: ''
            }
        ]
        },
        {
        index: 24,
        name: 'Such Is the Nature of Revenge',
        items: [
            {
            id: 20527,
            type: 171,
            image: null,
            name: ''
            },
            {
            id: 20525,
            type: 171,
            image: null,
            name: ''
            },
            {
            id: 20522,
            type: 172,
            image: null,
            name: ''
            },
            {
            id: 30081,
            type: 176,
            image: null,
            name: ''
            }
        ]
        },
        {
        index: 25,
        name: 'Rest and Relaxation',
        items: [
            {
                id: 30076,
                type: 193,
                image: null,
                name: ''
            },
            {
                id: 30080,
                type: 193,
                image: null,
                name: ''
            },
            {
            id: 30079,
            type: 172,
            image: null,
            name: ''
            },
            {
            id: 30078,
            type: 171,
            image: null,
            name: ''
            },
            {
            id: 30074,
            type: 171,
            image: null,
            name: ''
            },
            {
            id: 30073,
            type: 173,
            image: null,
            name: ''
            },
            {
            id: 30075,
            type: 171,
            image: null,
            name: ''
            },
            {
            id: 30077,
            type: 193,
            image: null,
            name: ''
            },
            {
            id: 30071,
            type: 173,
            image: null,
            name: ''
            },
            {
            id: 30019,
            type: 193,
            image: null,
            name: ''
            },
            {
            id: 30070,
            type: 174,
            image: null,
            name: ''
            },
            {
            id: 30018,
            type: 193,
            image: null,
            name: ''
            },
            {
            id: 30072,
            type: 171,
            image: null,
            name: ''
            },
            {
            id: 30016,
            type: 171,
            image: null,
            name: ''
            },
            {
            id: 30017,
            type: 171,
            image: null,
            name: ''
            },
            {
            id: 30014,
            type: 171,
            image: null,
            name: ''
            },
            {
            id: 30013,
            type: 193,
            image: null,
            name: ''
            },
            {
            id: 30015,
            type: 171,
            image: null,
            name: ''
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
        intelsFound: function (index) {
            let self = this;
            let i = 0;
            data.missions[index].items.forEach(function(item) {
                if(self.$store.state.Intel.intels[item.id]) { i++; }
            });
            return i;
        }
    }
}
</script>