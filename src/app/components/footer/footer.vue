<template>
  <div class="footer">
    <div class="item">
      <icon name="viacoin"></icon>
     明细
    </div>
    <div class="item">
      <icon name="pagelines"></icon>
      钱包
    </div>
    <div class="item">
      <icon name="firefox"></icon>
      动态
    </div>
    <div class="item">
      <icon name="anchor"></icon>
      更多
    </div>
  </div>
</template>
<script>
export default {

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
  height: 1rem;
  background: yellow;
  position: fixed;
  bottom: 0;
  width: 100%;
  .item{
    width: 25%;
    border:1px solid red;
    flex: 1;
    @include font(28);
    -webkit-box-orient: vertical;
    text-align: center;
    vertical-align: middle;
  }
}


</style>
