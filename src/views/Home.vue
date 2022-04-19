<template>
  <div class="home-wrapper">
    <HomePage />
    <Services />
    <Recommendations />
    <Education />
    <Portfolio />
    <Blog />
  </div>
</template>

<script>
import HomePage from "./Home/index";
import Services from "./Services";
import Recommendations from "./Recommendations";
import Education from "./Education";
import Portfolio from "./Portfolio";
import Blog from "./Blog";

export default {
  components: {
    HomePage,
    Services,
    Recommendations,
    Education,
    Portfolio,
    Blog,
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
