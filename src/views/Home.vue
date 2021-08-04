<template>
  <v-container>
    <v-row>
      <v-col
        ><v-card elevation="2" class="mx-auto text-center" color="green" dark
          ><v-card-text>
            <v-sheet color="rgba(0, 0, 0, .12)">
              <v-sparkline
                :value="value"
                color="rgba(255, 255, 255, .7)"
                height="100"
                padding="24"
                stroke-linecap="round"
                smooth
              >
                <template v-slot:label="item"> ${{ item.value }} </template>
              </v-sparkline>
            </v-sheet>
          </v-card-text>

          <v-card-text>
            <div class="text-h4 font-weight-thin">Sales Last 24h</div>
          </v-card-text>

          <v-divider></v-divider>

          <v-card-actions class="justify-center">
            <v-btn block text> Go to Report </v-btn>
          </v-card-actions></v-card
        ></v-col
      >
      <v-col><v-card elevation="2">Teste</v-card></v-col>
    </v-row>
    <v-row>
      <v-col><v-card elevation="2">Teste</v-card></v-col>
      <v-col><v-card elevation="2">Teste</v-card></v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Home",
};
</script>
