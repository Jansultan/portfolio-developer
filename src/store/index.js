import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLightmode: true,
  },
  mutations: {
    setLightmode: (state, value) => (state.isLightmode = value),
  },
});
