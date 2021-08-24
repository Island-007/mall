<template>
  <div class="cart-list">
    <cart-list-item v-for="item in cartList" :key="item.iid" :listItem="item">
      <slot></slot>
    </cart-list-item>
  </div>
</template>
<script>
import CartListItem from "./CartListItem.vue";
export default {
  name: "CartList",
  components: {
    CartListItem,
  },
  props: {
    cartList: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>
<style scoped>
</style>