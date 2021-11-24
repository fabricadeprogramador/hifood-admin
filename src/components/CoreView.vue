<template>
  <v-app>
    <v-app-bar app color="#FE7028" dark clipped-left height="70px">
      <v-app-bar-nav-icon @click="ocultarMenu"></v-app-bar-nav-icon>
      <v-img :src="logo" max-width="60"></v-img>
      <h1 style="font-size: 35px">HiFood</h1>
      <v-spacer></v-spacer>
      <v-btn text>
        Logout
        <v-icon>mdi-logout-variant</v-icon>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer
      color="#2F302B"
      width="300px"
      app
      clipped
      dark
      v-model="menuAparente"
    >
      <v-list class="mt-10">
        <v-list-item v-for="(item, i) in items" :key="i" link :to="item.path">
          <v-list-item-icon>
            <v-icon>{{ item.icone }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.titulo }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <v-container class="pa-md-9 mx-lg-auto">
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
  export default {
    name: "App",
    data: () => ({
      logo: require("./../assets/img/fast-food.png"),
      user: require("./../assets/img/user.png"),
      menuAparente: true,
      items: [
        { icone: "mdi-home", titulo: "Home", path: "/" },
        { icone: "mdi-account-group", titulo: "Clientes", path: "/clientes" },
        { icone: "mdi-point-of-sale", titulo: "Vendas", path: "/vendas" },
        { icone: "mdi-food", titulo: "Produtos", path: "/produtos" },
        {
          icone: "mdi-account-multiple-check",
          titulo: "Usuários",
          path: "/usuarios"
        },
        {
          icone: "mdi-account-multiple-check",
          titulo: "Convidados",
          path: "/convidados"
        }
      ]
    }),
    methods: {
      ocultarMenu() {
        if (this.menuAparente == true) {
          this.menuAparente = false
        } else {
          this.menuAparente = true
        }
      }
    }
  }
</script>
