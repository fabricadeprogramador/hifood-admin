<template>
  <v-card>
    <v-card-actions>
      <v-btn color="#232B45" class="ma-3" dark @click="voltarClientes"
        >Voltar</v-btn
      >
    </v-card-actions>
    <v-data-table
      :headers="headers"
      :items="compras"
      :items-per-page="10"
      class="elevation-1"
      ><template v-slot:top>
        <v-toolbar flat>
          <v-toolbar-title>Compras cadastradas</v-toolbar-title>
          <v-divider class="mx-4" inset vertical></v-divider>
          <v-spacer></v-spacer>
        </v-toolbar> </template
    ></v-data-table>
  </v-card>
</template>

<script>
export default {
  name: "Compras",
  props: {
    clienteAtual: {
      default: {},
    },
  },
  data() {
    return {
      headers: [
        {
          text: "Cliente",
          align: "start",
          sortable: false,
          value: "nome",
        },
        { text: "Data", value: "data" },
        { text: "Quantidade", value: "quantidade" },
        { text: "Valor total", value: "valor" },
        { text: "Produtos", value: "produto" },
      ],
    };
  },
  methods: {
    voltarClientes() {
      this.$emit("voltar-clientes");
    },
  },
};
</script>

<style>
</style>