<template>
	<v-data-table
		:headers="headers"
		:items="clientes"
		sort-by="name"
		class="elevation-1"
	>
		<template v-slot:top>
			<v-toolbar flat>
				<v-toolbar-title>Clientes Cadastrados</v-toolbar-title>
				<v-divider
					class="mx-4"
					inset
					vertical
				></v-divider>
				<v-spacer></v-spacer>
			</v-toolbar>
		</template>
		<template v-slot:item.detalhes="{ item }">
			<v-icon
				small
				class="mr-2"
				@click="editItem(item)"
			> mdi-magnify </v-icon>
		</template>
		<template v-slot:item.compras="{ item }">
			<v-icon
				small
				@click="deleteItem(item)"
			> mdi-cart-outline </v-icon>
		</template>
		<template v-slot:no-data>
			<v-btn
				color="primary"
				@click="initialize"
			> Reset </v-btn>
		</template>
	</v-data-table>
</template>

<script>
import Compras from "../components/Compras.vue";
import Detalhes from "../components/Detalhes.vue";

export default {
	name: "Clientes",
	data: () => ({
		components: {
			Compras,
			Detalhes,
		},

		dialog: false,
		headers: [
			{
				text: "Nome",
				align: "start",
				sortable: true,
				value: "nome",
			},
			{ text: "CPF", value: "cpf" },
			{ text: "Telefone", value: "telefone" },
			{ text: "Detalhes", value: "detalhes", sortable: false },
			{ text: "Compras", value: "compras", sortable: false },
		],
		clientes: [],
		clienteIndex: -1,
		cliente: {},
		clienteVazio: {},
	}),

	created() {
		this.initialize();
	},

	methods: {
		initialize() {
			this.clientes = [
				{
					nome: "Jão da Silva",
					cpf: "12345678905",
					telefone: "6799997777",
					rg: "2435466687",
					dataNasc: "10/10/1960",
					endereco: {
						cep: "15966000",
						cidade: "Campo Grande",
						uf: "MS",
						rua: "Av. Brasil",
						num: "555",
					},
				},
				{
					nome: "Maria dos Santos",
					cpf: "12345678905",
					telefone: "6799997777",
					rg: "2435466687",
					dataNasc: "10/10/1960",
					endereco: {
						cep: "15966000",
						cidade: "Campo Grande",
						uf: "MS",
						rua: "Av. Brasil",
						num: "555",
					},
				},
				{
					nome: "Zé do Caixão",
					cpf: "12345678905",
					telefone: "6799997777",
					rg: "2435466687",
					dataNasc: "10/10/1960",
					endereco: {
						cep: "15966000",
						cidade: "Campo Grande",
						uf: "MS",
						rua: "Av. Brasil",
						num: "555",
					},
				},
				{
					nome: "Joselito da Silva",
					cpf: "12345678905",
					telefone: "6799997777",
					rg: "2435466687",
					dataNasc: "10/10/1960",
					endereco: {
						cep: "15966000",
						cidade: "Campo Grande",
						uf: "MS",
						rua: "Av. Brasil",
						num: "555",
					},
				},
				{
					nome: "Luís da Silva",
					cpf: "12345678905",
					telefone: "6799997777",
					rg: "2435466687",
					dataNasc: "10/10/1960",
					endereco: {
						cep: "15966000",
						cidade: "Campo Grande",
						uf: "MS",
						rua: "Av. Brasil",
						num: "555",
					},
				},
				{
					nome: "Ana dos Santos",
					cpf: "12345678905",
					telefone: "6799997777",
					rg: "2435466687",
					dataNasc: "10/10/1960",
					endereco: {
						cep: "15966000",
						cidade: "Campo Grande",
						uf: "MS",
						rua: "Av. Brasil",
						num: "555",
					},
				},
				{
					nome: "Tião da Silva",
					cpf: "12345678905",
					telefone: "6799997777",
					rg: "2435466687",
					dataNasc: "10/10/1960",
					endereco: {
						cep: "15966000",
						cidade: "Campo Grande",
						uf: "MS",
						rua: "Av. Brasil",
						num: "555",
					},
				},
			];
		},

		mostrarCompras() {},

		mostrarDetalhes() {
			this.$refs.compras.show();
		},
	},
};
</script>
