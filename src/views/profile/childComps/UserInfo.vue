<template>
  <div class="user-info">
    <div class="user-logo">
      <img :src="userInfo.userLogoUrl" alt="" />
    </div>
    <div class="user-base">
      <span class="user-id">{{ userInfo.userId }}</span>
      <span class="user-phone">{{ userInfo.mobilePhone }}</span>
    </div>
    <div class="login">
      <i class="iconfont icon-right"></i>
    </div>
  </div>
</template>
<script>
export default {
  name: "UserInfo",
  props: {
    userInfo: {
      type: Object,
      default() {
        return {
          userLogoUrl: require("assets/img/profile/defaultlogo.jpeg"),
          userId: "登录/注册",
          mobilePhone: "暂无绑定手机号",
        };
      },
    },
  },
};
</script>
<style scoped>
.user-info {
  display: flex;
  align-items: center;
  height: 75px;
  background-color: var(--color-tint);
  color: #fff;
}
.user-logo {
  width: 60px;
  height: 60px;
  margin-left: 1rem;
  border-radius: 50%;
  overflow: hidden;
  border: 1px solid #ccc;
}
.user-logo img {
  width: 100%;
}
.user-base {
  flex: 1;
  margin-left: 1rem;
  display: flex;
  flex-direction: column;
}
.user-id {
  font-size: 18px;
  font-weight: 700;
}
.user-phone {
  font-size: 14px;
  margin-top: 0.3rem;
}
.login {
  margin-right: 0.5rem;
}
</style>