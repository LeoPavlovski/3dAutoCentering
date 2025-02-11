<template>
  <v-app>
    <v-main>
      <hello-world></hello-world>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: 'App',
  components: {HelloWorld},

  data: () => ({
    //
  }),
}
</script>
