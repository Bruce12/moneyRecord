import {RECORD_USERINFO} from './mutation-type'
import {setStore, getStore} from '../config/utils'
export default {
  [RECORD_USERINFO](state, info){
    state.userInfo = info
    state.login = true
    setStore('user_sid', info)
  }
}
