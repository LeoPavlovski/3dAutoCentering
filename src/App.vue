<template>
  <v-app>
      <app-bar></app-bar>
  </v-app>
</template>

<script>

import AppBar from "@/components/AppBar.vue";

export default {
  name: 'App',
  components: {AppBar},

  data: () => ({
    //
  }),
}
</script>
<style>

#app{
  margin:0;
  padding:0;
  box-sizing:border-box;
  font-family:'Poppins',sans-serif;
}
</style>
