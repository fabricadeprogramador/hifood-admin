<template>
  <div>
    <v-row class="pa-3">
      <v-col cols="12" sm="6">
        <v-alert
          v-model="alerta.mostrar"
          elevation="3"
          :type="alerta.tipo"
          class="alerta"
        >
          {{ alerta.msg }}

          <template v-slot:close>
            <v-btn icon @click="fechar">
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </template>
        </v-alert>
      </v-col>
    </v-row>
  </div>
</template>

<script>
  import { mapState } from "vuex"
  export default {
    computed: {
      ...mapState(["alerta"])
    },
    methods: {
      fechar() {
        this.$store.commit("fecharAlerta")
      }
    }
  }
</script>

<style scoped>
  .alerta {
    position: absolute;
    right: 10px;
    top: 10px;
  }
</style>
