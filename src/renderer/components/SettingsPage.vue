<template>
    <div :style="{backgroundColor:'white', color:'black'}">
        <div class="container is-fluid">
            <div class="content">
                <h1>Settings</h1>
                <p>All settings are saved automatically and take immediate effect. Note that changing the game path will force a refresh of the tracker, but it should only have to be set once.</p>
            </div>
            <button @click="exitSettings()" class="button">Exit Settings</button>
            <div class="field">
                <label class="label">Game Path</label>
                <div class="field has-addons">
                    <div class="control">
                        <div class="file">
                            <label class="file-label">
                                <input class="file-input" type="file" @change="selectedGamePath" webkitdirectory>
                                <span class="file-cta">
                                    <span class="file-label">
                                        Select a directory
                                    </span>
                                </span>
                            </label>
                        </div>
                    </div>
                    <div class="control is-expanded">
                        <input :value="settings.gamePath" @input="updateGamePath" class="input" type="text" placeholder="Game Path">
                    </div>
                </div>
                <p class="help">Select or input the path to the game folder (not the SAVE folder).</p>
            </div>
            <div class="field">
                <label class="label"><span style="vertical-align:middle"><svg width="1rem" height="1rem"><rect width="1rem" height="1rem" :style="{fill:settings.backgroundColor,'stroke-width':3,stroke:'black'}" /></svg></span> Background Color</label>
                <div class="control">
                    <input :value="settings.backgroundColor" @input="updateBackgroundColor" class="input" type="text" placeholder="Background Color">
                </div>
                <p class="help">Use a web color name, such as "red", "HotPink", or hex values like "#4d0026"...</p>
            </div>
            <div class="field">
                <label class="label"><span style="vertical-align:middle"><svg width="1rem" height="1rem"><rect width="1rem" height="1rem" :style="{fill:settings.headingColor,'stroke-width':3,stroke:'black'}" /></svg></span> Mission Title Color</label>
                <div class="control">
                    <input :value="settings.headingColor" @input="updateHeadingColor" class="input" type="text" placeholder="Mission Title Color">
                </div>
                <p class="help">Use a web color name, such as "red", "HotPink", or hex values like "#4d0026"...</p>
            </div>
            <div class="field">
                <label class="label"><span style="vertical-align:middle"><svg width="1rem" height="1rem"><rect width="1rem" height="1rem" :style="{fill:settings.textColor,'stroke-width':3,stroke:'black'}" /></svg></span> Text Color</label>
                <div class="control">
                    <input :value="settings.textColor" @input="updateTextColor" class="input" type="text" placeholder="Text Color">
                </div>
                <p class="help">Use a web color name, such as "red", "HotPink", or hex values like "#4d0026"...</p>
            </div>
            <div class="field">
                <label class="label"><span style="vertical-align:middle"><svg width="1rem" height="1rem"><rect width="1rem" height="1rem" :style="{fill:settings.iconFoundColor,'stroke-width':3,stroke:'black'}" /></svg></span> Intel Found Icon Color </label>
                <div class="control">
                    <input :value="settings.iconFoundColor" @input="updateIconFoundColor" class="input" type="text" placeholder="Intel Found Icon Color">
                </div>
                <p class="help">Use a web color name, such as "red", "HotPink", or hex values like "#4d0026"...</p>
            </div>
            <div class="field">
                <label class="label"><span style="vertical-align:middle"><svg width="1rem" height="1rem" :style="{outline:settings.iconGroupOutlineStyle}"><rect width="1rem" height="1rem" :style="{fill:settings.iconGroupBackgroundColor, outline:settings.iconGroupOutlineStyle}" /></svg></span> Intel Group Outline Style </label>
                <div class="control">
                    <input :value="settings.iconGroupOutlineStyle" @input="updateIconGroupOutlineStyle" class="input" type="text" placeholder="Intel Group Outline Style">
                </div>
                <p class="help">Use a CSS string with a color, line style, and line thickness, such as "#454545 dotted 2px" or "red solid 5px".</p>
            </div>
            <div class="field">
                <label class="label"><span style="vertical-align:middle"><svg width="1rem" height="1rem"><rect width="1rem" height="1rem" :style="{fill:settings.iconGroupBackgroundColor,'stroke-width':3,stroke:'black'}" /></svg></span> Intel Group Background Color </label>
                <div class="control">
                    <input :value="settings.iconGroupBackgroundColor" @input="updateIconGroupBackgroundColor" class="input" type="text" placeholder="Intel Group Background Color">
                </div>
                <p class="help">Use a web color name, such as "red", "HotPink", or hex values like "#4d0026"...</p>
            </div>
            <div class="field">
                <label class="label"><span style="vertical-align:middle"><svg width="1rem" height="1rem"><rect width="1rem" height="1rem" :style="{fill:settings.iconNotFoundColor,'stroke-width':3,stroke:'black'}" /></svg></span> Intel Not Found Icon Color</label>
                <div class="control">
                    <input :value="settings.iconNotFoundColor" @input="updateIconNotFoundColor" class="input" type="text" placeholder="Intel Not Found Icon Color">
                </div>
                <p class="help">Use a web color name, such as "red", "HotPink", or hex values like "#4d0026"...</p>
            </div>
            <div class="field">
                <label class="label">Icon Width</label>
                <div class="control">
                    <input :value="settings.iconWidth" @input="updateIconWidth" class="input" type="text" placeholder="Icon Width">
                </div>
                <p class="help">Use a CSS-style size number or string (e.g. 12, 12pt, 12px).</p>
            </div>
            <div class="field">
                <label class="label">Icon Height</label>
                <div class="control">
                    <input :value="settings.iconHeight" @input="updateIconHeight" class="input" type="text" placeholder="Icon Height">
                </div>
                <p class="help">Use a CSS-style size number or string (e.g. 12, 12pt, 12px).</p>
            </div>
            <div class="field">
                <label class="label">Show Icons</label>
                <div class="select">
                    <select :value="settings.showIcons" @change="updateShowIcons">
                        <option value="true">Show Icons</option>
                        <option value="false">Hide Icons</option>
                    </select>
                </div>
                <p class="help">Allows you to show/hide intel icons. If hidden, only text (mission and/or scene titles) will be shown.</p>
            </div>
            <div class="field">
                <label class="label">Show Scene Grouping and Titles</label>
                <div class="select">
                    <select :value="settings.showScenes" @change="updateShowScenes">
                        <option value="true">Show Scenes</option>
                        <option value="false">Hide Scenes</option>
                    </select>
                </div>
                <p class="help">Allows you to show/hide scene groupings. If hidden, only mission titles will be shown.</p>
            </div>
            <div class="field">
                <label class="label">Collapse Partial Intel Groups</label>
                <div class="select">
                    <select :value="settings.collapseIntelGroups" @change="updateCollapseIntelGroups">
                        <option value="true">Hide Unfound Intel In Group</option>
                        <option value="false">Always Show Both Intel Items In Group</option>
                    </select>
                </div>
                <p class="help">Intel Groups have 2 items, this settings lets you hide the 'missing' item when you find the other.</p>
            </div>
            <div class="field">
                <label class="label">Show Help Text</label>
                <div class="select">
                    <select :value="settings.showHelp" @change="updateShowHelp">
                        <option value="true">Show Help</option>
                        <option value="false">Hide Help</option>
                    </select>
                </div>
                <p class="help">Allows you to show/hide intel item location help/hints. Icons must be turned on for these to display.</p>
            </div>
            <div class="field">
                <label class="label">Scroll To Scene</label>
                <div class="select">
                    <select :value="settings.scrollToScene" @change="updateScrollToScene">
                        <option value="true">Scrolling On</option>
                        <option value="false">Scrolling Off</option>
                    </select>
                </div>
                <p class="help">When new intel items are found, the window will automatically scroll to center that scene in the window if necessary.</p>
            </div>
            <div class="field">
                <label class="label">Window Width</label>
                <div class="control">
                    <input disabled :value="settings.windowWidth" @input="updateWindowWidth" class="input" type="text" placeholder="Window Width">
                </div>
                <p class="help">Use a positive integer value (e.g. 100, 200, 512).</p>
            </div>
            <div class="field">
                <label class="label">Window Height</label>
                <div class="control">
                    <input disabled :value="settings.windowHeight" @input="updateWindowHeight" class="input" type="text" placeholder="Window Height">
                </div>
                <p class="help">Use a positive integer value (e.g. 100, 200, 512).</p>
            </div>
        </div>
        <footer class="footer">
            <div class="content has-text-centered">
                <p><strong>IntelTracker</strong> coded by <i>Nathaniel "Hectate" Mitchell</i>, with content contributions by <i>hipp0cat</i>. The source code is licensed MIT.</p>
                <p>Version 0.8.2</p>
            </div>
        </footer>
    </div>
</template>

<script>
import { mapActions } from 'vuex';

var data = {
    //some data here? WHO KNOWS HAHAHA
};

export default {
    name: 'settings-page',
    data: function () {
        return data;
    },
    computed: {
        settings: function () {
            return this.$store.state.Settings.settings;
        }
    },
    methods: {
        updateBackgroundColor(e) {
            this.$store.dispatch('setBackgroundColor', e.target.value);
        },
        updateHeadingColor(e) {
            this.$store.dispatch('setHeadingColor', e.target.value);
        },
        updateTextColor(e) {
            this.$store.dispatch('setTextColor', e.target.value);
        },
        updateIconFoundColor(e) {
            this.$store.dispatch('setIconFoundColor', e.target.value);
        },
        updateIconNotFoundColor(e) {
            this.$store.dispatch('setIconNotFoundColor', e.target.value);
        },
        updateIconGroupOutlineStyle(e) {
            this.$store.dispatch('setIconGroupOutlineStyle', e.target.value);
        },
        updateIconGroupBackgroundColor(e) {
            this.$store.dispatch('setIconGroupBackgroundColor', e.target.value);
        },
        updateIconWidth(e) {
            this.$store.dispatch('setIconWidth', e.target.value);
        },
        updateIconHeight(e) {
            this.$store.dispatch('setIconHeight', e.target.value);
        },
        updateShowIcons(e) {
            this.$store.dispatch('setShowIcons', e.target.value);
        },
        updateShowScenes(e) {
            this.$store.dispatch('setShowScenes', e.target.value);
        },
        updateCollapseIntelGroups(e) {
            this.$store.dispatch('setCollapseIntelGroups', e.target.value);
        },
        updateShowHelp(e) {
            this.$store.dispatch('setShowHelp', e.target.value);
        },
        updateScrollToScene(e) {
            this.$store.dispatch('setScrollToScene', e.target.value);
        },
        updateWindowWidth(e) {
            this.$store.dispatch('setWindowWidth', e.target.value);
        },
        updateWindowHeight(e) {
            this.$store.dispatch('setWindowHeight', e.target.value);
        },
        updateGamePath(e) {
            this.$store.dispatch('setGamePath', e.target.value);
        },
        selectedGamePath(e) {
            this.$store.dispatch('setGamePath', e.srcElement.files[0].path);
        },
        exitSettings() {
            this.$router.push('/');
        }
    }
}
</script>