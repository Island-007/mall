<template>
  <div class="back-top">
    <i class="iconfont icon-icon-test2"></i>
  </div>
</template>
<script>
export default {
  name: "BackTop",
};
</script>
<style scoped>
.back-top {
  position: fixed;
  right: 10px;
  bottom: 60px;
  width: 46px;
  height: 46px;
  line-height: 46px;
  border-radius: 23px;
  text-align: center;
  background-color: #fff;
}
.back-top .icon-icon-test2 {
  color: var(--color-high-text);
  font-size: 24px;
}
</style>