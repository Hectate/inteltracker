import Vue from 'vue'
import axios from 'axios'

import App from './App'
import router from './router'
import store from './store'

import 'bulma/css/bulma.css'

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  template: '<App/>',
  methods: {
    toggleSettings() {
      if(router.currentRoute.path == '/settings') {
        router.push('/');
      }
      else router.push('/settings');
    }
  },
  mounted() {
      this._keyListener = function(e) {
          if (e.key === "s" && (e.ctrlKey || e.metaKey)) {
              e.preventDefault(); // present "Save Page" from getting triggered.

              this.toggleSettings();
          }
      };

      document.addEventListener('keydown', this._keyListener.bind(this));
  },
  beforeDestroy() {
      document.removeEventListener('keydown', this._keyListener);
  }
}).$mount('#app')
