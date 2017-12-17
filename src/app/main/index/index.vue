<template>
  <div>
      <h1>这是首页</h1>
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
      list: null
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
      //设置 userInfo 的值

    }
  },
  mounted() {

  }
}
</script>
<style lang="scss" scoped>

</style>

