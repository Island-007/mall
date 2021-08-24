<template>
  <div class="list-view">
    <div class="list-store">
      <i class="iconfont icon-favor"></i>
      <span>收藏</span>
    </div>
    <div class="list-scan">
      <i class="iconfont icon-footprint"></i>
      <span>足迹</span>
    </div>
    <div class="list-redpacket">
      <i class="iconfont icon-redpacket"></i>
      <span>红包</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "ListView",
};
</script>
<style scoped>
.list-view {
  display: flex;
  margin-top: -1px;
  padding-top: 0.5rem;
  height: 90px;
  background-color: var(--color-tint);
  color: #fff;
}
.list-store,
.list-scan,
.list-redpacket {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.iconfont {
  font-size: 20px;
  margin-bottom: 0.2rem;
}
</style>