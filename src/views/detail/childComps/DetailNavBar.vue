<template>
  <div class="detail-nav">
    <nav-bar>
      <template #left>
        <div class="back" @click="backClick">
          <i class="iconfont icon-back_light"></i>
        </div>
      </template>
      <template #center>
        <div class="title">
          <span
            v-for="(item, index) in titles"
            :key="index"
            class="title-item"
            @click="titleClick(index)"
            :class="{ active: index === currentIndex }"
          >
            {{ item }}
          </span>
        </div>
      </template>
    </nav-bar>
  </div>
</template>
<script>
import NavBar from "components/common/navbar/NavBar.vue";
export default {
  name: "DetailNavBar",
  components: {
    NavBar,
  },
  data() {
    return {
      currentIndex: 0,
    };
  },
  props: {
    titles: {
      type: Array,
      default() {
        return ["商品", "评论", "详情", "推荐"];
      },
    },
  },
  methods: {
    titleClick(index) {
      this.currentIndex = index;
      this.$emit("title-click", index);
    },
    backClick() {
      this.$router.go(-1);
    },
  },
};
</script>
<style scoped>
.detail-nav {
  background-color: #fff;
}
.title {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.title-item {
  flex: 1;
  font-size: 14px;
}
.active {
  color: var(--color-high-text);
}
</style>