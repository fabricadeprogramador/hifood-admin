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
      :headers="cabecalhoPrincipal"
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
          <v-dialog
            v-model="dialogDetalhes"
            persistent
            width="600px"
          >
            <v-card class="pa-3">
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                  color="#232B45"
                  dark
                  small
                  @click="fecharDetalhes"
                >Fechar</v-btn>
              </v-card-actions>
              <v-card-text class="text-h6">Compra realizada em {{dataCorrente}}</v-card-text>
              <v-data-table
                :headers="cabecalhoDetalhes"
                :items="compraAtual"
                :items-per-page="10"
                class="elevation-1"
              >
              </v-data-table>
            </v-card>
          </v-dialog>
        </v-toolbar>
      </template> <template v-slot:item.detalhes="{item}">
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
    cliente: {
      default: "",
    },
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
        { text: "Quantidade", value: "qtdTotal" },
        { text: "Valor total", value: "valorTotal" },
        { text: "Detalhes", value: "detalhes" },
      ],
      cabecalhoDetalhes: [
        { text: "Produto", value: "nomeProduto" },
        { text: "Valor unitário (R$)", value: "valorUnit" },
        { text: "Quantidade", value: "qtd" },
        { text: "Valor total (R$)", value: "valorTotalProduto" },
      ],
      compraAtual: [],
      dataCorrente: "",
    };
  },
  methods: {
    voltarClientes() {
      this.$emit("voltar-clientes");
    },
    abrirDetalhes(compraCliente) {
      this.dataCorrente = compraCliente.data;
      this.compraAtual = [];
      for (let i = 0; i < compraCliente.produtos.length; i++) {
        let compra = compraCliente.produtos[i];
        this.compraAtual.push(compra);
      }
      for (let i = 0; i < this.compraAtual.length; i++) {
        let valorUnitario = parseFloat(this.compraAtual[i].valorUnit);
        let valorTotal = parseFloat(this.compraAtual[i].valorTotalProduto);
        this.compraAtual[i].valorUnit = valorUnitario.toFixed(2);
        this.compraAtual[i].valorTotalProduto = valorTotal.toFixed(2);
      }
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