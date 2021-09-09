const axios = require("axios");
const host = "http://localhost:3000/cliente";

export default {
  buscarTodos() {
    return axios.get(host).then((resposta) => resposta);
  },
};
