<template>
  <div class="shop-info">
    <div class="shop-top">
      <img :src="shop.shopLogo" alt="" class="shop-logo" />
      <h3 class="shop-name">{{ shop.shopName }}</h3>
    </div>
    <div class="shop-middle">
      <div class="shop-middle-left">
        <div class="shop-sells">
          <span class="sells-count">{{
            shop.shopSells | sellsCountFilter
          }}</span>
          <span class="sells-text">总销量</span>
        </div>
        <div class="shop-goods">
          <span class="goods-count">{{ shop.shopGoods }}</span>
          <span class="goods-text">全部宝贝</span>
        </div>
      </div>
      <div class="shop-middle-right">
        <table>
          <tr
            class="shop-score"
            v-for="(item, index) in shop.shopScores"
            :key="index"
          >
            <td class="score-name">{{ item.name }}</td>
            <td class="score" :class="{ 'score-better': item.isBetter }">
              {{ item.score }}
            </td>
            <td>
              <span class="better" :class="{ 'better-more': item.isBetter }">
                {{ item.isBetter ? "高" : "低" }}</span
              >
            </td>
          </tr>
        </table>
      </div>
    </div>
    <div class="shop-bottom">
      <button class="enter-shop">进店逛逛</button>
    </div>
  </div>
</template>
<script>
export default {
  name: "DetailShopInfo",
  props: {
    shop: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  filters: {
    sellsCountFilter(value) {
      if (value % 10000 > 0) {
        return (value / 10000).toFixed(1) + "万";
      } else {
        return value;
      }
    },
  },
};
</script>
<style scoped>
.shop-info {
  margin: 8px auto;
  width: 95vw;
  background-color: #fff;
  border-radius: 5px;
  padding-bottom: 1rem;
}
.shop-top {
  display: flex;
  padding: 0.5rem 0.5rem 0;
  align-items: center;
}
.shop-logo {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 1px solid rgba(0, 0, 0, 0.1);
}
.shop-name {
  margin-left: 0.5rem;
  font-size: 16px;
}
.shop-middle {
  display: flex;
  margin: 0.5rem;
  align-items: center;
}
.shop-middle-left,
.shop-middle-right {
  flex: 1;
}
.shop-middle-left {
  display: flex;
  border-right: 1px solid #ccc;
}
.shop-middle-right {
  display: flex;
  justify-content: center;
}

.shop-sells,
.shop-goods {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.sells-text,
.goods-text,
.score-name,
.shop-score {
  font-size: 12px;
}
.sells-count,
.goods-count {
  display: inline-block;
  height: 22px;
  line-height: 22px;
  margin-bottom: 0.5rem;
  font-size: 20px;
  font-weight: 700;
}
.shop-middle-right table td {
  padding: 0.2rem;
}
.score {
  margin: 0 0.5rem;
  color: #5ea732;
}
.score-better {
  color: #f13e3a;
}
.better {
  background-color: #5ea732;
  color: #fff;
}
.better-more {
  background-color: #f13e3a;
}
.shop-bottom {
  text-align: center;
}
.shop-bottom .enter-shop {
  width: 6rem;
  height: 2rem;
  line-height: 2rem;
  background-color: #fff;
  color: var(--color-high-text);
  border-radius: 1rem;
  border: 1px solid var(--color-high-text);
}
</style>