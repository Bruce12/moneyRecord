import vueLogin from '../main/login/login.vue'
import vueIndex from '../main/index/index.vue'
import vueAccount from '../main/index/children/account.vue'
import vueWallet from '../main/index/children/wallet.vue'
import vueDiscover from '../main/index/children/discover.vue'
import vueMore from '../main/index/children/more.vue'
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
      component: vueIndex,
      children : [
          {
              path: '/account',
              component: vueAccount
          },
          {
              path: '/wallet',
              component: vueWallet
          },
          {
              path: '/discover',
              component: vueDiscover
          },
          {
              path: '/more',
              component: vueMore
          }
      ]
    }
]
export default routes
