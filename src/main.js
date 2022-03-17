import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import dayjs from "dayjs";
import Vuelidate from "vuelidate";

Vue.use(Vuelidate);

// Layouts
import DefaultLayout from "@/layouts/DefaultLayout.vue";
import HomeLayout from "@/layouts/HomeLayout.vue";
import AppLoader from "@/components/widgets/AppLoader.vue";

Vue.component("default-layout", DefaultLayout);
Vue.component("home-layout", HomeLayout);
Vue.component("app-loading", AppLoader);

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

Vue.filter("formatAmount", (digit) => {
  let num;
  if (typeof digit !== "string") {
    if (typeof digit === "number") {
      num = digit;
    }
  } else num = Number.parseFloat(digit, 10);
  if (typeof num !== undefined) {
    num = num.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
    return `${num}`;
  }
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
