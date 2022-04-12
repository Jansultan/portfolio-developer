<template>
  <div class="home-wrapper">
    <HomePage />
  </div>
</template>

<script>
import HomePage from "./Home/index";
export default {
  components: { HomePage },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.home-wrapper {
  width: 100%;
  display: flex;
  flex-direction: column;
}
</style>
