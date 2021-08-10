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
        :arrayCategoria="categoriaProdutos"
        @voltarPrincipal="fechaComponenteProdutoAdd()"
      />

      <produtoEdit
        v-if="exibeComponentProdutoEdit"
        :objProdutoEdit="produtoEdit"
        :arrayProdutos="produtos"
        :arrayCategoria="categoriaProdutos"
        @voltarPrincipal="fechaComponenteProdutoEdit()"
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
      produtoEdit: {},
      categoriaProdutos: [
        "Lanches",
        "Bebidas",
        "Pizzas",
        "Pratos",
        "Sobremesas",
        "Porções",
      ],

      editedIndex: -1,
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

    fechaComponenteProdutoEdit() {
      this.exibeListaProdutos = true;
      this.exibeComponentProdutoEdit = false;
    },

    editItem(item) {
      this.exibeListaProdutos = false;
      this.exibeComponentProdutoEdit = true;

      this.produtoEdit = item;
    },

    deleteItem(item) {
      this.editedIndex = this.produtos.indexOf(item);
      if(this.editedIndex > -1) {
         this.produtos.splice(this.editedIndex, 1);
      }
    },
  },
};
</script>
