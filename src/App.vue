<template>
  <div id="app">
    <LeftSidebar />
    <Main />
    <RightSidebar />
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

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-top: 0;
  display: flex;
}
</style>
