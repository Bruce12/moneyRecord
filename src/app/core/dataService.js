import fetch from '../config/fetch'
import {getStore} from '../config/utils'

//用户登录
export const userLogin = (uname, pwd) => fetch('/u/l', {
  account: uname,
  pwd: pwd
},'POST')
//获取首页数据列表
export const getInfo = () => fetch('/h/i', {
  sid: getStore('user_sid')
},'POST')
//获取用户
export const getUser = () => fetch('/h/i', {

})
