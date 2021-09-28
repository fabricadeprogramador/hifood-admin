const axios = require("axios");
const API_HOST = "http://localhost:3000/categoria";

export default {

    buscarTodos() {
        let resposta = axios.get(API_HOST).then((resp) => resp).catch((error) => error);
        return resposta;
    }
}