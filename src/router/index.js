import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("@/views/InvoicesHome.vue"),
    meta: {
      layout: "home-layout",
    },
  },
  {
    path: "/invoice-details",
    name: "invoice-details",
    component: () => import("@/components/invoice/InvoiceDetails.vue"),
    meta: {
      layout: "home-layout",
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
  routes,
});

export default router;
