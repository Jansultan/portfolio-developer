<template>
  <div class="home-wrapper">
    <HomePage />
    <Services />
    <Recommendations />
  </div>
</template>

<script>
import HomePage from "./Home/index";
import Services from "./Services";
import Recommendations from "./Recommendations";
export default {
  components: {
    HomePage,
    Services,
    Recommendations,
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
