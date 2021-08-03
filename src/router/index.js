import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Produtos from "../views/Produtos";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/clientes",
    name: "Clientes",
    component: () => import("../views/Clientes.vue"),
  },
  {
    path: "/produtos",
    name: "Produtos",
    component: Produtos
  }
];

const router = new VueRouter({
  routes,
});

export default router;
