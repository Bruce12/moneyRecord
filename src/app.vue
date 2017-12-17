<template>
  <transition name="router-fade" mode="out-in">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </transition>
</template>
<script>
export default {

}
</script>
<style lang="scss">
    /**
 * 导入全局样式
 */
    @import './style/app';
    	.router-fade-enter-active, .router-fade-leave-active {
	  	transition: opacity .3s;
      }
      .router-fade-enter, .router-fade-leave-active {
          opacity: 0;
      }
</style>

