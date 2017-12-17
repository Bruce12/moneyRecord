import Vue from 'vue'
import vueRouter from 'vue-router'
import App from './App.vue'
import routes from './app/router/index'
import {routerMode} from './app/config/env'
import store from './app/store/'
import fastClick from 'fastclick'
import Icon from 'vue-awesome/components/Icon'
import './app/config/rem'
// import 'vue-awesome/icons/flag'
import 'vue-awesome/icons'

if ('addEventListener' in document) {
  document.addEventListener('DOMContentLoaded', function() {
    fastClick.attach(document.body)
  },false)
}
Vue.component('icon', Icon)
Vue.use(vueRouter)
const router = new vueRouter({
  routes,
  mode: routerMode,
  strict: true,
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      if (from.meta.keepAlive){
        from.meta.savedPosition = document.body.scrollTop
      }
      return { x: 0, y: to.meta.savedPosition || 0 }
    }
  }
})
new Vue({
    el: '#app',
    router,
    store,
    render: render => render(App)
})
