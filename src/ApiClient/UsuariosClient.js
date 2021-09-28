const axios = require("axios")
const API_HOST = 'http://localhost:3000/usuario'

export default {
  buscarTodos() {
    return axios
      .get(API_HOST)
      .then(resposta => resposta)
      .catch((error) => error)
  },

  buscarPorId() { 
    return axios
      .get(API_HOST)
      .then(resposta => resposta)
      .catch((error) => error)

  },
  editar(usuario) {
    return axios.put(API_HOST, usuario).then((resposta) => {
      return resposta;
    }).catch((error) => {
      return error;
    });
  },

  inserir(usuario) {
    return axios
      .post(API_HOST, usuario)
      .then((resposta) => resposta)
      .catch((error) => error)
  },

  
}
