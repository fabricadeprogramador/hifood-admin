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

          <!-- <v-btn @click="btnModoVisualizacao()" class="ml-4">
            <v-icon>mdi-eye </v-icon> Modo Visualização
          </v-btn> -->
        </v-col>
      </v-row>

      <!-- FILTROS -->
      <v-row>
        <v-col class="d-flex" cols="12" sm="6" md="2">
          <v-select
            :items="categoriaProdutos"
            item-text="categoria"
            item-value="categoria"
            label="Categoria"
            v-model="filtro"
            filled
            dense
            single-line
          ></v-select>
        </v-col>

        <v-col class="d-flex" cols="12" sm="6" md="2">
          <v-select
            :items="situacao"
            label="Situação"
            v-model="filtro"
            filled
            dense
            single-line
          ></v-select>
        </v-col>

        <v-col class="d-flex" cols="12" sm="6" md="3">
          <v-text-field
            v-model="filtro"
            append-icon="mdi-magnify"
            label="Buscar"
            single-line
            filled
            dense
          ></v-text-field>
        </v-col>
      </v-row>
      <!-- FIM FILTROS -->

      <v-alert
        v-if="msg"
        class="mt-6"
        type="success"
        border="left"
        close-text="Close Alert"
        dark
        dismissible
        >{{ msg }}</v-alert
      >

      <v-row>
        <v-col>
          <template v-if="!visualizarLinha">
            <v-data-table
              :headers="headers"
              :items="produtos"
              :items-per-page="10"
              :search="filtro"
              class="elevation-1"
            >
              <template v-slot:item.actions="{ item }">
                <v-icon small class="mr-2" @click="editItem(item)"
                  >mdi-pencil</v-icon
                >
                <!-- [NÃO UTILIZAR ESTE BOTÃO NA TELA DE PRODUTOS] -->
                <!-- <v-icon small @click="deleteItem(item)">mdi-delete</v-icon>  -->
              </template>
            </v-data-table>
          </template>

          <template v-else> linha </template>
        </v-col>
      </v-row>
    </template>

    <template v-else>
      <produtoAdd
        v-if="exibeComponentProdutoAdd"
        :arrayProdutos="produtos"
        :arrayCategoria="categoriaProdutos"
        @voltarPrincipal="fechaComponenteProdutoAdd"
      />

      <produtoEdit
        v-if="exibeComponentProdutoEdit"
        :objProdutoEdit="produtoEdit"
        :arrayProdutos="produtos"
        :arrayCategoria="categoriaProdutos"
        @voltarPrincipal="fechaComponenteProdutoEdit"
      />
    </template>
    {{ msg }}
  </div>
</template>

<script>
import ProdutoClient from "./../ApiClient/ProdutoClient";
import CategoriaClient from "./../ApiClient/CategoriaClient";

import produtoAdd from "../components/ProdutoAdd.vue";
import produtoEdit from "../components/ProdutoEdit.vue";

import { mapActions } from "vuex";
import { actionTypes, mutationTypes } from "@/constants";

export default {
  components: { produtoAdd, produtoEdit },
  name: "Produtos",

  data() {
    return {
      exibeListaProdutos: true,
      exibeComponentProdutoAdd: false,
      exibeComponentProdutoEdit: false,
      filtro: "",
      msg: "",
      situacao: ["Ativo", "Inativo"],
      produtos: [],
      categoriaProdutos: [],
      produtoEdit: {},
      editedIndex: -1,
      visualizarLinha: false,
      headers: [
        {
          text: "Produto",
          align: "start",
          sortable: false,
          value: "nome",
        },
        { text: "Descrição", value: "descricao" },
        { text: "Valor", value: "valor" },
        { text: "Categoria", value: "categoria.categoria" },
        { text: "Qtd Disponivel", value: "qtdDisponivel" },
        { text: "Situação", value: "situacao" },
        { text: "Ações", value: "actions", sortable: false },
      ],
    };
  },

  mounted() {
    this.buscarTodosProdutos();
    this.buscarTodasCategorias();
  },

  methods: {
    ...mapActions([actionTypes.PRODUTO.BUSCAR_TODOS_PRODUTO]),

    btnAddProduto() {
      this.exibeListaProdutos = false;
      this.exibeComponentProdutoAdd = true;
    },

    btnModoVisualizacao() {},

    fechaComponenteProdutoAdd(mensagem) {
      this.exibeListaProdutos = true;
      this.exibeComponentProdutoAdd = false;
      this.msg = mensagem;

      console.log("Mensagem: " + mensagem);
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

    // Requisições da API --------------------------

    // Buscar todos produtos
    async buscarTodosProdutos() {
      let resposta = await ProdutoClient.buscarTodos();

      if (resposta.status == 200) {
        this.produtos = resposta.data;
        console.log(this.produtos);
      } else {
        this.$store.commit(mutationTypes.ALERTA.EXIBIR_ALERTA, {
          tipo: "error",
          msg: "Erro ao buscar produtos!",
        });
        //alert("Erro ao buscar dados na API!")
      }
    },

    async buscarTodasCategorias() {
      let resposta = await CategoriaClient.buscarTodos();

      if (resposta.status == 200) {
        this.categoriaProdutos = resposta.data;
        //console.log(this.categoriaProdutos);
      } else {
        alert("Erro ao buscar categoria na API!");
      }
    },
  },
};
</script>
