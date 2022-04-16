<template>
  <div class="home-wrapper">
    <HomePage />
    <Services />
    <Recommendations />
    <Education />
  </div>
</template>

<script>
import HomePage from "./Home/index";
import Services from "./Services";
import Recommendations from "./Recommendations";
import Education from "./Education";
export default {
  components: {
    HomePage,
    Services,
    Recommendations,
    Education,
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
