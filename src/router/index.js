import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

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
		component: () => import("../views/Produtos.vue"),
	},
	{
		path: "/relatorios",
		name: "Relatorios",
		component: () => import("../views/Relatorios.vue"),
	},
	{
		path: "/vendas",
		name: "Vendas",
		component: () => import("../views/Vendas.vue"),
	},
];

const router = new VueRouter({
	routes,
});

export default router;
