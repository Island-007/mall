<template>
  <div id="category">
    <nav-bar class="category-navbar">
      <template #center> 分类 </template>
    </nav-bar>
    <div class="category-main">
      <tab-menu
        :categories="categories"
        class="tab-menu"
        @selected-title="selectedTitle"
      ></tab-menu>
      <scroll class="tab-info" :data="[categoriesData]">
        <tab-content-category
          :categoriesContent="showSubCategories"
        ></tab-content-category>
        <tab-control
          :titles="['综合', '新品', '销量']"
          @tab-click="tabClick"
        ></tab-control>
        <tab-content-detail
          class="tab-detail"
          :categoryDetail="showCategoryDetail"
        ></tab-content-detail>
      </scroll>
    </div>
  </div>
</template>
<script>
import NavBar from "components/common/navbar/NavBar.vue";
import Scroll from "components/common/scroll/Scroll.vue";
import TabControl from "components/content/tabcontrol/TabControl.vue";
import TabMenu from "./childComps/TabMenu.vue";
import TabContentCategory from "./childComps/TabContentCategory.vue";
import TabContentDetail from "./childComps/TabContentDetail.vue";
import {
  getCategory,
  getSubcategory,
  getCategoryDetail,
} from "network/category.js";

export default {
  name: "category",
  components: {
    NavBar,
    TabMenu,
    TabContentCategory,
    Scroll,
    TabControl,
    TabContentDetail,
  },
  data() {
    return {
      categories: [],
      categoriesData: [],
      currentIndex: -1,
      currentType: "pop",
    };
  },
  created() {
    getCategory().then((res) => {
      this.categories = res.data.category.list;
      for (let i = 0; i < this.categories.length; i++) {
        this.categoriesData[i] = {
          subCategories: [],
          categoryDetail: {
            pop: [],
            new: [],
            sell: [],
          },
        };
      }
      this.getSubcategory(0);
    });
  },
  computed: {
    showSubCategories() {
      if (this.currentIndex === -1) return [];
      return this.categoriesData[this.currentIndex].subCategories;
    },
    showCategoryDetail() {
      if (this.currentIndex === -1) return [];
      return this.categoriesData[this.currentIndex].categoryDetail[
        this.currentType
      ];
    },
  },
  methods: {
    getSubcategory(index) {
      this.currentIndex = index;
      const maitKey = this.categories[index].maitKey;
      getSubcategory(maitKey).then((res) => {
        this.categoriesData[index].subCategories = res.data.list;
        this.categoriesData = { ...this.categoriesData };
        this.getCategoryDetail("pop");
        this.getCategoryDetail("new");
        this.getCategoryDetail("sell");
      });
    },
    getCategoryDetail(type) {
      const miniWallkey = this.categories[this.currentIndex].miniWallkey;
      getCategoryDetail(miniWallkey, type).then((res) => {
        this.categoriesData[this.currentIndex].categoryDetail[type] = res;
        this.categoriesData = { ...this.categoriesData };
      });
    },
    selectedTitle(index) {
      this.getSubcategory(index);
    },
    tabClick(index) {
      this.currentType = Object.keys(
        this.categoriesData[this.currentIndex].categoryDetail
      )[index];
      console.log(this.currentType);
    },
  },
};
</script>
<style scoped>
.category-navbar {
  background-color: var(--color-tint);
  color: #fff;
}
.category-main {
  display: flex;
}
.tab-menu {
  flex: 1;
}
.tab-info {
  flex: 3;
  height: calc(100vh - 44px - 49px);
  overflow: hidden;
  background-color: #fff;
}
.tab-detail {
  margin-top: 0.5rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  background-color: #f6f6f6;
}
</style>