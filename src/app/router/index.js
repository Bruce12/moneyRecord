import vueLogin from '../main/login/login.vue'
import vueIndex from '../main/index/index.vue'
let routes = [
    {
        path:'',
        redirect: '/login'
    },
    {
        path:'/login',
        component: vueLogin
    },
    {
      path: '/index',
      component: vueIndex
    }
]
export default routes
