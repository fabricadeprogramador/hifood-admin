<template>
  <v-div>
    <!-- Divisão superior da tela -->
    <v-row class="pa-5" align="center" justify="center">
      <v-col
        ><v-card elevation="2" color="#84D2F4" class="text-center pa-3" dark>
          <v-icon size="80px" class="my-2">mdi-account-group</v-icon>
          <h3>Clientes cadastrados</h3>
          <h1>{{ qtdClientes }}</h1>
        </v-card></v-col
      >
      <v-col
        ><v-card elevation="2" color="#039BE5" class="text-center pa-3" dark>
          <v-icon size="80px" class="my-2">mdi-cart-outline</v-icon>
          <h3>Vendas concluídas</h3>
          <h1>{{ qtdVendas }}</h1>
        </v-card>
      </v-col>
      <v-col
        ><v-card elevation="2" color="#0277BD" class="text-center pa-3" dark>
          <v-icon size="80px" class="my-2">mdi-podium-gold</v-icon>
          <h3>Produto mais vendido</h3>
          <h1>{{ top1 }}</h1>
        </v-card>
      </v-col>
      <v-col
        ><v-card elevation="2" color="#01579B" class="text-center pa-3" dark>
          <v-icon size="80px" class="my-2">mdi-cash-multiple</v-icon>
          <h3>Valor total das vendas</h3>
          <h1>R$ {{ valorVendas }}</h1>
        </v-card>
      </v-col>
    </v-row>
    <!-- Divisão inferior da tela -->
    <v-row class="pa-5" align="center" justify="center">
      <!-- Coluna 1 -->
      <v-col>
        <v-card elevation="2" class="text-center" color="#FFD180" width="100%"
          ><v-card-text>
            <v-sheet color="#FFFFFF" height="270"> </v-sheet>
          </v-card-text>

          <v-card-text>
            <div class="text-h4">
              {{ date.dia }} de {{ date.mes }} de {{ date.ano }}
            </div>
          </v-card-text>
        </v-card>
      </v-col>
      <!-- Coluna 2 -->
      <v-col>
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
                color="#0A1330"
                height="150"
                padding="24"
                smooth
              >
                <template v-slot:label="item"> R${{ item.value }} </template>
              </v-sparkline>
            </v-sheet>
          </v-card-text>

          <v-card-text>
            <div class="text-h4">Vendas no último mês</div>
          </v-card-text>
        </v-card>
      </v-col>
      <!-- Coluna 3 -->
      <v-col>
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
            <div class="text-h4">Vendas no último mês</div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-div>
</template>

<script>
export default {
  name: "Home",
  data: () => ({
    relogio: require("./assets/img/circular-clock.png"),
    qtdClientes: 1367,
    qtdVendas: 1792,
    valorVendas: "10.371,53",
    top1: "Produto 1",
    date: { dia: "", mes: "", ano: "" },
    value: [423, 446, 675, 510, 590, 610, 760],
  }),
  methods: {
    horaAtual() {
      let data = new Date();
      let dia = data.getDate();
      let mes = data.getMonth();
      let ano = data.getFullYear();
      this.date.dia = dia;
      switch (mes) {
        case 0:
          this.date.mes = "Janeiro";
          break;
        case 1:
          this.date.mes = "Fevereiro";
          break;
        case 2:
          this.date.mes = "Março";
          break;
        case 3:
          this.date.mes = "Abril";
          break;
        case 4:
          this.date.mes = "Maio";
          break;
        case 5:
          this.date.mes = "Junho";
          break;
        case 6:
          this.date.mes = "Julho";
          break;
        case 7:
          this.date.mes = "Agosto";
          break;
        case 8:
          this.date.mes = "Setembro";
          break;
        case 9:
          this.date.mes = "Outubro";
          break;
        case 10:
          this.date.mes = "Novembro";
          break;
        case 11:
          this.date.mes = "Dezembro";
          break;
        default:
          break;
      }
      this.date.ano = ano;
    },
  },
  mounted() {
    this.horaAtual();
  },
};
</script>
