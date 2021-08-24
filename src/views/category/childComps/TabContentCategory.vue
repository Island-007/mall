<template>
  <div class="tab-content-category">
    <div
      class="category-info"
      v-for="(item, index) in categoriesContent"
      :key="index"
    >
      <a :href="item.link">
        <img :src="item.image" alt="" />
        <span class="item-title">{{ item.title }}</span>
      </a>
    </div>
  </div>
</template>
<script>
export default {
  name: "TabContentCategory",
  props: {
    categoriesContent: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>
<style scoped>
.tab-content-category {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}
.category-info {
  width: 33%;
  padding: 0.5rem;
  font-size: 12px;
}
.category-info a {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.category-info img {
  width: 100%;
  margin-bottom: 0.3rem;
}
</style>