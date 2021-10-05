const axios = require("axios");
const hostHome = "http://localhost:3000/home";

export default {
	buscarDados() {
		return axios.get(hostHome).then((resposta) => resposta);
	},
};
