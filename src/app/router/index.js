import vueLogin from '../main/login/login.vue'
let routes = [
    {
        path:'',
        redirect: '/login'
    },
    {
        path:'/login',
        component: vueLogin
    }
]
export default routes