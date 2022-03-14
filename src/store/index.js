import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    invoices: [],
  },
  getters: {},
  mutations: {
    SET_INVOICES(state, payload) {
      state.invoices = payload;
    },
  },
  actions: {
    setInvoices(context, payload) {
      context.commit("SET_INVOICES", payload);
    },
  },
  modules: {},
});
