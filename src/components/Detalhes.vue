<template>
	<v-layout
		row
		justify-center
	>
		<v-dialog
			v-model="dialog"
			persistent
			max-width="290"
		>
			<v-card>
				<v-card-title class="headline">Detalhes do Usuário</v-card-title>
				<v-card-text></v-card-text>
				<v-card-actions>
					<v-spacer></v-spacer>
					<v-btn
						color="green darken-1"
						flat
						@click.native="close"
					>Close</v-btn>
				</v-card-actions>
			</v-card>
		</v-dialog>
	</v-layout>
</template>

<script>
export default {
	name: "Detalhes",
	props: {
		dialog: {
			default: false,
		},
	},
	methods: {
		close() {
			this.$emit("update:dialog", false);
		},
	},
};
</script>

<style>
</style>