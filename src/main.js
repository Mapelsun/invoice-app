import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// Importing Dayjs
import dayjs from "dayjs";

// Layouts
import DefaultLayout from "@/layouts/DefaultLayout.vue";
import HomeLayout from "@/layouts/HomeLayout.vue";

Vue.component("default-layout", DefaultLayout);
Vue.component("home-layout", HomeLayout);

Vue.filter("capitalize", (value) => {
  return value
    .toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
});

Vue.filter("formatDate", (value) => {
  if (value) {
    return dayjs(String(value)).format("DD MMM YYYY");
  }
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
