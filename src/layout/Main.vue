<template>
  <div class="main-block">
    <div class="main-block__inner">
      <Loader v-if="load" />
      <div v-else class="main-block__body">
        <router-view />
      </div>
      <Footer v-if="!load" />
    </div>
  </div>
</template>

<script>
// import debounce from "lodash/debounce";
import Loader from "../components/Loader.vue";
import Footer from "../components/Footer.vue";

export default {
  components: { Loader, Footer },
  data() {
    return {
      load: false,
    };
  },
  watch: {
    "$route.name"() {
      this.load = true;
      setTimeout(() => {
        this.load = false;
      }, 500);
    },
  },
};
</script>

<style lang="scss" scoped>
.main-block {
  padding: 0 108px 0 290px;
  width: 100%;
  min-height: 100vh;
  &__inner {
    margin: 0 25px;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    // background: var(--v-color-white);
    .main-block__body {
      flex: 1 1 0;
    }
  }
}
</style>
