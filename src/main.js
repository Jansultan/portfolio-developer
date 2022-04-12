import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import { BootstrapVue, IconsPlugin, BootstrapVueIcons } from "bootstrap-vue";

import "./style/app.scss";

Vue.config.productionTip = false;

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(BootstrapVueIcons);

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
