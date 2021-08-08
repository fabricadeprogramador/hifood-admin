<template>
  <div>
    <template>
      <v-row>
        <v-col>
          <h1>Produtos <v-icon>mdi-chevron-right</v-icon> adicionar</h1>
          <p>Aqui adicionamos seus produtos</p>
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
        <v-col sm="12" md="12">
          <v-card>
            <v-card-text>
              <v-form>
                <v-text-field
                  label="Nome do produto"
                  v-model="produtoAtual.nome"
                  required
                ></v-text-field>

                <v-text-field
                  label="Descrição"
                  v-model="produtoAtual.descricao"
                  required
                ></v-text-field>

                <v-row>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      label="Valor"
                      v-model="produtoAtual.valor"
                      required
                    ></v-text-field>
                  </v-col>

                  <v-col cols="12" sm="6" md="4">
                    <v-select
                      label="categoria"
                      :items="arrayCategoria"
                      v-model="produtoAtual.categoria"
                      required
                    ></v-select>
                  </v-col>

                  <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      label="Quantidade Disponível"
                      v-model="produtoAtual.qtdDisponivel"
                      required
                    ></v-text-field>
                  </v-col>
                </v-row>

                <v-btn color="#232B45" dark class="mr-4" @click="salvar()">
                  Adicionar
                </v-btn>
              </v-form>
            </v-card-text>
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
        >Produto adicionado com sucesso.</v-alert
      >

      <!-- {{ arrayProdutos }} -->
      <!-- {{ arrayCategoria }} -->
    </template>
  </div>
</template>

<script>
export default {
  props: ["arrayProdutos", "arrayCategoria"],

  data: () => ({
    produtoAtual: {},
    msg: false
  }),

  methods: {
    voltar() {
      this.$emit("voltarPrincipal");
    },

    salvar() {
      if (this.validar(this.produtoAtual)) {
        this.arrayProdutos.push(this.produtoAtual);
        this.produtoAtual = {};
        this.msg = true;
      }
    },

    validar(p) {
      for (let i = 0; i < this.arrayProdutos.length; i++) {
        if (this.arrayProdutos[i].nome == p.nome) {
          return false;
        }
      }

      return true;
    },

    fechaMsg() {
      this.msg = false;
    },
  },
};
</script>
