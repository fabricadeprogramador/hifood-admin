<template>
  <v-app>
    <v-app-bar app color="#FF8900" dark clipped-left>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-spacer></v-spacer>
      <v-img :src="logo" max-width="50"></v-img>
      <h1>HiFood</h1>
      <v-spacer></v-spacer>
      <v-btn text small>
        Logout
        <v-icon>mdi-logout-variant</v-icon>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer color="#0A1330" width="20%" app clipped dark>
      <v-sheet
        color="rgba(255, 255, 255, 0.1)"
        height="150px"
        align="center"
        justify="center"
        class="py-5"
      >
        <v-avatar size="80">
          <v-img :src="user"></v-img>
        </v-avatar>
        <h2>Jão da Silva</h2>
      </v-sheet>

      <v-divider></v-divider>

      <v-list>
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
    logo: require("./assets/fast-food.png"),
    user: require("./assets/user.png"),
    items: [
      { icone: "mdi-home", titulo: "Home", path: "/" },
      { icone: "mdi-account-group", titulo: "Clientes", path: "/clientes" },
      { icone: "mdi-point-of-sale", titulo: "Vendas", path: "/vendas" },
      { icone: "mdi-food", titulo: "Produtos", path: "/produtos" },
      { icone: "mdi-account-multiple-check", titulo: "Usuários", path: "/usuarios" },
      { icone: "mdi-chart-line", titulo: "Relatórios", path: "/relatorios" },
    ],
  }),
};
</script>
