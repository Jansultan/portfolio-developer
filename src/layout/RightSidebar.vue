<template>
  <div class="right-sidebar">
    <div class="right-sidebar-contrast">
      <b-icon icon="circle-half" class="rounded-circle"></b-icon>
    </div>
    <div class="right-sidebar__inner">
      <b-button
        v-b-tooltip.hover
        title="Home"
        class="right-sidebar__btn active_btn"
      >
        <b-icon icon="house-door-fill" variant="black"></b-icon>
      </b-button>
      <b-button v-b-tooltip.hover title="Services" class="right-sidebar__btn">
        <b-icon icon="file-earmark-code-fill" variant="black"></b-icon>
      </b-button>
      <b-button v-b-tooltip.hover title="Education" class="right-sidebar__btn">
        <b-icon icon="person-fill" variant="black"></b-icon>
      </b-button>
      <b-button v-b-tooltip.hover title="Portfolios" class="right-sidebar__btn">
        <b-icon icon="bag-dash-fill" variant="black"></b-icon>
      </b-button>
      <b-button v-b-tooltip.hover title="Blog" class="right-sidebar__btn">
        <b-icon icon="vector-pen" variant="black"></b-icon>
      </b-button>
      <b-button v-b-tooltip.hover title="Contact" class="right-sidebar__btn">
        <b-icon icon="chat-left-fill" variant="black"></b-icon>
      </b-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.right-sidebar {
  width: 108px;
  height: 100%;
  background: var(--v-color-gray-300);
  right: 0;
  top: 0;
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
</style>
