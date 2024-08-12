import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    accountsControls: false,
    scrollPosition: 0,
    enable: true,
    disable: false,
  },
  getters: {
    ACCOUNTS_GETTER(state) {
      return state.accountsControls;
    },
    GET_SCROLL_LEFT_POSITION: (state) => state.scrollPosition,
    ENABLE_BTN: (state) => state.enable,
    DISABLE_BTN: (state) => state.disable,
  },
  mutations: {
    ACCOUNTS_CONTROLLER(state, payload) {
      state.accountsControls = payload;
    },
    BTN_CONTROLS(state, payload) {
      state.enable = payload.enableBtn;
      state.disable = payload.disableBtn;
    },
    SET_SCROLL_POSITION(state, position) {
      state.scrollPosition += position;
    },
    SET_ANTI_SCROLL_POSITION(state, payload) {
      if (state.scrollPosition > 0) {
        state.scrollPosition -= payload;
      }
    },
  },
  actions: {
    scrolling({ commit }, newPosition) {
      commit("SET_SCROLL_POSITION", newPosition);
    },
  },

  modules: {},
});
