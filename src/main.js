import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// Layouts
import DefaultLayout from "@/layouts/DefaultLayout.vue";
import HomeLayout from "@/layouts/HomeLayout.vue";

Vue.component("default-layout", DefaultLayout);
Vue.component("home-layout", HomeLayout);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
