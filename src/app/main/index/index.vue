<template>
  <div>
      <div class="header">
        用户：<span>{{info.nickname}}</span>
        收入：<span>{{info.allGold}}</span> 
        今日支出：<span>{{info.todayExpend}}</span>
      </div>
      <section v-if="showIndex">
          <div class="assets" v-for="item in assets" :key="item.id">
            <div class="flex_box mb10 bg_grren ptb10">
              <div class="  ">
                <icon name="usd"></icon>
              </div>
              <div class="flex6 cash">
                <p>{{item.name}}</p>
                <p>现金金额</p>
              </div>
              <div class="">
                {{item.gold}}
              </div>
            </div>
          </div>
      </section>
      <router-view></router-view>
      <footer-bottom @change="change"></footer-bottom>
      <loading-top v-if="showLoading"></loading-top>
  </div>
</template>
<script>
import loadingTop  from '../../components/common/loading'
import footerBottom from '../../components/footer/footer'
import {getInfo} from '../../core/dataService'
export default {
  data(){
    return {
      showLoading: false,
      list: null,
      info: {},
      showIndex: false,
      assets: {}
    }
  },
  components: {
    loadingTop,
    footerBottom
  },
  async created() {
    let data = await getInfo()
    let cPage = this.$router.currentRoute.fullPath
    if (['/index'].indexOf(cPage) >= 0 ) {
      this.showIndex = true
    }
    if (data.code === 100){
      this.$router.push('login')
    }else{
      this.list = data
      this.info = data.result.info
      this.assets = data.result.assets
      console.log(this.list)
    }
  },
  methods: {
    change(...data) {
       this.showIndex = false
    }
  },
  mounted() {

  }
}
</script>
<style lang="scss" scoped>
  .header {
    border: 1px solid yellow;
    text-align: center;
    background: #999999;
    color: #fff;
    font-size: .4rem;
    span {
      color:aqua;
      display: inline-block;
      padding: .08rem;
    }
  }
  .assets {
    font-size:.32rem;
  }
  .flex_box {
   display:box;
   -webkit-display:flex;
   display: flex;
   text-justify: center;
   direction: row;
   align-items: center;
   .flex6 {
     flex: 6;
   }
 }
 .flex_box div,p {
   color: #fff;
 }
 .cash {
   padding-left: .2rem;
 }
 .mb10{
   margin-bottom: 10px;
 }
 .bg_grren{
     background: rgb(22, 202, 46);
 }
 .ptb10 {
   padding: 10px;
 }
</style>

