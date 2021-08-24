<template>
  <div class="toast">
    <div class="toast-box" v-show="isShow">{{ message }}</div>
  </div>
</template>
<script>
export default {
  name: "Toast",
  data() {
    return {
      message: "",
      isShow: false,
    };
  },
  methods: {
    showToast(message, duration = 2000) {
      this.message = message;
      this.isShow = true;
      setTimeout(() => {
        this.message = "";
        this.isShow = false;
      }, duration);
    },
  },
};
</script>
<style scoped>
.toast-box {
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  padding: 0.5rem;
  font-size: 14px;
  background-color: rgba(0, 0, 0, 0.15);
  color: #fff;
  border-radius: 5px;
  z-index: 999;
}
</style>