<template>
  <div>
    <!-- Divisão superior da tela -->
    <v-row class="pa-5" align="center" justify="center">
      <v-col cols="3"
        ><v-card elevation="2" color="#84D2F4" class="text-center pa-3" dark>
          <v-icon size="80px" class="my-2">mdi-account-group</v-icon>
          <h1>{{ qtdClientes }}</h1>
          <h3>Clientes cadastrados</h3>
        </v-card></v-col
      >
      <v-col cols="3"
        ><v-card elevation="2" color="#039BE5" class="text-center pa-3" dark>
          <v-icon size="80px" class="my-2">mdi-cart-outline</v-icon>
          <h1>{{ qtdVendas }}</h1>
          <h3>Vendas concluídas</h3>
        </v-card>
      </v-col>
      <v-col cols="3"
        ><v-card elevation="2" color="#0277BD" class="text-center pa-3" dark>
          <v-icon size="80px" class="my-2">mdi-cart-outline</v-icon>
          <h1>{{ qtdVendas }}</h1>
          <h3>Vendas concluídas</h3>
        </v-card>
      </v-col>
      <v-col cols="3"
        ><v-card elevation="2" color="#01579B" class="text-center pa-3" dark>
          <v-icon size="80px" class="my-2">mdi-cart-outline</v-icon>
          <h1>{{ qtdVendas }}</h1>
          <h3>Vendas concluídas</h3>
        </v-card>
      </v-col>
    </v-row>
    <!-- Divisão inferior da tela -->
    <v-row class="pa-5" align="center" justify="center">
      <!-- Coluna 1 -->
      <v-col cols="4">
        <v-card
          elevation="2"
          class="text-center"
          color="#FFD180"
          width="100%"
          dark
          ><v-card-text>
            <v-sheet color="#FFFFFF">
              <v-sparkline
                :value="value"
                color="rgba(0, 0, 0, .7)"
                height="150"
                padding="24"
                smooth
              >
                <template v-slot:label="item"> R${{ item.value }} </template>
              </v-sparkline>
            </v-sheet>
          </v-card-text>

          <v-card-text>
            <div class="text-h4 font-weight-thin">Vendas no último mês</div>
          </v-card-text>
        </v-card>
      </v-col>
      <!-- Coluna 2 -->
      <v-col cols="4">
        <v-card
          elevation="2"
          class="text-center"
          color="#FFAB40"
          width="100%"
          dark
          ><v-card-text>
            <v-sheet color="#FFFFFF">
              <v-sparkline
                :value="value"
                color="rgba(0, 0, 0, .7)"
                height="150"
                padding="24"
                smooth
              >
                <template v-slot:label="item"> R${{ item.value }} </template>
              </v-sparkline>
            </v-sheet>
          </v-card-text>

          <v-card-text>
            <div class="text-h4 font-weight-thin">Vendas no último mês</div>
          </v-card-text>
        </v-card>
      </v-col>
      <!-- Coluna 3 -->
      <v-col cols="4">
        <v-card
          elevation="2"
          class="text-center"
          color="#FF6600"
          width="100%"
          dark
          ><v-card-text>
            <v-sheet color="#FFFFFF">
              <v-sparkline
                :value="value"
                color="rgba(0, 0, 0, .7)"
                height="150"
                padding="24"
                smooth
              >
                <template v-slot:label="item"> R${{ item.value }} </template>
              </v-sparkline>
            </v-sheet>
          </v-card-text>

          <v-card-text>
            <div class="text-h4 font-weight-thin">Vendas no último mês</div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <!-- Divisão inferior dos quadros -->
    <v-container style="background-color: black">
      <v-row class="pa-5">
        <v-col
          ><v-card elevation="2"
            ><v-sheet color="white" elevation="1" width="100%"
              >Teste</v-sheet
            ></v-card
          ></v-col
        >
        <v-col
          ><v-card elevation="2"
            ><v-sheet color="white" elevation="1" width="100%"
              >Teste</v-sheet
            ></v-card
          ></v-col
        >
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Home",
  data: () => ({
    qtdClientes: 1367,
    qtdVendas: 1792,
    value: [423, 446, 675, 510, 590, 610, 760],
  }),
};
</script>
