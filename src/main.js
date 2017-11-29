import Vue from 'vue'
import vueRouter from 'vue-router'
import App from './App.vue'
import routes from './app/router/index'
Vue.use(vueRouter)
new Vue({
    el: '#app',
    router: new vueRouter({routes}),
    render: render => render(App)
})