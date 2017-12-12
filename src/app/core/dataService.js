import fetch from '../config/fetch'

export const userLogin = (uname, pwd) => fetch('/u/l', {
  account: uname,
  pwd: pwd
},'GET')
