<template>
  <div class="recommend-info">
    <div class="recommend-title">——— 看了又看 ———</div>
    <div class="recommend-list">
      <goods-list-item
        v-for="(item, index) in recommendInfo"
        :key="index"
        :goodsItem="item"
      ></goods-list-item>
    </div>
  </div>
</template>
<script>
import GoodsListItem from "components/content/goods/GoodsListItem.vue";
export default {
  name: "DetailRecommendInfo",
  components: {
    GoodsListItem,
  },
  props: {
    recommendInfo: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>
<style scoped>
.recommend-title {
  color: #a3a3a3;
  font-size: 12px;
  text-align: center;
}
.recommend-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 8px auto;
  width: 95vw;
  border-radius: 5px;
}
</style>