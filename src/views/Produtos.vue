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
          <v-btn @click="btnAddProduto()">
            <v-icon>mdi-plus</v-icon> Adicionar
          </v-btn>
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
      <produtoAdd
        v-if="exibeComponentProdutoAdd"
        :arrayProdutos="produtos"
        @voltarPrincipal="fechaComponenteProdutoAdd"
      />

      <produtoEdit 
        v-if="exibeComponentProdutoEdit"
      />
    </template>
  </div>
</template>

<script>
import produtoAdd from "../components/ProdutoAdd.vue";
import produtoEdit from "../components/ProdutoEdit.vue";

export default {
  components: { produtoAdd, produtoEdit },
  name: "Produtos",

  data() {
    return {
      exibeListaProdutos: true,
      exibeComponentProdutoAdd: false,
      exibeComponentProdutoEdit: false,
      produtos: [],

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
    };
  },

  methods: {
    btnAddProduto() {
      this.exibeListaProdutos = false;
      this.exibeComponentProdutoAdd = true;
    },

    fechaComponenteProdutoAdd() {
      this.exibeListaProdutos = true;
      this.exibeComponentProdutoAdd = false;
    },

    editItem(item) {
      this.exibeListaProdutos = false;
      this.exibeComponentProdutoEdit = true;

      item.nome
    },
  },
};
</script>
