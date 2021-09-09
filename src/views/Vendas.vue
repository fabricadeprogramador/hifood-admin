<template>
  <div>
    <v-card flat>
      <v-card-title class="text-h5">Vendas</v-card-title>
      <v-card-subtitle>Aqui você pode visualizar as vendas realizadas</v-card-subtitle>
      <v-toolbar flat>
        <v-text-field
          v-model="buscar"
          append-icon="mdi-magnify"
          label="Buscar"
          single-line
          outlined
          dense
        ></v-text-field>
        <v-spacer></v-spacer>
      </v-toolbar>
    </v-card>
    <Compras :comprasCliente="compras"></Compras>
  </div>
</template>

<script>
import Compras from "../components/Compras.vue";
import VendaClient from "../ApiClient/VendaClient.js";

export default {
  name: "Vendas",
  components: { Compras },
  data() {
    return {
      compras: [],
    };
  },
  methods: {
    async buscarVendas() {
      let resposta = await VendaClient.buscarTodos();
      this.compras = resposta.data;
    },
  },
  mounted() {
    this.buscarVendas();
  },
};
</script>