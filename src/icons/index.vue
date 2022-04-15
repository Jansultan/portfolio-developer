<template>
  <component
    :is="iconComponent"
    :color="color"
    :width="width"
    :height="height"
  ></component>
</template>

<script>
const icons = {
  contrast: require("./contrast.vue"),
};
export default {
  props: {
    name: {
      type: String,
      default: "contrast",
    },
    color: { type: String, default: "--v-color-black-800" },
    width: { type: String, default: "30px" },
    height: { type: String, default: "30px" },
  },
  computed: {
    iconComponent() {
      console.log(this.name);
      return icons[this.name];
    },
  },
};
</script>
