<template>
  <div class="page-not-found">
    <bg404 />
    <h1>SORRY, PAGE NOT FOUND!</h1>
    <h4>Don’t panic just click the big button to retun home</h4>
    <b-button
      variant="warning"
      size="lg"
      @click="$router.push({ name: 'home' }, () => {})"
    >
      <b-icon icon="arrow-left"></b-icon> Go Back Home
    </b-button>
  </div>
</template>
<script>
import bg404 from "../icons/bg404.vue";

export default {
  components: { bg404 },
};
</script>

<style lang="scss" scoped>
.page-not-found {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 50px 0;
  & > h1 {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 48px;
    line-height: 123.6%;
    text-align: center;
    text-transform: capitalize;
    color: var(--v-color-black-800);
    margin-bottom: 15px;
  }
  & > h4 {
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 123.6%;
    text-align: center;
    text-transform: capitalize;
    color: var(--v-color-black-800);
    margin-bottom: 50px;
  }
  // & > svg {
  //   max-width: 1047px;
  //   max-height: 698px;
  //   animation: as 2500ms ease-out infinite;
  // }
  // @keyframes as {
  //   0% {
  //     width: 100%;
  //     height: 100%;
  //   }
  //   25% {
  //     width: 99%;
  //     height: 99%;
  //   }
  //   50% {
  //     width: 98%;
  //     height: 98%;
  //   }
  //   75% {
  //     width: 99%;
  //     height: 99%;
  //   }
  //   100% {
  //     width: 100%;
  //     height: 100%;
  //   }
  // }
}
</style>
