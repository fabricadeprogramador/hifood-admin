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
  import ConvidadoClient from "@/ApiClient/ConvidadoClient"
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
      async buscarConvidados() {
        let resposta = await ConvidadoClient.buscarTodos()

        if (resposta.status == 200) {
          this.convidados = resposta.data
          console.log(resposta.data)
        } else {
          console.log(resposta)
          alert("Erro ao buscar convidados!")
        }
      },

      async inserirNovoConvidado() {
        let novoConvidado = {
          nome: "Guilherme Prado",
          idade: 31,
          sexo: "Masculino"
        }

        let resposta = await ConvidadoClient.inserir(novoConvidado)

        if (resposta.status == 200) {
          this.convidados.push(resposta.data)
        } else {
          alert("Erro ao inserir convidado!")
        }
      }
    }
  }
</script>

<style></style>
