<template>
  <div class="order-view">
    <div class="order-head">
      <h3 class="order-title">我的订单</h3>
      <span class="order-all"> 全部 </span>
      <i class="iconfont icon-right"></i>
    </div>
    <div class="order-body">
      <div class="order-pay">
        <i class="iconfont icon-card_fill"></i>
        <span>待付款</span>
      </div>
      <div class="order-send">
        <i class="iconfont icon-shopfill"></i>
        <span>待发货</span>
      </div>
      <div class="order-receive">
        <i class="iconfont icon-deliver_fill"></i>
        <span>待收货</span>
      </div>
      <div class="order-comment">
        <i class="iconfont icon-commentfill"></i>
        <span>待评价</span>
      </div>
      <div class="order-rechange">
        <i class="iconfont icon-rechargefill"></i>
        <span>退款/售后</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "OrderView",
};
</script>
<style scoped>
.order-view {
  margin: -1.5rem auto 0.5rem;
  padding-bottom: 0.5rem;
  width: 95vw;
  background-color: #fff;
  border-radius: 10px;
}
.order-head {
  padding: 0.5rem 1rem 0.5rem 1rem;
  display: flex;
  align-items: center;
}
.order-title {
  font-size: 14px;
  flex: 1;
}
.order-all,
.icon-right {
  font-size: 12px;
  padding-left: 0.5rem;
}
.order-body {
  display: flex;
}
.order-pay,
.order-send,
.order-receive,
.order-comment,
.order-rechange {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 14px;
}
.icon-card_fill,
.icon-shopfill,
.icon-deliver_fill,
.icon-commentfill,
.icon-rechargefill {
  font-size: 24px;
  margin-bottom: 0.2rem;
  color: var(--color-high-text);
}
</style>