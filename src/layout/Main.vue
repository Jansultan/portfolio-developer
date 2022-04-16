<template>
  <div class="main-block">
    <div class="main-block__inner">
      <Loader v-if="load" />
      <router-view v-else />
    </div>
  </div>
</template>

<script>
// import debounce from "lodash/debounce";
import Loader from "../components/Loader.vue";
export default {
  components: { Loader },
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
  &__inner {
    margin: 0 25px;
    display: flex;
    flex-direction: column;
    // background: var(--v-color-white);
  }
}
</style>
