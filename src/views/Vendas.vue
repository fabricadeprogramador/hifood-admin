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

export default {
  name: "Vendas",
  components: { Compras },
  data() {
    return {
      compras: [
        {
          nome: "Jão da Silva",
          cpf: "123.456.789-10",
          data: "06/10/2020",
          produtos: [
            {
              nomeProduto: "Produto 1",
              qtd: 1,
              valorUnit: 20,
              valorTotalProduto: 0,
            },
            {
              nomeProduto: "Produto 2",
              qtd: 1,
              valorUnit: 16,
              valorTotalProduto: 0,
            },
          ],
          valorTotal: 0,
          qtdTotal: 0,
        },
        {
          nome: "Jão da Silva",
          cpf: "123.456.789-10",
          data: "01/03/2021",
          produtos: [
            {
              nomeProduto: "Produto 1",
              qtd: 1,
              valorUnit: 8,
              valorTotalProduto: 0,
            },
            {
              nomeProduto: "Produto 2",
              qtd: 2,
              valorUnit: 11,
              valorTotalProduto: 0,
            },
            {
              nomeProduto: "Produto 3",
              qtd: 1,
              valorUnit: 13,
              valorTotalProduto: 0,
            },
          ],
          valorTotal: 0,
          qtdTotal: 0,
        },
        {
          nome: "Maria dos Santos",
          cpf: "719.876.543-21",
          data: "09/04/2021",
          produtos: [
            {
              nomeProduto: "Produto 1",
              qtd: 1,
              valorUnit: 17,
              valorTotalProduto: 0,
            },
            {
              nomeProduto: "Produto 2",
              qtd: 2,
              valorUnit: 8,
              valorTotalProduto: 0,
            },
            {
              nomeProduto: "Produto 3",
              qtd: 1,
              valorUnit: 4,
              valorTotalProduto: 0,
            },
          ],
          valorTotal: 0,
          qtdTotal: 0,
        },
        {
          nome: "Tião da Silva",
          cpf: "167.138.789-44",
          data: "03/07/2021",
          produtos: [
            {
              nomeProduto: "Produto 1",
              qtd: 3,
              valorUnit: 9,
              valorTotalProduto: 0,
            },
          ],
          valorTotal: 0,
          qtdTotal: 0,
        },
        {
          nome: "Zé do Caixão",
          cpf: "121.212.343-33",
          data: "24/02/2021",
          produtos: [
            {
              nomeProduto: "Produto 1",
              qtd: 1,
              valorUnit: 21,
              valorTotalProduto: 0,
            },
            {
              nomeProduto: "Produto 2",
              qtd: 2,
              valorUnit: 16,
              valorTotalProduto: 0,
            },
            {
              nomeProduto: "Produto 3",
              qtd: 1,
              valorUnit: 9,
              valorTotalProduto: 0,
            },
          ],
          valorTotal: 0,
          qtdTotal: 0,
        },
        {
          nome: "Joselito da Silva",
          cpf: "934.456.731-05",
          data: "03/10/2020",
          produtos: [
            {
              nomeProduto: "Produto 1",
              qtd: 1,
              valorUnit: 21,
              valorTotalProduto: 0,
            },
            {
              nomeProduto: "Produto 2",
              qtd: 2,
              valorUnit: 12,
              valorTotalProduto: 0,
            },
            {
              nomeProduto: "Produto 3",
              qtd: 1,
              valorUnit: 2,
              valorTotalProduto: 0,
            },
            {
              nomeProduto: "Produto 4",
              qtd: 2,
              valorUnit: 32,
              valorTotalProduto: 0,
            },
          ],
          valorTotal: 0,
          qtdTotal: 0,
        },
        {
          nome: "Luís da Silva",
          cpf: "134.671.167-15",
          data: "08/05/2021",
          produtos: [
            {
              nomeProduto: "Produto 1",
              qtd: 3,
              valorUnit: 17,
              valorTotalProduto: 0,
            },
            {
              nomeProduto: "Produto 2",
              qtd: 2,
              valorUnit: 21,
              valorTotalProduto: 0,
            },
          ],
          valorTotal: 0,
          qtdTotal: 0,
        },
        {
          nome: "Ana dos Santos",
          cpf: "239.456.789-37",
          data: "01/03/2021",
          produtos: [
            {
              nomeProduto: "Produto 1",
              qtd: 4,
              valorUnit: 20,
              valorTotalProduto: 0,
            },
            {
              nomeProduto: "Produto 2",
              qtd: 2,
              valorUnit: 13,
              valorTotalProduto: 0,
            },
          ],
          valorTotal: 0,
          qtdTotal: 0,
        },
      ],
    };
  },
  created() {
    this.initialize();
  },
  methods: {
    initialize() {
      for (let i = 0; i < this.compras.length; i++) {
        let compra = this.compras[i];
        compra.qtdTotal = 0;
        compra.valorTotal = 0;
        for (let i = 0; i < compra.produtos.length; i++) {
          let produto = compra.produtos[i];
          produto.valorTotalProduto = produto.valorUnit * produto.qtd;
          compra.valorTotal = compra.valorTotal + produto.valorTotalProduto;
          compra.qtdTotal = compra.qtdTotal + produto.qtd;
        }
        compra.valorTotal = "R$ " + compra.valorTotal.toFixed(2);
      }
    },
  },
};
</script>