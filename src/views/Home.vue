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
          dark
        >
          <v-icon
            size="80px"
            class="my-2"
          >mdi-food</v-icon>
          <h3>Produtos cadastrados</h3>
          <h1>{{ qtdProdutos }}</h1>
        </v-card>
      </v-col>
      <v-col>
        <v-card
          elevation="2"
          color="#880E4F"
          class="text-center pa-3"
          dark
        >
          <v-icon
            size="80px"
            class="my-2"
          >mdi-account-group</v-icon>
          <h3>Clientes cadastrados</h3>
          <h1>{{ qtdClientes }}</h1>
        </v-card>
      </v-col>
      <v-col>
        <v-card
          elevation="2"
          color="#283593"
          class="text-center pa-3"
          dark
        >
          <v-icon
            size="80px"
            class="my-2"
          >mdi-cart-outline</v-icon>
          <h3>Vendas concluídas</h3>
          <h1>{{ qtdVendas }}</h1>
        </v-card>
      </v-col>
      <v-col>
        <v-card
          elevation="2"
          color="#006064"
          class="text-center pa-3"
          dark
        >
          <v-icon
            size="80px"
            class="my-2"
          >mdi-cash-multiple</v-icon>
          <h3>Valor total das vendas</h3>
          <h1>R$ {{ valorVendas }}</h1>
        </v-card>
      </v-col>
    </v-row>
    <!-- Divisão intermediária da tela -->
    <v-row
      class="pt-2"
      align="center"
      justify="center"
    >
      <!-- Coluna 1 -->
      <v-col>
        <v-card
          elevation="2"
          class="text-center"
          color="#0A1330"
          dark
        >
          <v-card-text>
            <v-sheet
              color="#FFFFFF"
              height="260"
              light
            >
              <img
                src="../assets/img/circular-clock.png"
                alt="Imagem de um relógio"
                style="width: 180px"
                class="my-3"
              />
              <div class="text-h4">
                {{ date.hora }}:{{ date.minuto }}:{{ date.segundo }}
              </div>
            </v-sheet>
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
          color="#0A1330"
          dark
        >
          <v-card-text>
            <v-sheet
              color="#FFFFFF"
              height="260"
            >
              <v-sparkline
                :value="value"
                color="#0A1330"
                height="135"
                padding="20"
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
          color="#0A1330"
          dark
        >
          <v-card-text>
            <v-sheet
              color="#FFFFFF"
              height="260px"
            >
            </v-sheet>
          </v-card-text>

          <v-card-text>
            <div class="text-h4">Título do card</div>
          </v-card-text>
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
          dark
        >
          <v-icon
            size="80px"
            class="my-2"
          >mdi-help</v-icon>
          <h3>Título do card</h3>
          <h1>{{ qtdTeste }}</h1>
        </v-card>
      </v-col>
      <v-col>
        <v-card
          elevation="2"
          color="#283593"
          class="text-center pa-3"
          dark
        >
          <v-icon
            size="80px"
            class="my-2"
          >mdi-podium-gold</v-icon>
          <h3>Produto mais vendido</h3>
          <h1>{{ top1 }}</h1>
        </v-card>
      </v-col>
      <v-col>
        <v-card
          elevation="2"
          color="#880E4F"
          class="text-center pa-3"
          dark
        >
          <v-icon
            size="80px"
            class="my-2"
          >mdi-help</v-icon>
          <h3>Título do card</h3>
          <h1>{{ qtdTeste }}</h1>
        </v-card>
      </v-col>
      <v-col>
        <v-card
          elevation="2"
          color="#B71C1C"
          class="text-center pa-3"
          dark
        >
          <v-icon
            size="80px"
            class="my-2"
          >mdi-help</v-icon>
          <h3>Título do card</h3>
          <h1>{{ qtdTeste }}</h1>
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
    top1: "Produto 1",
    date: { dia: "", mes: "", ano: "", hora: "", minuto: "", segundo: "" },
    value: [423, 446, 675, 510, 590, 610, 760],
  }),
  methods: {
    horaAtual() {
      let data = new Date();
      let dia = data.getDate();
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
      this.date.ano = ano;
      this.date.hora = hora;
      this.date.minuto = minuto;
      this.date.segundo = segundo;
    },
  },
  mounted() {
    this.horaAtual();
  },
};
</script>
