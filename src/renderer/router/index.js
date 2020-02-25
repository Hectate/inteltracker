import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'tracker',
      component: require('@/components/ItemList').default
    },
    {
      path: '/settings',
      name: 'settings'
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
