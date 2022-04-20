<template>
  <div class="right-sidebar-container">
    <div
      class="right-sidebar"
      :class="{ 'dark-700': $store.state.isLightmode }"
    >
      <div class="right-sidebar-contrast">
        <div
          v-if="$store.state.isLightmode"
          @click="changeMode(false)"
          class="rounded-circle"
        >
          <contrastLight />
        </div>
        <div @click="changeMode(true)" class="rounded-circle" v-else>
          <contrastDark />
        </div>
      </div>
      <div class="right-sidebar__inner">
        <b-button
          v-for="(sidebar, i) in rightSidebars"
          :key="`${sidebar.name}-${i}`"
          v-b-tooltip.hover
          :title="sidebar.title"
          class="right-sidebar__btn"
          :class="{ active_btn: $route.name === sidebar.name }"
          @click="$router.push({ name: sidebar.name }, () => {})"
        >
          <b-icon :icon="sidebar.icon" variant="black"></b-icon>
        </b-button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import contrastLight from "../icons/contrastLight.vue";
import contrastDark from "../icons/contrastDark.vue";
export default {
  components: { contrastLight, contrastDark },
  data() {
    return {
      rightSidebars: [
        { title: "Home", name: "home", icon: "house-door-fill" },
        { title: "Services", name: "services", icon: "file-earmark-code-fill" },
        { title: "Education", name: "education", icon: "person-fill" },
        { title: "Portfolios", name: "portfolios", icon: "bag-dash-fill" },
        { title: "Blog", name: "blog", icon: "vector-pen" },
        // { title: "Contact", name: "contact", icon: "chat-left-fill" },
      ],
    };
  },
  mounted() {
    const isLightmode = JSON.parse(localStorage.getItem("lightmode"));
    if (isLightmode === null) {
      localStorage.setItem("lightmode", true);
      this.setLightmode(true);
    } else {
      this.setLightmode(!!isLightmode);
    }
  },
  methods: {
    changeMode(isLightmode) {
      localStorage.setItem("lightmode", isLightmode);
      this.setLightmode(isLightmode);
    },
    ...mapMutations(["setLightmode"]),
  },
};
</script>

<style lang="scss" scoped>
.right-sidebar-container {
  width: 108px;
  position: absolute;
  right: 0;
  .right-sidebar {
    width: 108px;
    height: calc(100vh - 0px);
    background: var(--v-color-gray-300);
    position: fixed;
    box-shadow: 4px 0px 10px rgba(47, 122, 249, 0.1);
    transition: all 300ms ease-in 0s;
    flex-direction: column;
    display: flex;
    &__inner {
      display: flex;
      height: 100%;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      .right-sidebar__btn {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background: var(--v-color-gray-400);
        padding: 0;
        margin-bottom: 43px;
        &:last-child {
          margin-bottom: 0;
        }
        &:hover,
        &.active_btn {
          background: var(--v-color-yellow-900);
        }
      }
    }
    &-contrast {
      height: 40px;
      margin-top: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      .rounded-circle {
        cursor: pointer;
        width: 30px;
        height: 30px;
      }
    }
  }
}
</style>
