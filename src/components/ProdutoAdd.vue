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
              <v-form ref="form" v-model="valid">
                <v-text-field
                  label="Nome do produto"
                  v-model="produtoAtual.nome"
                  :rules="validaNomeProduto"
                  required
                ></v-text-field>

                <v-text-field
                  label="Descrição"
                  v-model="produtoAtual.descricao"
                  :rules="validaDescricaoProduto"
                  required
                ></v-text-field>

                <v-row>
                  <v-col cols="12" sm="12" md="3">
                    <v-text-field
                      label="Valor"
                      v-model="produtoAtual.valor"
                      :rules="validaPrecoProduto"
                      required
                    ></v-text-field>
                  </v-col>

                  <v-col cols="12" sm="12" md="3">
                    <v-select
                      label="Categoria"
                      :items="arrayCategoria"
                      v-model="produtoAtual.categoria"
                      :rules="validaCategoriaProduto"
                      required
                    ></v-select>
                  </v-col>

                  <v-col cols="12" sm="12" md="3">
                    <v-text-field
                      label="Quantidade Disponível"
                      v-model="produtoAtual.qtdDisponivel"
                      :rules="validaQtdProduto"
                      required
                    ></v-text-field>
                  </v-col>

                  <v-col cols="12" sm="12" md="3">
                    <v-select
                      label="Situação"
                      :items="situacao"
                      v-model="produtoAtual.situacao"
                      :rules="validaSituacaoProduto"
                      required
                    ></v-select>
                  </v-col>

                  <v-col cols="12" md="12">
                    <v-file-input
                      v-model="produtoAtual.imagem"
                      label="Foto"
                      placeholder="Anexar uma foto"
                      outlined
                    >
                    </v-file-input>
                  </v-col>
                </v-row>

                <v-btn
                  color="#232B45"
                  dark
                  class="mr-4"
                  @click="salvar()"
                  :disabled="!valid"
                >
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

      {{valid}}
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

  methods: {
    voltar() {
      this.$emit("voltarPrincipal");
    },

    salvar() {
      if (this.validar(this.produtoAtual)) {
        this.produtoAtual.imagem =
          "https://conteudo.imguol.com.br/c/entretenimento/9d/2020/05/26/hamburguer-recheado-na-churrasqueira-1590524861807_v2_4x3.jpg";
        this.arrayProdutos.push(this.produtoAtual);
        this.produtoAtual = {};
        this.msg = true;
      }
    },

    validar(p) {
      //this.$refs.form.validate();
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
