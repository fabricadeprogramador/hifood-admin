<template>
  <div>
    <v-data-table
      :headers="headers"
      :items="usuarios"
      sort-by="name"
      class="elevation-8"
    >
      <template v-slot:top>
        <v-toolbar flat>
          <v-toolbar-title>Cadastro de usuários</v-toolbar-title>
          <v-divider class="mx-4" inset vertical></v-divider>
          <v-spacer></v-spacer>
              <v-btn color="primary" dark class="mb-2" @click="novoUsuario">
                Novo usuário
              </v-btn>
          <v-dialog v-model="dialog" max-width="500px">
         
        
            <v-card>
              <v-form ref="form" v-model="valid" lazy-validation>
                <v-card-title>
                  <span class="text-h5">{{ formTitle }}</span>
                </v-card-title>

                <v-card-text>
                  <v-container>
                    <v-row>
                      <v-col cols="12" md="6">
                        <v-text-field
                          :rules="[rules.required, rules.email]"
                          v-model="editedItem.email"
                          label="Email"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" md="6">
                        <v-text-field
                          v-model="editedItem.tipo"
                          label="Tipo"
                          :readonly="isReadOnly"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" md="6">
                        <v-text-field
                          v-model="editedItem.senha"
                          label="Senha"
                          :append-icon="
                            senhavisivel ? 'mdi-eye' : 'mdi-eye-off'
                          "
                          :rules="[rules.required, rules.min, rules.counter]"
                          :type="senhavisivel ? 'text' : 'password'"
                          name="senha"
                          @click:append="senhavisivel = !senhavisivel"
                        >
                        </v-text-field>
                      </v-col>

                      <v-col cols="12" md="6">
                        <v-checkbox
                          v-model="editedItem.ativo"
                          :label="editedItem.ativo ? 'Ativo' : 'Inativo'"
                        ></v-checkbox>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-card-text>

                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="blue darken-1" text @click="close">
                    Cancelar
                  </v-btn>
                  <v-btn color="blue darken-1" text @click="save" :disabled="!valid">
                    Salvar
                  </v-btn>
                </v-card-actions>
              </v-form>
            </v-card>
          </v-dialog>
        </v-toolbar>
      </template>
      <template v-slot:item.actions="{ item }">
        <v-icon small class="mr-2" @click="editItem(item)"> mdi-pencil </v-icon>
      </template>

      <template v-slot:item.status="{ item }">
        <v-checkbox
          on-icon="mdi-account-check-outline"
          off-icon="mdi-account-off-outline"
          v-model="item.ativo"
        ></v-checkbox>
      </template>
    </v-data-table>
    <v-alert
      v-if="msg"
      class="mt-6"
      type="success"
      border="left"
      close-text="Close Alert"
      dark
      dismissible
      @click="fechaMsg()"
      >Usuário cadastrado com sucesso.</v-alert
    >
  </div>
</template>

<script>
export default {
  data: () => ({
    isReadOnly: true,
    //Validações do cadastro de usuários
    valid: true,
    rules: {
      required: (value) => !!value || "Obrigatório.",
      min: (v) => v.length >= 8 || "No mínimo 8 caracteres",
      counter: (value) => value.length <= 20 || "Máximo de 20 caracteres",
      email: (value) => {
        const pattern =
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return pattern.test(value) || "Email inválido.";
      },
    },
    //Mostra/oculta a senha no cadastro do usuario
    senhavisivel: false,

    //Mostra/oculta mensagem de sucesso no cadastro de usuários
    msg: false,
    dialog: false,
    dialogDelete: false,
    headers: [
      { text: "E-mail", align: "start", sortable: false, value: "email" },
      { text: "Tipo", value: "tipo" },
      { text: "Editar", value: "actions", sortable: false },
      { text: "Status", value: "status", sortable: false },
    ],
    usuarios: [],
    editedIndex: -1,
    editedItem: {
      email: "",
      senha: "",
      tipo: "",
      ativo: true,
    },
    defaultItem: {
      email: "",
      senha: "",
      tipo: "Admin",
      ativo: true,
    },
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "Novo usuário" : "Editar usuário";
    },
  },

  watch: {
    dialog(val) {
      val || this.close();
    },
    dialogDelete(val) {
      val || this.closeDelete();
    },
  },

  created() {
    this.initialize();
  },

  methods: {
    initialize() {
      this.usuarios = [
        {
          email: "mariajs@gmail.com",
          senha: "123dadsff",
          tipo: "Admin",
          ativo: true,
        },
        {
          email: "frozen@gmail.com",
          senha: "123trtrhnf",
          tipo: "Admin",
          ativo: true,
        },
        {
          email: "joaquina@hotmail.com",
          senha: "1345trhnf",
          tipo: "Admin",
          ativo: true,
        },
        {
          email: "jozefah@zipmail.com",
          senha: "1345trhnf",
          tipo: "Admin",
          ativo: true,
        },
      ];
    },

    editItem(item) {
      this.editedIndex = this.usuarios.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    deleteItem(item) {
      this.editedIndex = this.usuarios.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialogDelete = true;
    },

    deleteItemConfirm() {
      this.usuarios.splice(this.editedIndex, 1);
      this.closeDelete();
    },

    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    closeDelete() {
      this.dialogDelete = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    save() {
      if (this.editedIndex > -1) {
        Object.assign(this.usuarios[this.editedIndex], this.editedItem);
      } else {
        this.usuarios.push(this.editedItem);
      }
      this.close();
      this.msg = true;
    },
    fechaMsg() {
      this.msg = false;
    },
    novoUsuario(){
      this.editedItem.tipo = "Admin"
      this.dialog = true;
    }
  },
};
</script>

<style>
</style>