<template>
  <div>
    <template>
      <v-row>
        <v-col>
          <h1>Produtos <v-icon>mdi-chevron-right</v-icon> editar <v-icon>mdi-chevron-right</v-icon> {{objProdutoEdit.nome}}</h1>
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
                  v-model="objProdutoEdit.nome"
                  required
                ></v-text-field>

                <v-text-field
                  label="Descrição"
                  v-model="objProdutoEdit.descricao"
                  required
                ></v-text-field>

                <v-row>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      label="Valor"
                      v-model="objProdutoEdit.valor"
                      required
                    ></v-text-field>
                  </v-col>

                  <v-col cols="12" sm="6" md="4">
                    <v-select
                      label="categoria"
                      :items="arrayCategoria"
                      v-model="objProdutoEdit.categoria"
                      required
                    ></v-select>
                  </v-col>

                  <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      label="Quantidade Disponível"
                      v-model="objProdutoEdit.qtdDisponivel"
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
            <v-img
              src="https://lh3.googleusercontent.com/proxy/lObrxfTa9Pq3b4kCUqHTsooUIvB89XeMGwbZPUbuJpqBxuYjcYl2ON7RgW3KN6rX9AcHxeSSXqLVIwmaPwKJNRTwGS7bF4PSKztgiNVILV73Xeo_mYo3QPvnekfKPlbfpFl3p-TNNbX3B25XsMezKnZ8Ob8PluqIxdkArhbx1BUtmoROIXHaNYetQSF0k_DjnCFvsCug1z7B"
              height="190px"
            ></v-img>

            <v-card-title>Enviar imagem</v-card-title>

            <v-card-subtitle>Adicione uma nova foto</v-card-subtitle>
          </v-card>
        </v-col>
      </v-row>

      <!-- {{objProdutoEdit}} -->
    </template>
  </div>
</template>

<script>
export default {
  props: ["objProdutoEdit", "arrayCategoria"],

  data: () => ({
    produtoAtual: {},
  }),

  methods: {
    voltar() {
      this.$emit("voltarPrincipal");
    },

    atualizar() {}
  },
};
</script>
