<template>
  <div>
    <template v-if="exibeListaProdutos">
      <v-row>
        <v-col>
          <h1>Produtos</h1>
          <p>Aqui você pode adicionar, editar ou consultar seus produtos</p>
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          <v-card class="pa-2" outlined tile> Filtros </v-card>
        </v-col>
        <v-col>
          <v-btn @click="addProduto()"><v-icon>mdi-plus</v-icon> Adicionar</v-btn>
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          <v-data-table
            :headers="headers"
            :items="produtos"
            :items-per-page="5"
            class="elevation-1"
          >
            <template v-slot:item.actions="{ item }">
              <v-icon small class="mr-2" @click="editItem(item)"
                >mdi-pencil</v-icon
              >
              <v-icon small @click="deleteItem(item)">mdi-delete</v-icon>
            </template>
          </v-data-table>
        </v-col>
      </v-row>
    </template>

    <template v-else>
      <produtoAdd :arrayProdutos="produtos" @voltarPrincipal="fechaComponenteProdutoAdd" />
    </template>
  </div>
</template>

<script>
import produtoAdd from "../components/ProdutoAdd.vue";

export default {
  components: { produtoAdd },
  name: "Produtos",

  data() {
    return {
      headers: [
        {
          text: "Produto",
          align: "start",
          sortable: false,
          value: "nome",
        },
        { text: "Descrição", value: "descricao" },
        { text: "Valor", value: "valor" },
        { text: "Categoria", value: "categoria" },
        { text: "Qtd Disponivel", value: "qtdDisponivel" },
        { text: "Ações", value: "actions", sortable: false },
      ],

      produtos: [
        // {
        //   nome: "Hot-Dog Simplão",
        //   descricao: "Pão, Hamburguer, Queijo, Batata Palha",
        //   valor: 15.95,
        //   categoria: "Lanche",
        //   qtdDisponivel: 4,
        // },
      ],

      exibeListaProdutos: true
    };
  },

  methods: {
    addProduto() {
      this.exibeListaProdutos = false;
    },

    fechaComponenteProdutoAdd() {
        this.exibeListaProdutos = true;
    },

    editItem(item) {
      console.log(item)
    }
  },
};
</script>
