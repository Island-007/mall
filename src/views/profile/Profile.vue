<template>
  <div id="profile">
    <nav-bar class="nav-bar">
      <template #center>
        <span>青春购</span>
      </template>
      <template #right>
        <i class="iconfont icon-settings"></i>
      </template>
    </nav-bar>
    <user-info></user-info>
    <list-view></list-view>
    <order-view></order-view>
  </div>
</template>
<script>
import NavBar from "components/common/navbar/NavBar.vue";
import UserInfo from "./childComps/UserInfo.vue";
import ListView from "./childComps/ListView.vue";
import OrderView from "./childComps/OrderView.vue";
export default {
  name: "profile",
  components: {
    NavBar,
    UserInfo,
    ListView,
    OrderView,
  },
};
</script>
<style scoped>
.nav-bar {
  background-color: var(--color-tint);
  color: #fff;
}
.icon-settings {
  font-size: 20px;
}
</style>