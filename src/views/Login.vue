<template>
  <v-card class="mx-auto" width="400">
    <v-toolbar color="indigo" dark>
      <v-toolbar-title>Login - HiFood</v-toolbar-title>
    </v-toolbar>

    <v-container fluid>
      <v-row justify-content="center" align-content="center">
        <v-col style="text-align: center">
          <v-img :src="logo" max-width="100" class="mx-auto" />
          <h3>HiFood Admin</h3>
        </v-col>
      </v-row>

      <v-form ref="form" v-model="valid" lazy-validation>
        <v-text-field
          v-model="usuario.email"
          :rules="emailRules"
          label="E-mail"
          required
        ></v-text-field>

        <v-text-field
          v-model="usuario.senha"
          :rules="senhaRules"
          label="Senha"
          type="password"
          required
        ></v-text-field>

        <div style="text-align: center" class="ma-3">
          <v-btn :disabled="!valid" color="success" class="mr-4" @click="login">
            Login
          </v-btn>

          <v-btn color="error" class="mr-4" @click="reset">
            Cancelar
          </v-btn>
        </div>
      </v-form>
    </v-container>
  </v-card>
</template>

<script>
  import { mapActions } from "vuex"
  import { mutationTypes, actionTypes } from "@/constants"

  export default {
    data: () => ({
      logo: require("./../assets/img/fast-food.png"),
      valid: true,
      usuario: {
        email: "",
        senha: ""
      },
      emailRules: [
        (v) => !!v || "E-mail é obrigatótio",
        (v) => /.+@.+\..+/.test(v) || "E-mail inválido"
      ],
      senhaRules: [
        (value) => !!value || "Obrigatório.",
        (v) => v.length >= 3 || "No mínimo 3 caracteres",
        (value) => value.length <= 20 || "Máximo de 20 caracteres"
      ]
    }),

    methods: {
      ...mapActions([actionTypes.COMUM.EFETUAR_LOGIN]),

      async login() {
        try {
          let response = await this.efetuarLogin(this.usuario)
          if (response.status == 200) {
            this.$store.commit(
              mutationTypes.COMUM.SET_USUARIO_LOGADO,
              response.data
            )

            this.$router.push({ name: "Home" })
          }
        } catch (error) {
          this.$store.commit(mutationTypes.ALERTA.EXIBIR_ALERTA, {
            tipo: "error",
            msg: "Erro ao efetuar o login"
          })
        }
      },
      validate() {
        this.$refs.form.validate()
      },
      reset() {
        this.$refs.form.reset()
      },
      resetValidation() {
        this.$refs.form.resetValidation()
      }
    }
  }
</script>

<style></style>
