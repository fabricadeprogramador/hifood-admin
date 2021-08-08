<template>
  <v-card>
    <v-card-actions>
      <v-btn
        color="#232B45"
        class="ma-3"
        dark
        @click="voltarClientes"
      >Voltar</v-btn>
    </v-card-actions>
    <v-data-table
      :headers="headers"
      :items="comprasCliente"
      :items-per-page="10"
      class="elevation-1"
    ><template v-slot:top>
        <v-toolbar flat>
          <v-toolbar-title>Compras cadastradas</v-toolbar-title>
          <v-divider
            class="mx-4"
            inset
            vertical
          ></v-divider>
          <v-toolbar-title>{{cliente}}</v-toolbar-title>
          <v-spacer></v-spacer>
        </v-toolbar>
      </template> <template v-slot:item.detalhes="{}">
        <v-icon size="25px"> mdi-magnify </v-icon>
      </template>
    </v-data-table>
  </v-card>
</template>

<script>
export default {
  name: "Compras",
  props: {
    cliente: {
      default: "",
    },
    comprasCliente: {
      default: [],
    },
  },
  data() {
    return {
      headers: [
        {
          text: "CPF",
          align: "start",
          sortable: false,
          value: "cpf",
        },
        { text: "Data", value: "data" },
        { text: "Quantidade", value: "qtdTotal" },
        { text: "Valor total", value: "valorTotal" },
        { text: "Detalhes", value: "detalhes" },
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