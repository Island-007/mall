<template>
  <div class="tab-bar-item" :style="activeStyle" @click="itemClick">
    <slot name="icon"></slot>
    <slot name="text"></slot>
  </div>
</template>
<script>
export default {
  name: "TabBarItem",
  props: {
    path: String,
    activeColor: {
      type: String,
      default: "#a52a2a",
    },
  },
  computed: {
    isActive() {
      return this.$route.path === this.path;
    },
    activeStyle() {
      return this.isActive ? { color: this.activeColor } : {};
    },
  },
  methods: {
    itemClick() {
      this.$router.push(this.path).catch((err) => err);
    },
  },
};
</script>
<style scoped>
.tab-bar-item {
  flex: 1;
  height: 49px;
  text-align: center;
  font-size: 14px;
}
.tab-bar-item .iconfont {
  font-size: 24px;
}
</style>