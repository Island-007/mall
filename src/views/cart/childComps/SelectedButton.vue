<template>
  <div class="selected-button">
    <i
      class="iconfont"
      :class="{
        'icon-roundcheck': !isSelected,
        'icon-roundcheckfill': isSelected,
      }"
    ></i>
  </div>
</template>
<script>
export default {
  name: "SelectedButton",
  props: {
    isSelected: {
      type: Boolean,
      default() {
        return false;
      },
    },
  },
};
</script>
<style scoped>
</style>