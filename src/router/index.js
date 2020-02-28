import Vue from "vue";
import VueRouter from "vue-router";
import Currency from "../views/Currencies.vue";
import AddCurrency from "../views/AddCurrency";
import EditCurrency from "../views/EditCurrency";

Vue.use(VueRouter);

const routes = [
  { path: "/", redirect: { name: "Currencies" } },
  {
    path: "/currencies",
    name: "Currencies",
    component: Currency
  },
  {
    path: "/currencies/add",
    name: "CurrenciesAdding",
    component: AddCurrency
  },
  {
    path: "/currencies/edit/:id",
    name: "CurrenciesEditing",
    component: EditCurrency
  }
];

const router = new VueRouter({
  routes
});

export default router;
