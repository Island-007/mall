<template>
  <div class="feature">
    <div class="goods-feature" v-for="(item, index) in features" :key="index">
      <img :src="item.img" alt="" />
      <span>{{ item.title }}</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "FeatureView",
  data() {
    return {
      features: [
        { title: "女装", img: require("assets/img/home/women_cloths.png") },
        { title: "手表配饰", img: require("assets/img/home/decoration.png") },
        { title: "美妆个护", img: require("assets/img/home/product.png") },
        { title: "运动户外", img: require("assets/img/home/outdoors.png") },
        { title: "睡衣", img: require("assets/img/home/nighty.png") },
        { title: "童装", img: require("assets/img/home/children_cloths.png") },
        { title: "鞋类", img: require("assets/img/home/shoes.png") },
        { title: "清仓", img: require("assets/img/home/discount.png") },
      ],
    };
  },
};
</script>
<style scoped>
.feature {
  margin: 0.5rem auto;
  width: 100vw;
  background-color: #fff;
  display: flex;
  flex-wrap: wrap;
  padding: 0.3rem 0;
}

.goods-feature {
  padding: 0.3rem;
  flex: 25%;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 12px;
}
.goods-feature img {
  width: 70%;
  border-radius: 50%;
  padding-bottom: 0.3rem;
}
</style>