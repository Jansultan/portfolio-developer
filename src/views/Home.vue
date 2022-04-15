<template>
  <div class="home-wrapper">
    <HomePage />
    <Services />
  </div>
</template>

<script>
import HomePage from "./Home/index";
import Services from "./Services";
export default {
  components: {
    HomePage,
    Services,
  },
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
