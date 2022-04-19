<template>
  <div class="footer-container">
    <p>@{{ new Date().getFullYear() }} All Rights Almaty.Kazakhstan</p>
  </div>
</template>

<style lang="scss" scoped>
.footer-container {
  width: 100%;
  height: 60px;
  background: var(--v-color-white);
  padding: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
  & > p {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 24px;
    text-transform: capitalize;
    font-feature-settings: "calt" off, "kern" off;
    color: var(--v-color-black-800);
    margin-bottom: 0;
  }
}
</style>
