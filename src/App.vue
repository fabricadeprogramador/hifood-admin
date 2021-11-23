<template>
  <core-view v-if="this.$route.meta.requiresAuth === true"></core-view>
  <v-app v-else>
    <alerta />
    <router-view></router-view>
  </v-app>
</template>

<script>
  import CoreView from "@/components/CoreView"
  import Alerta from "@/components/Alerta"

  export default {
    components: {
      Alerta,
      CoreView
    }
  }
</script>
