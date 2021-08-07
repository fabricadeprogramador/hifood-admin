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

      <v-card class="mt-6">
        <v-card-text>
          <v-form>
            <v-text-field label="Nome do produto" required></v-text-field>

            <v-text-field label="Descrição" required></v-text-field>

            <v-row>
              <v-col cols="12" sm="6" md="4">
                <v-text-field label="Valor" required></v-text-field>
              </v-col>

              <v-col cols="12" sm="6" md="4">
                <v-select label="categoria" required></v-select>
              </v-col>

              <v-col cols="12" sm="6" md="4">
                <v-text-field
                  label="Quantidade Disponível"
                  required
                ></v-text-field>
              </v-col>
            </v-row>

            <v-btn color="#232B45" dark class="mr-4" @click="validate">
              Adicionar
            </v-btn>
          </v-form>
        </v-card-text>
      </v-card>
    </template>
  </div>
</template>

<script>
export default {
  name: "ProdutoAdd",

  methods: {
    voltar() {
      this.$emit("voltarPrincipal");
    },
  },
};
</script>
