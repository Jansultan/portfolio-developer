import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/index";
import { BootstrapVue, IconsPlugin, BootstrapVueIcons } from "bootstrap-vue";
// import icons from "./icons";

import "./style/app.scss";

Vue.config.productionTip = false;

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(BootstrapVueIcons);
// Vue.component("p-icon", icons);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
