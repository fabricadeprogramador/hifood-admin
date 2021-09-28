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
    <Compras :comprasCliente="vendas"></Compras>
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
      vendas: [],
    };
  },
  methods: {
    async buscarVendas() {
      //Busca vendas na API
      let resposta = await VendaClient.buscarTodos();
      this.vendas = resposta.data;
      //Formata os dados
      for (let i = 0; i < this.vendas.length; i++) {
        //Formata o valor total em R$
        let valorTotal = parseFloat(this.vendas[i].valorTotal);
        this.vendas[i].valorTotal = "R$ " + valorTotal.toFixed(2);
        //Formata o valor unitario e o valor total de cada produto em R$
        let produtos = this.vendas[i].produtos;
        for (let i = 0; i < produtos.length; i++) {
          let valorUnitario = parseFloat(produtos[i].valorUnit);
          produtos[i].valorUnit = "R$ " + valorUnitario.toFixed(2);
          let valorTotalProduto = parseFloat(produtos[i].valorTotalProduto);
          produtos[i].valorTotalProduto = "R$ " + valorTotalProduto.toFixed(2);
        }
        this.vendas[i].produtos = produtos;
      }
    },
  },
  mounted() {
    this.buscarVendas();
  },
};
</script>