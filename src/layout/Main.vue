<template>
  <div class="main-block">
    <div class="main-block__inner">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.main-block {
  padding: 0 108px 0 290px;
  width: 100%;
  &__inner {
    margin: 0 25px;
    display: flex;
    flex-direction: column;
    // background: var(--v-color-white);
  }
}
</style>
