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
                <label class="label">Background Color</label>
                <div class="control">
                    <input :value="settings.backgroundColor" @input="updateBackgroundColor" class="input" type="text" placeholder="Background Color">
                </div>
                <p class="help">Use a web color name, such as "red", "HotPink", etc...</p>
            </div>
            <div class="field">
                <label class="label">Mission Title Color</label>
                <div class="control">
                    <input disabled :value="settings.headingColor" @input="updateHeadingColor" class="input" type="text" placeholder="Mission Title Color">
                </div>
                <p class="help">This does nothing right now; use the Text Color below instead.</p>
            </div>
            <div class="field">
                <label class="label">Text Color</label>
                <div class="control">
                    <input :value="settings.textColor" @input="updateTextColor" class="input" type="text" placeholder="Text Color">
                </div>
                <p class="help">Use a web color name, such as "red", "HotPink", etc...</p>
            </div>
            <div class="field">
                <label class="label">Intel Found Icon Color</label>
                <div class="control">
                    <input :value="settings.iconFoundColor" @input="updateIconFoundColor" class="input" type="text" placeholder="Intel Found Icon Color">
                </div>
                <p class="help">Use a web color name, such as "red", "HotPink", etc...</p>
            </div>
            <div class="field">
                <label class="label">Intel Not Found Icon Color</label>
                <div class="control">
                    <input :value="settings.iconNotFoundColor" @input="updateIconNotFoundColor" class="input" type="text" placeholder="Intel Not Found Icon Color">
                </div>
                <p class="help">Use a web color name, such as "red", "HotPink", etc...</p>
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
                <p class="help">Allows you to show/hide intel icons. If hidden, only mission titles will be shown.</p>
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
        updateIconWidth(e) {
            this.$store.dispatch('setIconWidth', e.target.value);
        },
        updateIconHeight(e) {
            this.$store.dispatch('setIconHeight', e.target.value);
        },
        updateShowIcons(e) {
            this.$store.dispatch('setShowIcons', e.target.value);
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