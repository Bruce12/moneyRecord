<template>
  <div>
     <div class="head red">
       积木账号登录
     </div>
     <form action="" id="form" class="mlogin">
       <div class="field">
         <div class="label">账户</div>
         <div class="field-control">
           <input type="text" v-model="uname" class="input-required" placeholder="手机号/邮箱/会员名" name="userName"/>
         </div>
       </div>
       <div class="field">
         <div class="label">密码</div>
         <div class="field-control">
          <input type="password" v-model="pwd" placeholder="请输入密码">
         </div>
       </div>
       <div class="submit">
         <input type="button" value="登录" @click="submitForm()">
       </div>
     </form>
     <div class="other-link">
       <a href="#">免费注册</a>
     </div>
    <alert-tip v-if="showAlert" :showHide="showAlert" @closeTip="closeTip" :alertText="alertText"></alert-tip>
  </div>
</template>
<script>
import {userLogin} from "../../core/dataService"
import {mapMutations} from 'vuex'
import alertTip from '../../components/common/alertTip'
export default {
  data(){
    return {
      pwd:'123456',
      uname: 'kdy123',
      userInfo: null,
      showAlert: false,
      alertText: null
    }
  },
  methods: {
   async submitForm(){
      let pwd = this.pwd
      let uname = this.uname
      let res = await userLogin(uname,pwd)
      //请求登录成
      if (res.code === 1){
        this.userInfo = res.result.sid
        this.RECORD_USERINFO(this.userInfo)
        this.$router.push({path: '/index'})
      }else{
        this.showAlert = true
        this.alertText = res.msg
      }
    },
    ...mapMutations([
      'RECORD_USERINFO'
    ]),
    closeTip(){
      this.showAlert = false
    }
  },
  components: {
    alertTip
  }
}
</script>
<style lang="scss" scoped>
  .head {
    width: 100%;
    height: 0.88rem;
    background-color: #f7f7f8;
    font-size: 0.3rem;
    border-bottom: 1px solid #c8c8c8;
    text-align: center;
    line-height: 0.88rem;
  }
  .mlogin{
    margin-top: .35rem;
    font-size: .35rem;
    .field{
        display: -webkit-flex;
        display: flex;
        width: 100%;
        background-color: #fff;
        text-align: left;
        padding: .3rem .2rem;
        color: #6c6c6c;
        border-bottom: 1px solid #ddd;
      .label{
        width: 1.4rem;
      }
      .field-control{
        -webkit-flex:1;
        -webkit-box-flex: 1;
        input{
          background-color: transparent;
          width: 100%;
        }
        ::-webkit-input-placeholder{
          color:#999;
        }
      }
    }
    .submit{
      text-align: center;
      margin: .4rem .2rem;
      input{
        background: #ff0036;
        border-color: #ff0036;
        border-radius: 5px;
        width: 100%;
        height: 1rem;
        display: block;
        font-size: .35rem;
        color: #fff;
      }
    }
  }
  .other-link{
    margin-left: .2rem;
      a{
        font-size: .35rem;
        color: #ff0036
      }
    }
</style>
