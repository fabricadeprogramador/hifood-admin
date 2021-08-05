<template>
  <div>
    <!-- Divisão superior dos quadros -->
    <v-row style="background-color: gray" class="pa-5">
      <!-- Coluna 1 -->
      <v-col cols="4" align-self="end" class="pa-5"
        ><v-card elevation="2" class="mx-auto text-center" color="#FF6600" dark
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
        </v-card></v-col
      >
      <!-- Coluna 2 -->
      <v-col align-self="start" cols="4">
        <v-row class="pa-5">
          <v-card elevation="2" color="#FFAE43" width="80%" height="50px">
            <v-sheet color="white" elevation="1" width="80%"
              ><v-icon x-large>mdi-podium</v-icon></v-sheet
            ></v-card
          >
        </v-row>
        <v-row class="pa-5">
          <v-card elevation="2" color="#FFAE43" width="80%" height="50px">
            <v-sheet color="white" elevation="1" width="80%"
              ><v-icon x-large>mdi-podium</v-icon></v-sheet
            ></v-card
          >
        </v-row>
      </v-col>
      <!-- Coluna 3 -->
      <v-col align-self="center" height="50px" cols="4"
        ><v-card elevation="2" color="#676D84" width="45%">
          <v-sheet color="white" elevation="1" width="80%" shaped
            ><v-icon x-large>mdi-cake-variant</v-icon></v-sheet
          ></v-card
        >
        <v-card elevation="2" color="#676D84" width="45%" height="50px">
          <v-sheet color="white" elevation="1" width="80%" shaped
            ><v-icon x-large>mdi-cake-variant</v-icon></v-sheet
          ></v-card
        ></v-col
      >
    </v-row>

    <!-- Divisão inferior dos quadros -->
    <v-row style="background-color: blue" class="pa-5">
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
  </div>
</template>

<script>
export default {
  name: "Home",
  data: () => ({
    value: [423, 446, 675, 510, 590, 610, 760],
  }),
};
</script>
