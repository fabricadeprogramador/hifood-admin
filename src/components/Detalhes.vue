<template>
	<div>
		<v-dialog
			v-model="dialog"
			persistent
		>
			<template v-slot:activator="{ on, attrs }">
				<v-icon
					v-bind="attrs"
					v-on="on"
				>
					mdi-magnify
				</v-icon>
			</template>
			<v-card>
				<v-card-title class="headline">Use Google's location service?</v-card-title>
				<v-card-text>
					Nome: {{clienteAtual.nome}}
				</v-card-text>
				<v-card-text>
					CPF: {{clienteAtual.cpf}}
				</v-card-text>
				<v-card-text>
					Telefone: {{clienteAtual.telefone}}
				</v-card-text>
				<v-card-actions>
					<v-spacer></v-spacer>
					<v-btn
						color="green darken-1"
						text
						@click="dialog = false"
					>Close</v-btn>
				</v-card-actions>
			</v-card>
		</v-dialog>
	</div>
</template>

<script>
export default {
	name: "Detalhes",
	props: {
		dialog: {
			default: false,
		},
		clienteAtual: {
			default: {},
		},
	},
	methods: {},
};
</script>

<style>
</style>