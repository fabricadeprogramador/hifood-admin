import Vue from "vue"
import VueRouter from "vue-router"
import Store from "@/store"
import LocalStorageManager from "../utils/LocalStorageManager"
import { actionTypes } from "@/constants"
import Home from "../views/Home.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "Home",
    meta: {
      requiresAuth: true
    },
    component: Home
  },
  {
    path: "/clientes",
    name: "Clientes",
    meta: {
      requiresAuth: true
    },
    component: () => import("../views/Clientes.vue")
  },
  {
    path: "/produtos",
    name: "Produtos",
    meta: {
      requiresAuth: true
    },
    component: () => import("../views/Produtos.vue")
  },
  {
    path: "/usuarios",
    name: "Usuarios",
    meta: {
      requiresAuth: true
    },
    component: () => import("../views/Usuarios.vue")
  },
  {
    path: "/vendas",
    name: "Vendas",
    meta: {
      requiresAuth: true
    },
    component: () => import("../views/Vendas.vue")
  },
  {
    path: "/convidados",
    name: "Convidados",
    meta: {
      requiresAuth: true
    },
    component: () => import("../views/Convidados.vue")
  },
  {
    path: "/login",
    name: "Login",
    meta: {
      requiresAuth: false
    },
    component: () => import("../views/Login.vue")
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach(async (to, from, next) => {
  const usuario = LocalStorageManager.getItem()

  if (to.matched.some((record) => record.meta.requiresAuth)) {
    Store.dispatch(actionTypes.COMUM.VERIFICA_TOKEN)

    if (!usuario || usuario.token == null) {
      next({ name: "Login" })
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
