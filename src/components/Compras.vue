<template>
  <v-card>
    <v-data-table
      :headers="cabecalhoPrincipal"
      :items="comprasCliente"
      :items-per-page="10"
      class="elevation-1"
    ><template v-slot:top>
        <v-dialog
          v-model="dialogDetalhes"
          persistent
          width="600px"
        >
          <v-card class="pa-3">
            <v-toolbar flat>
              <v-card-title>Cliente: {{nomeAtual}}</v-card-title>
              <v-spacer></v-spacer>
              <v-btn
                color="#232B45"
                dark
                small
                @click="fecharDetalhes"
              >Fechar</v-btn>
            </v-toolbar>
            <v-card-subtitle>Compra realizada em {{dataCompra}}</v-card-subtitle>
            <v-data-table
              :headers="cabecalhoDetalhes"
              :items="compraAtual"
              :items-per-page="10"
              class="elevation-1"
            >
            </v-data-table>
          </v-card>
        </v-dialog>
      </template>
      <template v-slot:item.detalhes="{item}">
        <v-icon
          size="25px"
          @click="abrirDetalhes(item)"
        > mdi-magnify </v-icon>
      </template>
    </v-data-table>
  </v-card>
</template>

<script>
export default {
  name: "Compras",
  props: {
    comprasCliente: {
      default: [],
    },
  },
  data() {
    return {
      dialogDetalhes: false,
      cabecalhoPrincipal: [
        {
          text: "CPF",
          align: "start",
          sortable: false,
          value: "cpf",
        },
        { text: "Data", value: "data" },
        { text: "Quantidade de produtos", value: "qtdTotal" },
        { text: "Valor total", value: "valorTotal" },
        { text: "Detalhes", value: "detalhes", sortable: false },
      ],
      cabecalhoDetalhes: [
        { text: "Produto", value: "nomeProduto" },
        { text: "Valor unitário", value: "valorUnit" },
        { text: "Quantidade", value: "qtd" },
        { text: "Valor total", value: "valorTotalProduto" },
      ],
      compraAtual: [],
      dataCompra: "",
      nomeAtual: "",
    };
  },
  methods: {
    abrirDetalhes(compraCliente) {
      this.dataCompra = compraCliente.data;
      this.nomeAtual = compraCliente.nome;
      this.compraAtual = compraCliente.produtos;
      this.dialogDetalhes = true;
    },
    fecharDetalhes() {
      this.dialogDetalhes = false;
    },
  },
};
</script>

<style>
</style>