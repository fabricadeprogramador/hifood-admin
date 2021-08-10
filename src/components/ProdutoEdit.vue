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
              <v-form>
                <v-text-field
                  label="Nome do produto"
                  v-model="produtoEdit.nome"
                  required
                ></v-text-field>

                <v-text-field
                  label="Descrição"
                  v-model="produtoEdit.descricao"
                  required
                ></v-text-field>

                <v-row>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      label="Valor"
                      v-model="produtoEdit.valor"
                      required
                    ></v-text-field>
                  </v-col>

                  <v-col cols="12" sm="6" md="4">
                    <v-select
                      label="categoria"
                      :items="arrayCategoria"
                      v-model="produtoEdit.categoria"
                      required
                    ></v-select>
                  </v-col>

                  <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      label="Quantidade Disponível"
                      v-model="produtoEdit.qtdDisponivel"
                      required
                    ></v-text-field>
                  </v-col>
                </v-row>

                <v-btn color="#232B45" dark class="mr-4" @click="atualizar()">
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

            <v-card-subtitle>Adicione uma nova foto</v-card-subtitle>
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
export default {
  props: ["arrayProdutos", "objProdutoEdit", "arrayCategoria"],

  data: () => ({
    produtoEdit: {},
    editedIndex: -1,
    msg: false
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

    atualizar() {
      if(this.editedIndex > -1) {
        Object.assign(this.arrayProdutos[this.editedIndex], this.produtoEdit);
        this.msg = true;
      }
    },

    fechaMsg() {
      this.msg = false;
    }
  },
};
</script>
