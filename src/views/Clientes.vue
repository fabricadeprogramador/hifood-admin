<template>
  <div>
    <!--Cabeçalho -->
    <v-card flat>
      <!--Título da área Clientes (v-if) -->
      <v-card-title
        class="text-h5"
        v-if="mostrarClientes"
      >Clientes</v-card-title>
      <!--Título da área Compras (v-else) -->
      <v-card-title
        class="text-h5"
        v-else
      >Clientes <v-icon>mdi-chevron-right</v-icon> Compras Realizadas</v-card-title>
      <!--Subtítulo da área Clientes (v-if) -->
      <v-card-subtitle v-if="mostrarClientes">Aqui você pode visualizar os dados de seus clientes</v-card-subtitle>
      <!--Subtítulo da área Compras (v-else) -->
      <v-card-subtitle v-else>{{clienteAtual.nome}}</v-card-subtitle>
      <!--Toolbar da área Clientes (v-if) -->
      <v-toolbar
        flat
        v-if="mostrarClientes"
      >
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
      <!--Toolbar da área Compras (v-else) -->
      <v-toolbar
        flat
        v-else
      >
        <v-btn
          color="#2F302B"
          class="mr-3"
          dark
          @click="fecharJanelaCompras"
        >Voltar</v-btn>
        <v-spacer></v-spacer>
      </v-toolbar>
    </v-card>

    <!-- Tabela Clientes -->
    <v-card v-if="mostrarClientes">
      <v-data-table
        :headers="headers"
        :items="clientes"
        :search="buscar"
        sort-by="name"
        class="elevation-1"
      >
        <template v-slot:top>
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
              <v-card-text class="text-subtitle-1"><b>Nome completo:</b> {{ clienteAtual.nome }}
              </v-card-text>
              <v-card-text class="text-subtitle-1"><b>Email:</b> {{ clienteAtual.email }}
              </v-card-text>
              <v-card-text class="text-subtitle-1"><b>CPF:</b> {{ clienteAtual.cpf }}
              </v-card-text>
              <v-card-text class="text-subtitle-1"><b>RG:</b> {{ clienteAtual.rg }}
              </v-card-text>
              <v-card-text class="text-subtitle-1">
                <b>Data de nascimento:</b> {{ clienteAtual.dataNasc }}
              </v-card-text>
              <v-card-text class="text-subtitle-1"><b>Telefone:</b> {{ clienteAtual.telefone }}
              </v-card-text>
              <v-card-title class="text-h6">Dados de entrega:</v-card-title>
              <v-card-text class="text-subtitle-1"><b>CEP:</b> {{ clienteAtual.endereco.cep }}
              </v-card-text>
              <v-card-text class="text-subtitle-1"><b>Cidade:</b> {{ clienteAtual.endereco.cidade }}</v-card-text>
              <v-card-text class="text-subtitle-1"><b>UF:</b> {{ clienteAtual.endereco.uf }}
              </v-card-text>
              <v-card-text class="text-subtitle-1"><b>Endereço:</b> {{ clienteAtual.endereco.rua }}
              </v-card-text>
              <v-card-text class="text-subtitle-1"><b>Número:</b> {{ clienteAtual.endereco.num }}
              </v-card-text>
              <v-card-text class="text-subtitle-1"><b>Bairro:</b> {{ clienteAtual.endereco.bairro }}
              </v-card-text>
            </v-card>
          </v-dialog>
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
    </v-card>

    <!-- Tabela Compras -->
    <Compras
      :comprasCliente="comprasClienteAtual"
      v-else
    />
  </div>
</template>

<script>
import Compras from "../components/Compras.vue";
import ClienteClient from "../ApiClient/ClienteClient.js";

export default {
  components: { Compras },
  name: "Clientes",
  data: () => ({
    buscar: "",
    dialogDetalhes: false,
    mostrarClientes: true,
    subTituloPagina: false,
    headers: [
      {
        text: "Nome",
        align: "start",
        sortable: true,
        value: "nome",
      },
      { text: "Email", value: "usuario.email", sortable: false },
      { text: "CPF", value: "cpf", sortable: false },
      { text: "Telefone", value: "telefone", sortable: false },
      { text: "Detalhes", value: "detalhes", sortable: false },
      { text: "Compras", value: "compras", sortable: false },
    ],
    clientes: [],
    clienteAtual: {
      nome: "",
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
      usuario: {
        email: "",
        senha: "",
        tipo: "Cliente",
        ativo: true,
      },
    },
    comprasClienteAtual: [],
  }),

  methods: {
    async buscarClientes() {
      let resposta = await ClienteClient.buscarTodos();
      this.clientes = resposta.data;
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
    async compraCliente(cliente) {
      this.clienteAtual.nome = cliente.nome;

      let resposta = await ClienteClient.buscarCompras(cliente.cpf);
      this.comprasClienteAtual = resposta.data;

      this.mostrarClientes = false;
      this.subTituloPagina = true;
    },
    fecharJanelaCompras() {
      this.mostrarClientes = true;
      this.subTituloPagina = false;
    },
  },
  mounted() {
    this.buscarClientes();
  },
};
</script>
