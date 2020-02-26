/*
* TODO: have some settings to add later:
* 1. Collapse upon complete; hide icons of missions completed
* 2. Scroll-to current mission
* 3. Overlay for completed icons, w/ color option
* 4. Change font type, size
* 5. Progress bars for entire set
* 6. Make R&R mission optional
* 7. Custom resorting of icons
* 8. ???
*/
const state = {
    settings: {
        backgroundColor: 'black',
        headingColor: 'white',
        textColor: 'white',
        iconFoundColor: 'white',
        iconNotFoundColor: 'grey',
        iconWidth: '35',
        iconHeight: '14pt',
        showIcons: true,
        windowWidth:100,
        windowHeight:100,
        gamePath:'C:\\Games\\NOLF'
    }
  }
  
  const mutations = {
      SET_BACKGROUND_COLOR (state, color) {
        state.settings.backgroundColor = color;
      },
      SET_HEADING_COLOR (state, color) {
        state.settings.headingColor = color;
      },
      SET_TEXT_COLOR (state, color) {
        state.settings.textColor = color;
      },
      SET_ICON_FOUND_COLOR (state, color) {
        state.settings.iconFoundColor = color;
      },
      SET_ICON_NOT_FOUND_COLOR (state, color) {
        state.settings.iconNotFoundColor = color;
      },
      SET_ICON_WIDTH (state, width) {
        state.settings.iconWidth = width;
      },
      SET_ICON_HEIGHT (state, height) {
        state.settings.iconHeight = height;
      },
      SET_SHOW_ICONS (state, bool) {
        state.settings.showIcons = (bool === 'true' ? true : false);
      },
      SET_WINDOW_WIDTH (state, width) {
        state.settings.windowWidth = width;
      },
      SET_WINDOW_HEIGHT (state, height) {
        state.settings.windowHeight = height;
      },
      SET_GAME_PATH (state, path) {
          // Because the file watcher has to look at a new path, we just reload the entire "app" to force it to get the new location
        state.settings.gamePath = path;
        window.location.reload();
      }
  }
  
  const actions = {
    setBackgroundColor ({commit}, color) {
        commit('SET_BACKGROUND_COLOR', color);
    },
    setHeadingColor ({commit}, color) {
        commit('SET_HEADING_COLOR', color);
    },
    setTextColor ({commit}, color) {
        commit('SET_TEXT_COLOR', color);
    },
    setIconFoundColor ({commit}, color) {
        commit('SET_ICON_FOUND_COLOR', color);
    },
    setIconNotFoundColor ({commit}, color) {
        commit('SET_ICON_NOT_FOUND_COLOR', color);
    },
    setIconWidth ({commit}, width) {
        commit('SET_ICON_WIDTH', width);
    },
    setIconHeight ({commit}, height) {
        commit('SET_ICON_HEIGHT', height);
    },
    setShowIcons ({commit}, bool) {
        commit('SET_SHOW_ICONS', bool);
    },
    setWindowWidth ({commit}, width) {
        commit('SET_WINDOW_WIDTH', width);
    },
    setWindowHeight ({commit}, height) {
        commit('SET_WINDOW_HEIGHT', height);
    },
    setGamePath ({commit}, path) {
        commit('SET_GAME_PATH', path);
    }
  }

  export default {
    state,
    mutations,
    actions
  }
  