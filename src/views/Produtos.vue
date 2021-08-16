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

          <v-btn @click="btnModoVisualizacao()" class="ml-4">
            <v-icon>mdi-eye </v-icon> Modo Visualização
          </v-btn>
        </v-col>
      </v-row>

      <!-- FILTROS -->
      <v-row>
        <v-col class="d-flex" cols="12" sm="6" md="2">
          <v-select
            :items="categoriaProdutos"
            filled
            label="Categoria"
            dense
          ></v-select>
        </v-col>

        <v-col class="d-flex" cols="12" sm="6" md="2">
          <v-select :items="situacao" filled label="Situação" dense></v-select>
        </v-col>

        <v-col class="d-flex" cols="12" sm="6" md="3">
          <v-text-field
            v-model="buscar"
            append-icon="mdi-magnify"
            label="Buscar"
            single-line
            hide-details
          ></v-text-field>
        </v-col>
      </v-row>
      <!-- FIM FILTROS -->

      <v-row>
        <v-col>
          <template v-if="!visualizarLinha">
            <v-data-table
              :headers="headers"
              :items="produtos"
              :items-per-page="10"
              :search="buscar"
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
      buscar: "",
      situacao: ["Ativo", "Inativo"],
      produtos: [
        {
          nome: "Hot-Dog Simples",
          descricao: "Pão, Salsicha, Batata-palha, Molho Especial e Tomate",
          valor: 12.9,
          categoria: "Lanches",
          qtdDisponivel: 100,
          situacao: "Ativo",
          imagem:
            "https://www.receiteria.com.br/wp-content/uploads/receitas-de-molho-de-cachorro-quente-1.jpg",
        },
        {
          nome: "Hot-Dog Especial",
          descricao:
            "Pão, Salsicha, Presunto, Mussarela, Batata-palha, Molho Especial, Tomate, Orégano",
          valor: 17.95,
          categoria: "Lanches",
          qtdDisponivel: 55,
          situacao: "Ativo",
          imagem:
            "https://www.dicasdemulher.com.br/wp-content/uploads/2018/03/cachorro-quente-3.jpg",
        },
        {
          nome: "Frango ao Creme",
          descricao:
            "Massa feita no forno à lenha, Frango, Creme, Presunto, Mussarela, Molho Especial, Tomate, Orégano",
          valor: 35.8,
          categoria: "Pizzas",
          qtdDisponivel: 105,
          situacao: "Ativo",
          imagem:
            "https://t2.rg.ltmcdn.com/pt/images/4/1/2/img_pizza_de_liquidificador_de_frango_6214_orig.jpg",
        },
        {
          nome: "Moda da Casa",
          descricao:
            "Massa feita no forno à lenha, Creme, Carne Seca, Presunto, Mussarela, Molho Especial, Tomate, Orégano",
          valor: 44.7,
          categoria: "Pizzas",
          qtdDisponivel: 99,
          situacao: "Ativo",
          imagem:
            "https://www.ocladapizza.com.br/wp-content/uploads/2017/02/massa-da-pizza-conhe%C3%A7a-6-ingredientes-e-suas-fun%C3%A7%C3%B5es-blog-pizzaria-o-cla-da-pizza-660x420.jpg",
        },
        {
          nome: "Porção Simples",
          descricao: "Frango, Salada, Tomate, Molho Especial",
          valor: 12.2,
          categoria: "Porções",
          qtdDisponivel: 99,
          situacao: "Ativo",
          imagem:
            "https://img.elo7.com.br/product/original/22565B3/adesivo-parede-prato-comida-frango-salada-restaurante-lindo-adesivo-parede.jpg",
        },
        {
          nome: "Prato Completo",
          descricao: "Arroz, Feijão, Salada, Tomate e Bife Aceboladol",
          valor: 13.4,
          categoria: "Pratos",
          qtdDisponivel: 100,
          situacao: "Ativo",
          imagem:
            "https://www.istoedinheiro.com.br/wp-content/uploads/sites/17/2019/08/din1135-sustenta5.jpg",
        },
      ],
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
        { text: "Categoria", value: "categoria" },
        { text: "Qtd Disponivel", value: "qtdDisponivel" },
        { text: "Situação", value: "situacao" },
        { text: "Ações", value: "actions", sortable: false },
      ],
    };
  },

  methods: {
    btnAddProduto() {
      this.exibeListaProdutos = false;
      this.exibeComponentProdutoAdd = true;
    },

    btnModoVisualizacao() {},

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

    // [NÃO ATIVAR ESTA FUNÇÃO] Não poderá excluir o produto
    // deleteItem(item) {
    //   this.editedIndex = this.produtos.indexOf(item);
    //   if(this.editedIndex > -1) {
    //      this.produtos.splice(this.editedIndex, 1);
    //   }
    // },
  },
};
</script>
