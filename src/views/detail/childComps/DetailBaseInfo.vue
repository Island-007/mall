<template>
  <div class="base-info" v-if="Object.keys(goods).length != 0">
    <h3 class="good-title">{{ goods.title }}</h3>
    <div class="good-price">
      <span class="new-price">{{ goods.price }}</span>
      <span class="old-price">{{ goods.oldPrice }}</span>
      <span
        class="discount"
        :style="{ backgroundColor: goods.discountBgColor }"
        >{{ goods.discount }}</span
      >
    </div>
    <div class="good-other">
      <span>{{ goods.columns[0] }}</span>
      <span>{{ goods.columns[1] }}</span>
      <span>{{ goods.services[goods.services.length - 1].name }}</span>
    </div>
    <div class="good-service">
      <span
        v-for="index in goods.services.length - 1"
        :key="index"
        class="good-service-item"
      >
        <img :src="goods.services[index - 1].icon" />
        <span>{{ goods.services[index - 1].name }}</span>
      </span>
    </div>
  </div>
</template>
<script>
export default {
  name: "DetailBaseInfo",
  props: {
    goods: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>
<style scoped>
.base-info {
  margin: 8px auto;
  width: 95vw;
  background-color: #fff;
  border-radius: 5px;
}
.good-title {
  font-size: 16px;
  padding: 0.5rem;
}
.good-price {
  padding: 0 0.5rem;
}
.good-price .new-price {
  font-size: 20px;
  color: var(--color-high-text);
}
.good-price .old-price {
  padding-left: 0.5rem;
  color: #ccc;
  font-size: 14px;
  text-decoration: line-through;
}
.good-price .discount {
  display: inline-block;
  margin-left: 0.5rem;
  padding: 0 0.5rem;
  height: 20px;
  line-height: 20px;
  font-size: 12px;
  border-radius: 10px;
  color: #fff;
  text-align: center;
}
.good-other {
  display: flex;
  margin: 0 0.5rem;
  padding: 0.625rem 0 0.625rem 0;
  justify-content: space-between;
  border-bottom: 1px solid #ccc;
}
.good-other span {
  margin-top: 0.5rem;
  flex: 1;
  font-size: 12px;
  color: #a3a3a3;
  text-align: center;
}
.good-service {
  display: flex;
  text-align: center;
  padding: 0.625rem;
}
.good-service-item {
  flex: 1;
  font-size: 12px;
  color: #a3a3a3;
}
.good-service-item img {
  width: 20px;
  padding-right: 5px;
}
</style>