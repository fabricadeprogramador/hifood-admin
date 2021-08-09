<template>
  <div>
    <v-data-table
      :headers="headers"
      :items="clientes"
      sort-by="name"
      class="elevation-1"
      v-if="mostrarClientes"
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
          <v-dialog
            v-model="dialogDetalhes"
            persistent
            width="400px"
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
              <v-card-title class="text-h6">Dados pessoais:</v-card-title>
              <v-card-text class="text-subtitle-1"><b>Nome completo:</b> {{ clienteAtual.nome }} </v-card-text>
              <v-card-text class="text-subtitle-1"><b>Email:</b> {{ clienteAtual.email }} </v-card-text>
              <v-card-text class="text-subtitle-1"><b>CPF:</b> {{ clienteAtual.cpf }} </v-card-text>
              <v-card-text class="text-subtitle-1"><b>RG:</b> {{ clienteAtual.rg }} </v-card-text>
              <v-card-text class="text-subtitle-1">
                <b>Data de nascimento:</b> {{ clienteAtual.dataNasc }}
              </v-card-text>
              <v-card-text class="text-subtitle-1"><b>Telefone:</b> {{ clienteAtual.telefone }} </v-card-text>
              <v-card-title class="text-h6">Dados de entrega:</v-card-title>
              <v-card-text class="text-subtitle-1"><b>CEP:</b> {{ clienteAtual.endereco.cep }} </v-card-text>
              <v-card-text class="text-subtitle-1"><b>Cidade:</b> {{ clienteAtual.endereco.cidade }}</v-card-text>
              <v-card-text class="text-subtitle-1"><b>UF:</b> {{ clienteAtual.endereco.uf }} </v-card-text>
              <v-card-text class="text-subtitle-1"><b>Endereço:</b> {{ clienteAtual.endereco.rua }} </v-card-text>
              <v-card-text class="text-subtitle-1"><b>Número:</b> {{ clienteAtual.endereco.num }} </v-card-text>
              <v-card-text class="text-subtitle-1"><b>Bairro:</b> {{ clienteAtual.endereco.bairro }} </v-card-text>
            </v-card>
          </v-dialog>
        </v-toolbar>
      </template>

      <template v-slot:item.detalhes="{ item }">
        <v-icon
          size="25px"
          @click="abrirDetalhes(item)"
        > mdi-magnify </v-icon>
      </template>

      <template v-slot:item.compras="{ item }">
        <v-icon
          size="25px"
          class="my-2"
          @click="compraCliente(item)"
        >mdi-cart-outline</v-icon>
      </template>
    </v-data-table>
    <Compras
      v-else
      :cliente="clienteAtual.nome"
      :comprasCliente="comprasClienteAtual"
      @voltar-clientes="fecharJanelaCompras"
    />
  </div>
</template>

<script>
import Compras from "../components/Compras.vue";

export default {
  components: { Compras },
  name: "Clientes",
  data: () => ({
    dialogDetalhes: false,
    mostrarClientes: true,
    headers: [
      {
        text: "Nome",
        align: "start",
        sortable: true,
        value: "nome",
      },
      { text: "Email", value: "email" },
      { text: "CPF", value: "cpf" },
      { text: "Telefone", value: "telefone" },
      { text: "Detalhes", value: "detalhes", sortable: false },
      { text: "Compras", value: "compras", sortable: false },
    ],
    clientes: [],
    clienteAtual: {
      nome: "",
      email: "",
      cpf: 0,
      telefone: "",
      rg: "",
      dataNasc: "",
      endereco: {
        cep: "",
        cidade: "",
        bairro: "",
        uf: "",
        rua: "",
        num: "",
      },
    },
    comprasClienteAtual: [],
    compras: [
      {
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
  }),

  created() {
    this.initialize();
  },

  methods: {
    initialize() {
      this.clientes = [
        {
          nome: "Jão da Silva",
          email: "jao.silva@gmail.com",
          cpf: "123.456.789-10",
          telefone: "(67) 99997 7777",
          rg: "2435466687",
          dataNasc: "10/10/1960",
          endereco: {
            cep: "15.966-000",
            cidade: "Campo Grande",
            bairro: "Centro",
            uf: "MS",
            rua: "Av. Brasil",
            num: "555",
          },
        },
        {
          nome: "Maria dos Santos",
          email: "maria.dsantos@gmail.com",
          cpf: "719.876.543-21",
          telefone: "(11) 99797 7787",
          rg: "24935466687",
          dataNasc: "10/10/1960",
          endereco: {
            cep: "15.966-000",
            cidade: "Campo Grande",
            bairro: "Centro",
            uf: "MS",
            rua: "Av. Brasil",
            num: "555",
          },
        },
        {
          nome: "Zé do Caixão",
          email: "jose_zc@gmail.com",
          cpf: "121.212.343-33",
          telefone: "(67) 99997 4737",
          rg: "2435466687",
          dataNasc: "10/10/1960",
          endereco: {
            cep: "15.966-000",
            cidade: "Campo Grande",
            bairro: "Centro",
            uf: "MS",
            rua: "Av. Brasil",
            num: "555",
          },
        },
        {
          nome: "Joselito da Silva",
          email: "js_silva@gmail.com",
          cpf: "934.456.731-05",
          telefone: "(51) 99997 7774",
          rg: "2435466687",
          dataNasc: "10/10/1960",
          endereco: {
            cep: "79.966-000",
            cidade: "Campo Grande",
            bairro: "Centro",
            uf: "MS",
            rua: "Av. Brasil",
            num: "555",
          },
        },
        {
          nome: "Luís da Silva",
          email: "luis_silva@gmail.com",
          cpf: "134.671.167-15",
          telefone: "(43) 99998 1234",
          rg: "2435466687",
          dataNasc: "10/10/1960",
          endereco: {
            cep: "18.966-050",
            cidade: "Campo Grande",
            bairro: "Centro",
            uf: "MS",
            rua: "Av. Brasil",
            num: "555",
          },
        },
        {
          nome: "Ana dos Santos",
          email: "santos_ana@gmail.com",
          cpf: "239.456.789-37",
          telefone: "(32) 99994 1894",
          rg: "2435466687",
          dataNasc: "10/10/1960",
          endereco: {
            cep: "19.966-000",
            cidade: "Campo Grande",
            bairro: "Centro",
            uf: "MS",
            rua: "Av. Brasil",
            num: "555",
          },
        },
        {
          nome: "Tião da Silva",
          email: "t_silva@gmail.com",
          cpf: "167.138.789-44",
          telefone: "(48) 98734 6713",
          rg: "2435466687",
          dataNasc: "10/10/1960",
          endereco: {
            cep: "76.966-100",
            cidade: "Campo Grande",
            bairro: "Centro",
            uf: "MS",
            rua: "Av. Brasil",
            num: "555",
          },
        },
      ];
    },
    abrirDetalhes(cliente) {
      this.clienteAtual = cliente;
      this.dialogDetalhes = true;
    },
    fecharDetalhes() {
      this.dialogDetalhes = false;
    },

    //Recebe o objeto com o cliente atual
    //Envia o nome do cliente para a tela de compras
    //Compara o CPF do cliente com o CPF das compras realizadas no app
    compraCliente(cliente) {
      this.clienteAtual.nome = cliente.nome;
      this.comprasClienteAtual = [];
      for (let i = 0; i < this.compras.length; i++) {
        if (cliente.cpf == this.compras[i].cpf) {
          this.comprasClienteAtual.push(this.compras[i]);
        }
      }
      for (let i = 0; i < this.comprasClienteAtual.length; i++) {
        let compra = this.comprasClienteAtual[i];
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
      this.mostrarClientes = false;
    },
    fecharJanelaCompras() {
      this.mostrarClientes = true;
    },
  },
};
</script>
