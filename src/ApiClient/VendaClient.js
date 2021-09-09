const axios = require("axios");
const host = "http://localhost:3000/venda";

export default {
	buscarTodos() {
		return axios.get(host).then((resposta) => resposta);
	},
};
