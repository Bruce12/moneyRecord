<template>
  <div class="footer">
    <div class="item" :class="menus[currentIndex] === 'account' ? 'bg': ''" @click="goMenus(0)">
      <icon name="viacoin"></icon>
     资产
    </div>
    <div class="item" :class="menus[currentIndex] === 'wallet' ? 'bg': ''" @click="goMenus(1)">
      <icon name="pagelines"></icon>
      钱包
    </div>
    <div class="item" :class="menus[currentIndex] === 'discover' ? 'bg': ''" @click="goMenus(2)">
      <icon name="firefox"></icon>
      动态
    </div>
    <div class="item" :class="menus[currentIndex] === 'more' ? 'bg': ''" @click="goMenus(3)">
      <icon name="anchor"></icon>
      更多
    </div>
  </div>
</template>
<script>
export default {
   data() {
     return {
       menus: ['account', 'wallet', 'discover', 'more'],
       currentIndex: ""
     }
   },
   created() {

   },
   methods: {
      goMenus(index) {
        this.currentIndex = index
        let currentPage ='/' + this.menus[index]
        this.$router.push({path: currentPage})
      }
   },
   components: {

   },
   mounted() {

   }
}
</script>
<style lang="scss" scoped>
@import '../../../style/mixin.scss';
.footer{
  display: -webkit-flex;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  position: fixed;
  bottom: 0;
  width: 100%;
  .item{
    width: 25%;
    flex: 1;
    @include font(28);
    -webkit-box-orient: vertical;
    text-align: center;
    border: 1px solid #999999;
    padding: .15rem;
    text-align: center;
    svg {
      width: .4rem;
      height: .3rem;
      vertical-align: middle;
    }
  }
}
.bg {
  background: purple;
  color: #fff;
}


</style>
