const axios = require("axios");
const API_HOST = "http://localhost:3000/produto"

export default {

    buscarTodos() {
        return axios.get(API_HOST).then(function(resposta) {
            return resposta;
        }).catch(function(error) {
            return error;
        });
    },

    inserir(produto) {
        return axios.post(API_HOST, produto).then((resposta) => {
            return resposta;
        }).catch((error) => {
            return error;
        });
    },

    editar(produto) {
        return axios.put(API_HOST, produto).then((resposta) => {
            return resposta;
        }).catch((error) => {
            return error;
        });
    },

    buscarPorId() {},

    deletar() {}
}
