<template>
  <div>
      <div class="header">
        用户：<span>{{info.nickname}}</span>
        收入：<span>{{info.allGold}}</span> 
        今日支出：<span>{{info.todayExpend}}</span>
      </div>
      <section>
       <router-view></router-view>
      </section>
      <footer-bottom></footer-bottom>
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
      info: {}
    }
  },
  components: {
    loadingTop,
    footerBottom
  },
  async created() {
   let data = await getInfo()
    if (data.code === 100){
      this.$router.go(-1)
    }else{
      this.list = data
      this.info = data.result.info
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
</style>

