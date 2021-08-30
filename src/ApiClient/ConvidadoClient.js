const axios = require("axios")
const API_HOST = "http://localhost:3000/convidado"

export default {
  buscarTodos() {
    return axios
      .get(API_HOST)
      .then((resposta) => resposta)
      .catch((error) => error)
  },

  buscarPorId() {},

  inserir(convidado) {
    return axios
      .post(API_HOST, convidado)
      .then((resposta) => resposta)
      .catch((error) => error)
  },

  deletar() {},
  editar() {}
}
