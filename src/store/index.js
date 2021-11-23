import Vue from "vue"
import Vuex from "vuex"

import comum from "./comum"
import alerta from "./alerta"
import convidado from "./convidado"

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    alerta,
    comum,
    convidado
  }
})
