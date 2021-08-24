<template>
  <div v-if="Object.keys(detailInfo).length !== 0" class="detail-good-info">
    <div class="detail-title">宝贝详情</div>
    <div class="info-list">
      <p class="info-text">{{ detailInfo.desc }}</p>
      <div
        v-for="(item, index) in detailInfo.detailImage"
        :key="index"
        class="img-list"
      >
        <div class="img-key">{{ item.key }}</div>
        <img v-for="(img, index) in item.list" :key="index" :src="img" alt="" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "detail-good-info",
  props: {
    detailInfo: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>
<style scoped>
.detail-title {
  margin: 0.5rem 0;
  text-align: center;
  font-size: 12px;
  position: relative;
}
.detail-title::before,
.detail-title::after {
  content: " ——— ";
  color: #a3a3a3;
}
.info-list {
  margin: 8px auto;
  width: 95vw;
  background-color: #fff;
  border-radius: 5px;
}
.info-text {
  margin: 0 0.5rem;
  padding: 0.5rem 0;
  font-size: 12px;
  border-bottom: 1px solid #ccc;
}
.img-list {
  margin-top: 1rem;
}
.info-list img {
  width: 100%;
}
.img-key {
  font-size: 14px;
  text-align: center;
  padding-bottom: 0.5rem;
}
</style>