<template>
  <div id="app" :class="{ 'dark-900': $store.state.isLightmode }">
    <div class="app-container">
      <LeftSidebar />
      <Main />
      <RightSidebar />
    </div>
  </div>
</template>

<script>
import Main from "./layout/Main.vue";
import LeftSidebar from "./layout/LeftSidebar.vue";
import RightSidebar from "./layout/RightSidebar.vue";

export default {
  name: "App",
  components: {
    Main,
    LeftSidebar,
    RightSidebar,
  },
};
</script>

<style lang="scss" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-top: 0;
  display: flex;
  background: #e1e1e1;
  transition: all 300ms ease-in 0s;
  .app-container {
    max-width: 1440px;
    margin: 0 auto;
    position: relative;
    width: 100%;
    display: flex;
    flex-wrap: nowrap;
  }
}
</style>
