<template>
  <v-div>
    <!-- Divisão superior da tela -->
    <v-row
      class="pt-2"
      align="center"
      justify="center"
    >
      <v-col>
        <v-card
          elevation="2"
          color="#B71C1C"
          class="text-center pa-3"
          min-width="350"
          dark
        >
          <v-icon
            size="80px"
            class="my-2"
          >mdi-food</v-icon>
          <h3>Produtos cadastrados:</h3>
          <h1>{{ qtdProdutos }}</h1>
        </v-card>
      </v-col>
      <v-col>
        <v-card
          elevation="2"
          color="#880E4F"
          class="text-center pa-3"
          min-width="350"
          dark
        >
          <v-icon
            size="80px"
            class="my-2"
          >mdi-account-group</v-icon>
          <h3>Clientes cadastrados:</h3>
          <h1>{{ qtdClientes }}</h1>
        </v-card>
      </v-col>
      <v-col>
        <v-card
          elevation="2"
          color="#283593"
          class="text-center pa-3"
          min-width="350"
          dark
        >
          <v-icon
            size="80px"
            class="my-2"
          >mdi-cart-outline</v-icon>
          <h3>Vendas concluídas:</h3>
          <h1>{{ qtdVendas }}</h1>
        </v-card>
      </v-col>
      <v-col>
        <v-card
          elevation="2"
          color="#006064"
          class="text-center pa-3"
          min-width="350"
          dark
        >
          <v-icon
            size="80px"
            class="my-2"
          >mdi-cash-multiple</v-icon>
          <h3>Valor total das vendas:</h3>
          <h1>R$ {{ valorVendas }}</h1>
        </v-card>
      </v-col>
    </v-row>
    <!-- Divisão intermediária da tela -->
    <v-row
      class="pt-2"
      align="center"
      justify="space-around"
    >
      <!-- Coluna 1 -->
      <v-col>
        <v-card
          elevation="2"
          class="text-center"
          color="#0A1330"
          min-width="700"
          height="350"
          dark
        >
          <v-card-text>
            <img
              src="../assets/img/circular-clock.png"
              alt="Imagem de um relógio"
              style="width: 200px"
            />
            <v-card-text>
              <div class="text-h4">
                {{ date.hora }}:{{ date.minuto }}:{{ date.segundo }}
              </div>
            </v-card-text>
            <div class="text-h4">
              {{ date.semana }}, {{ date.dia }} de {{ date.mes }} de {{ date.ano }}
            </div>
          </v-card-text>
        </v-card>
      </v-col>

      <!-- Coluna 2 -->
      <v-col>
        <v-card
          elevation="2"
          class="text-center px-3"
          color="#0A1330"
          height="350"
          min-width="700"
          dark
        >
          <v-container>

            <v-card-text>
              <div class="text-h4">Histórico de vendas</div>
            </v-card-text>
            <v-sparkline
              :labels="legendaGraf"
              :value="valorGraf"
              color="white"
              line-width="2"
              height="80"
              type="bars"
              auto-line-width
            ></v-sparkline>
          </v-container>
        </v-card>
      </v-col>

    </v-row>
    <!-- Divisão inferior da tela -->
    <v-row
      class="pt-2"
      align="center"
      justify="center"
    >
      <v-col>
        <v-card
          elevation="2"
          color="#006064"
          class="text-center pa-3"
          min-width="350"
          dark
        >
          <v-icon
            size="80px"
            class="my-2"
          >mdi-trophy</v-icon>
          <h3>Categoria mais vendida:</h3>
          <h2>{{ bestSellerCat }}</h2>
        </v-card>
      </v-col>

      <v-col>
        <v-card
          elevation="2"
          color="#880E4F"
          class="text-center pa-3"
          min-width="350"
          dark
        >
          <v-icon
            size="80px"
            class="my-2"
          >mdi-trophy-broken</v-icon>
          <h3>Categoria menos vendida:</h3>
          <h2>{{ leastSoldCat }}</h2>
        </v-card>
      </v-col>
      <v-col>
        <v-card
          elevation="2"
          color="#283593"
          class="text-center pa-3"
          min-width="350"
          dark
        >
          <v-icon
            size="80px"
            class="my-2"
          >mdi-podium-gold</v-icon>
          <h3>Produto mais vendido:</h3>
          <h2>{{ bestSellerProduct }}</h2>
        </v-card>
      </v-col>
      <v-col>
        <v-card
          elevation="2"
          color="#B71C1C"
          class="text-center pa-3"
          min-width="350"
          dark
        >
          <v-icon
            size="80px"
            class="my-2"
          >mdi-thumb-down</v-icon>
          <h3>Produto menos vendido:</h3>
          <h2>{{ leastSoldProduct }}</h2>
        </v-card>
      </v-col>
    </v-row>
  </v-div>
</template>

<script>
export default {
  name: "Home",
  data: () => ({
    qtdClientes: 1367,
    qtdProdutos: 67,
    qtdVendas: 1792,
    valorVendas: "10.371,53",
    qtdTeste: 0,
    bestSellerCat: "Lanches",
    leastSoldCat: "Saladas",
    bestSellerProduct: "Combo Cheeseburger",
    leastSoldProduct: "Brownie de Maracujá",
    date: {
      dia: "",
      mes: "",
      ano: "",
      hora: "",
      minuto: "",
      segundo: "",
      diaSemana: "",
    },
    valorGraf: [500, 600, 570, 450, 700, 578, 614, 559, 439, 639, 700, 798],
    legendaGraf: [
      "Jan",
      "Fev",
      "Mar",
      "Abr",
      "Mai",
      "Jun",
      "Jul",
      "Ago",
      "Set",
      "Out",
      "Nov",
      "Dez",
    ],
  }),
  methods: {
    horaAtual() {
      let data = new Date();
      let dia = data.getDate();
      let semana = data.getDay();
      let mes = data.getMonth();
      let ano = data.getFullYear();
      let hora = data.getHours();
      let minuto = data.getMinutes();
      let segundo = data.getSeconds();
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
      switch (semana) {
        case 0:
          this.date.semana = "Domingo";
          break;
        case 1:
          this.date.semana = "Segunda-feira";
          break;
        case 2:
          this.date.semana = "Terça-feira";
          break;
        case 3:
          this.date.semana = "Quarta-feira";
          break;
        case 4:
          this.date.semana = "Quinta-feira";
          break;
        case 5:
          this.date.semana = "Sexta-feira";
          break;
        case 6:
          this.date.semana = "Sábado";
          break;
        default:
          break;
      }
      this.date.ano = ano;
      if (hora < 10) {
        this.date.hora = "0" + hora;
      } else {
        this.date.hora = hora;
      }
      if (minuto < 10) {
        this.date.minuto = "0" + minuto;
      } else {
        this.date.minuto = minuto;
      }
      if (segundo < 10) {
        this.date.segundo = "0" + segundo;
      } else {
        this.date.segundo = segundo;
      }
    },
  },
  //Colocando o relógio em tempo real - usando created + setInterval.
  //Para o relógio atualizar fora de tempo real, usar "mounted".
  created() {
    setInterval(this.horaAtual, 1000);
  },
};
</script>
