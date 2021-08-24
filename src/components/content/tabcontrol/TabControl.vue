<template>
  <div class="tab-control">
    <div
      v-for="(item, index) in titles"
      :key="index"
      @click="tabClick(index)"
      class="tab-control-item"
      :class="{ active: currentIndex === index }"
    >
      <span>{{ item }}</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "TabControl",
  data() {
    return {
      currentIndex: 0,
    };
  },
  props: {
    titles: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods: {
    tabClick(index) {
      this.currentIndex = index;
      this.$emit("tab-click", index);
    },
  },
};
</script>
<style scoped>
.tab-control {
  display: flex;
  position: sticky;
  top: 44px;
  background-color: #fff;
  height: 35px;
  line-height: 35px;
  z-index: 9;
}
.tab-control-item {
  flex: 1;
  text-align: center;
}
.tab-control-item span {
  padding: 0.5rem 0;
}
.active {
  color: var(--color-high-text);
}
.active span {
  border-bottom: 2px solid var(--color-high-text);
}
</style>