const axios = require("axios");
const hostClientes = "http://localhost:3000/cliente";
const hostCompras = "http://localhost:3000/cliente/compra";

export default {
	buscarTodos() {
		return axios.get(hostClientes).then((resposta) => resposta);
	},
	buscarCompras(cpf) {
		let hostCPF = hostCompras + "/" + cpf;
		return axios.get(hostCPF).then((resposta) => resposta);
	},
};
