<template>
  <div>
    <template>
      <v-row>
        <v-col>
          <h1>
            Produtos <v-icon>mdi-chevron-right</v-icon> editar
            <v-icon>mdi-chevron-right</v-icon> {{ objProdutoEdit.nome }}
          </h1>
          <p>Aqui você pode alterar as informações do seu produto</p>
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          <v-btn @click="voltar()"
            ><v-icon>mdi-chevron-left</v-icon> Voltar</v-btn
          >
        </v-col>
      </v-row>

      <v-row>
        <v-col sm="12" md="9">
          <v-card>
            <v-card-text>
              <v-form ref="form" v-model="valid">
                <v-text-field
                  label="Nome do produto"
                  v-model="produtoEdit.nome"
                  :rules="validaNomeProduto"
                  required
                ></v-text-field>

                <v-text-field
                  label="Descrição"
                  v-model="produtoEdit.descricao"
                  :rules="validaDescricaoProduto"
                  required
                ></v-text-field>

                <v-row>
                  <v-col cols="12" sm="6" md="3">
                    <v-text-field
                      label="Valor"
                      v-model="produtoEdit.valor"
                      :rules="validaPrecoProduto"
                      required
                    ></v-text-field>
                  </v-col>

                  <v-col cols="12" sm="6" md="3">
                    <v-select
                      label="Categoria"
                      :items="arrayCategoria"
                      item-text="categoria"
                      item-value="categoria"
                      v-model="produtoEdit.categoria"
                      :rules="validaCategoriaProduto"
                      required
                    ></v-select>
                  </v-col>

                  <v-col cols="12" sm="6" md="3">
                    <v-text-field
                      label="Quantidade Disponível"
                      v-model="produtoEdit.qtdDisponivel"
                      :rules="validaQtdProduto"
                      required
                    ></v-text-field>
                  </v-col>

                  <v-col cols="12" sm="12" md="3">
                    <v-select
                      label="Situação"
                      :items="situacao"
                      v-model="produtoEdit.situacao"
                      :rules="validaSituacaoProduto"
                      required
                    ></v-select>
                  </v-col>
                </v-row>

                <v-btn color="#232B45" dark class="mr-4" @click="atualizar()" :disabled="!valid">
                  Atualizar
                </v-btn>
              </v-form>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col>
          <v-card class="mx-auto" max-width="344">
            <v-img v-bind:src="produtoEdit.imagem" height="190px"></v-img>

            <v-card-title>Enviar imagem</v-card-title>

            <v-card-subtitle>
              <v-file-input
                  v-model="produtoEdit.imagem"
                  label="Adicione uma nova foto"
                  placeholder="Anexar uma foto"
                >
                </v-file-input>
            </v-card-subtitle>   
          </v-card>
        </v-col>
      </v-row>

      <v-alert
        v-if="msg"
        class="mt-6"
        type="success"
        border="left"
        close-text="Close Alert"
        dark
        dismissible
        @click="fechaMsg()"
        >Produto alterado com sucesso.</v-alert
      >

      <!-- {{arrayProdutos}} -->
      <!-- {{objProdutoEdit}} -->
      <!-- {{editedIndex}} -->
    </template>
  </div>
</template>

<script>
import ProdutoClient from "./../ApiClient/ProdutoClient";

export default {
  props: ["arrayProdutos", "objProdutoEdit", "arrayCategoria"],

  data: () => ({
    produtoEdit: {},
    editedIndex: -1,
    msg: false,
    situacao: ["Ativo", "Inativo"],

    // validação do formulário
    valid: true,
    validaNomeProduto: [(v) => !!v || "Informe o nome do produto"],
    validaDescricaoProduto: [(v) => !!v || "Descreva os itens do seu produto"],
    validaPrecoProduto: [(v) => !!v || "Informe o preço do produto"],
    validaCategoriaProduto: [(v) => !!v || "Selecione uma categoria para o produto"],
    validaQtdProduto: [(v) => !!v || "Informe a quantidade disponível em estoque"],
    validaSituacaoProduto: [(v) => !!v || "Selecione um status"]
  }),

  created() {
    this.initialize();
  },

  methods: {
    initialize() {
      this.editedIndex = this.arrayProdutos.indexOf(this.objProdutoEdit) //pego o indice do array que contém o objeto a ser editado
      this.produtoEdit = Object.assign({}, this.objProdutoEdit); //faço a copia do objeto original
    },

    voltar() {
      this.$emit("voltarPrincipal");
    },

    //VERSÃO COM API --------------
    async atualizar() {
      if(this.editedIndex > -1) {
        this.produtoEdit.imagem = "https://conteudo.imguol.com.br/c/entretenimento/9d/2020/05/26/hamburguer-recheado-na-churrasqueira-1590524861807_v2_4x3.jpg";

        let resposta = await ProdutoClient.editar(this.produtoEdit);
        console.log(resposta.status);
        if(resposta.status == 200) {
          this.arrayProdutos[this.editedIndex] = this.produtoEdit;
          this.msg = true;
        } else {
          alert("Erro ao editar produto!");
        }
      }
    },

    //VERSÃO SEM API --------------
    // atualizar() {
    //   if(this.editedIndex > -1) {
    //     Object.assign(this.arrayProdutos[this.editedIndex], this.produtoEdit);
    //     this.msg = true;
    //   }
    // },

    fechaMsg() {
      this.msg = false;
    }
  },
};
</script>
