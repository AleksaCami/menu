import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Currencies.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/currencies",
    name: "Currencies",
    component: Home
  }
];

const router = new VueRouter({
  routes
});

export default router;
