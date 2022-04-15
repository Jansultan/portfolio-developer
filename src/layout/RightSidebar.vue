<template>
  <div class="right-sidebar-container">
    <div class="right-sidebar">
      <div class="right-sidebar-contrast">
        <b-icon icon="circle-half" class="rounded-circle"></b-icon>
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
export default {
  components: {},
  data() {
    return {
      rightSidebars: [
        { title: "Home", name: "home", icon: "house-door-fill" },
        { title: "Services", name: "services", icon: "file-earmark-code-fill" },
        { title: "Education", name: "education", icon: "person-fill" },
        { title: "Portfolios", name: "portfolios", icon: "bag-dash-fill" },
        { title: "Blog", name: "blog", icon: "vector-pen" },
        { title: "Contact", name: "contact", icon: "chat-left-fill" },
      ],
    };
  },
  mounted() {
    console.log(this.$route.name);
  },
};
</script>

<style lang="scss" scoped>
.right-sidebar-container {
  width: 108px;
  position: absolute;
  right: 0;
  z-index: 9999;
  .right-sidebar {
    width: 108px;
    height: calc(100vh - 0px);
    background: var(--v-color-gray-300);
    position: fixed;
    box-shadow: 4px 0px 10px rgba(47, 122, 249, 0.1);
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
