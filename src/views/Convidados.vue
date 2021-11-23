<template>
  <div>
    <v-btn @click="inserirNovoConvidado">Inserir Novo Convidado</v-btn>
    <v-data-table
      :headers="cabecalho"
      :items="convidados"
      :items-per-page="5"
      class="elevation-1"
    ></v-data-table>
  </div>
</template>

<script>
  import { mapActions } from "vuex"
  import { actionTypes, mutationTypes } from "@/constants"

  export default {
    data() {
      return {
        convidados: [],
        cabecalho: [
          { text: "ID", value: "id" },
          { text: "Nome", value: "nome" },
          { text: "Idade", value: "idade" },
          { text: "Sexo", value: "sexo" }
        ]
      }
    },

    mounted() {
      this.buscarConvidados()
    },

    methods: {
      ...mapActions([actionTypes.CONVIDADO.BUSCAR_TODOS_CONVIDADO]),

      async buscarConvidados() {
        try {
          let resposta = await this.buscarTodosConvidados()

          if (resposta.status == 200) {
            this.convidados = resposta.data
          } else {
            this.$store.commit(mutationTypes.ALERTA.EXIBIR_ALERTA, {
              tipo: "error",
              msg: "Erro ao buscar convidados!"
            })
          }
        } catch (error) {
          this.$store.commit(mutationTypes.ALERTA.EXIBIR_ALERTA, {
            tipo: "error",
            msg: "Erro ao buscar convidados!"
          })
        }
      },

      async inserirNovoConvidado() {
        // let novoConvidado = {
        //   nome: "Guilherme Prado",
        //   idade: 31,
        //   sexo: "Masculino"
        // }
        // let resposta = await ConvidadoClient.inserir(novoConvidado)
        // if (resposta.status == 200) {
        //   this.convidados.push(resposta.data)
        // } else {
        //   alert("Erro ao inserir convidado!")
        // }
      }
    }
  }
</script>

<style></style>
