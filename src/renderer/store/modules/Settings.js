const state = {
    settings: {
        backgroundColor: 'black',
        headingColor: 'white',
        textColor: 'white',
        iconFoundColor: 'white',
        iconNotFoundColor: 'grey',
        iconGroupOutlineStyle: '#454545 dotted 2px',
        iconGroupBackgroundColor: '#262626',
        iconWidth: '35',
        iconHeight: '14pt',
        showIcons: true,
        showScenes: true,
        collapseIntelGroups: true,
        showHelp: false,
        scrollToScene: true,
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
      SET_ICON_GROUP_OUTLINE_STYLE (state, style) {
        state.settings.iconGroupOutlineStyle = style;
      },
      SET_ICON_GROUP_BACKGROUND_COLOR (state, color) {
        state.settings.iconGroupBackgroundColor = color;
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
      SET_SHOW_SCENES (state, bool) {
        state.settings.showScenes = (bool === 'true' ? true : false);
      },
      SET_COLLAPSE_INTEL_GROUPS (state, bool) {
        state.settings.collapseIntelGroups = (bool === 'true' ? true : false);
      },
      SET_SHOW_HELP (state, bool) {
        state.settings.showHelp = (bool === 'true' ? true : false);
      },
      SET_SCROLL_TO_SCENE (state, bool) {
        state.settings.scrollToScene = (bool === 'true' ? true : false);
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
    setIconGroupOutlineStyle ({commit}, style) {
      commit('SET_ICON_GROUP_OUTLINE_STYLE', style);
    },
    setIconGroupBackgroundColor ({commit}, color) {
      commit('SET_ICON_GROUP_BACKGROUND_COLOR', color);
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
    setShowScenes ({commit}, bool) {
      commit('SET_SHOW_SCENES', bool);
    },
    setCollapseIntelGroups ({commit}, bool) {
      commit('SET_COLLAPSE_INTEL_GROUPS', bool);
    },
    setShowHelp ({commit}, bool) {
      commit('SET_SHOW_HELP', bool);
    },
    setScrollToScene ({commit}, bool) {
      commit('SET_SCROLL_TO_SCENE', bool);
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
  