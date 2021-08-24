<template>
  <div class="tab-menu">
    <scroll class="content">
      <ul class="categories-title">
        <li
          v-for="(item, index) in categories"
          :key="index"
          @click="titleClick(index)"
          :class="{ 'active-title': index === currentIndex }"
        >
          {{ item.title }}
        </li>
      </ul>
    </scroll>
  </div>
</template>
<script>
import Scroll from "components/common/scroll/Scroll.vue";
export default {
  name: "TabMenu",
  components: {
    Scroll,
  },
  data() {
    return {
      currentIndex: 0,
    };
  },
  props: {
    categories: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods: {
    titleClick(index) {
      this.currentIndex = index;
      this.$emit("selected-title", index);
    },
  },
};
</script>
<style scoped>
.content {
  height: calc(100vh - 44px - 49px);
  overflow: hidden;
  background-color: #f6f6f6;
}
.categories-title {
  text-align: center;
}
.categories-title li {
  height: 2.5rem;
  line-height: 2.5rem;
  font-size: 14px;
}
.active-title {
  background-color: #fff;
  color: var(--color-high-text);
  border-left: 3px solid var(--color-high-text);
}
</style>