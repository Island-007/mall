<template>
  <div class="recommend">
    <div v-for="(item, id) in recommends" :key="id" class="recommend-item">
      <a :href="item.link">
        <img :src="item.image" />
        <div>{{ item.title }}</div>
      </a>
    </div>
  </div>
</template>
<script>
export default {
  name: "RecommendView",
  props: {
    recommends: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>
<style scoped>
.recommend {
  width: 100%;
  display: flex;
  font-size: 12px;
  text-align: center;
  padding: 1rem 0;
  background-color: #fff;
}
.recommend-item {
  flex: 1;
}
.recommend-item img {
  width: 80%;
  margin-bottom: 0.5rem;
}
</style>