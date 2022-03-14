import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    invoices: [],
    invoice: null,
  },
  getters: {},
  mutations: {
    SET_INVOICES(state, payload) {
      state.invoices = payload;
    },
    SET_INVOICE(state, payload) {
      state.invoice = payload;
    },
    SET_FILTERED_INVOICES(state, payload) {
      state.invoices = payload;
    },
  },
  actions: {
    setInvoices(context, payload) {
      context.commit("SET_INVOICES", payload);
    },
    setInvoice(context, payload) {
      context.commit("SET_INVOICE", payload);
    },
    setFilteredInvoices(context, payload) {
      context.commit("SET_FILTERED_INVOICES", payload);
    },
  },
  modules: {},
  plugins: [createPersistedState({ storage: window.sessionStorage })],
});
