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
          <v-divider class="mx-4" inset vertical></v-divider>
          <v-spacer></v-spacer>
        </v-toolbar>
      </template>

      <template v-slot:item.detalhes="{ item }">
        <Detalhes :dialog.sync="dialog" :clienteAtual="item" />
      </template>

      <template v-slot:item.compras="{ item }">
        <v-icon size="25px" class="my-2" @click="compraCliente(item)"
          >mdi-cart-outline</v-icon
        >
      </template>
    </v-data-table>
    <Compras
      v-else
      :clienteAtual="cliente"
      @voltar-clientes="fecharJanelaCompras"
    />
  </div>
</template>

<script>
import Compras from "../components/Compras.vue";
import Detalhes from "../components/Detalhes.vue";

export default {
  components: { Detalhes, Compras },
  name: "Clientes",
  data: () => ({
    dialog: false,
    mostrarClientes: true,
    headers: [
      {
        text: "Nome",
        align: "start",
        sortable: true,
        value: "nome",
      },
      { text: "CPF", value: "cpf" },
      { text: "Telefone", value: "telefone" },
      { text: "Detalhes", value: "detalhes", sortable: false },
      { text: "Compras", value: "compras", sortable: false },
    ],
    clientes: [],
    clienteIndex: -1,
    cliente: {},
    clienteVazio: {},
  }),

  created() {
    this.initialize();
  },

  methods: {
    initialize() {
      this.clientes = [
        {
          nome: "Jão da Silva",
          cpf: "12345678905",
          telefone: "6799997777",
          rg: "2435466687",
          dataNasc: "10/10/1960",
          endereco: {
            cep: "15966000",
            cidade: "Campo Grande",
            uf: "MS",
            rua: "Av. Brasil",
            num: "555",
          },
        },
        {
          nome: "Maria dos Santos",
          cpf: "12345678905",
          telefone: "6799997777",
          rg: "2435466687",
          dataNasc: "10/10/1960",
          endereco: {
            cep: "15966000",
            cidade: "Campo Grande",
            uf: "MS",
            rua: "Av. Brasil",
            num: "555",
          },
        },
        {
          nome: "Zé do Caixão",
          cpf: "12345678905",
          telefone: "6799997777",
          rg: "2435466687",
          dataNasc: "10/10/1960",
          endereco: {
            cep: "15966000",
            cidade: "Campo Grande",
            uf: "MS",
            rua: "Av. Brasil",
            num: "555",
          },
        },
        {
          nome: "Joselito da Silva",
          cpf: "12345678905",
          telefone: "6799997777",
          rg: "2435466687",
          dataNasc: "10/10/1960",
          endereco: {
            cep: "15966000",
            cidade: "Campo Grande",
            uf: "MS",
            rua: "Av. Brasil",
            num: "555",
          },
        },
        {
          nome: "Luís da Silva",
          cpf: "12345678905",
          telefone: "6799997777",
          rg: "2435466687",
          dataNasc: "10/10/1960",
          endereco: {
            cep: "15966000",
            cidade: "Campo Grande",
            uf: "MS",
            rua: "Av. Brasil",
            num: "555",
          },
        },
        {
          nome: "Ana dos Santos",
          cpf: "12345678905",
          telefone: "6799997777",
          rg: "2435466687",
          dataNasc: "10/10/1960",
          endereco: {
            cep: "15966000",
            cidade: "Campo Grande",
            uf: "MS",
            rua: "Av. Brasil",
            num: "555",
          },
        },
        {
          nome: "Tião da Silva",
          cpf: "12345678905",
          telefone: "6799997777",
          rg: "2435466687",
          dataNasc: "10/10/1960",
          endereco: {
            cep: "15966000",
            cidade: "Campo Grande",
            uf: "MS",
            rua: "Av. Brasil",
            num: "555",
          },
        },
      ];
    },
    compraCliente(item) {
      this.cliente = item;
      this.mostrarClientes = false;
    },
    fecharJanelaCompras() {
      this.cliente = {};
      this.mostrarClientes = true;
    },
  },
};
</script>
