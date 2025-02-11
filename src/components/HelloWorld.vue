<template>
  <v-card class="elevation-0" style="border-radius:0px;">
    <v-layout>
      <v-app-bar color="black" style="border-radius:0 !important;">
        <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

        <v-toolbar-title>3D Auto Centering</v-toolbar-title>

        <v-spacer></v-spacer>

        <template v-if="$vuetify.display.smAndUp">
        <router-link to="/home" link style="text-decoration:none; color:white; font-size:22px;">Home</router-link>
        <router-link to="/services" style="text-decoration:none;  color:white; font-size:22px;" class="mx-2">Services</router-link>
        <router-link to="/contact" style="text-decoration:none; color:white; font-size:22px;" class="mr-2">Contact</router-link>
        </template>
      </v-app-bar>

      <v-navigation-drawer
          v-model="drawer"
          :location="$vuetify.display.mobile ? 'bottom' : undefined"
          temporary
          absolute
      >
        <v-list
            :items="items"
        ></v-list>
      </v-navigation-drawer>

      <v-main style="height:100vh">
        <services-component></services-component>
      </v-main>
    </v-layout>
  </v-card>
</template>

<script>
import ServicesComponent from "@/components/ServicesComponent.vue";

export default {
  components: {ServicesComponent},
  data: () => ({
    drawer: false,
    group: null,
    items: [
      {
        title: 'Foo',
        value: 'foo',
      },
      {
        title: 'Bar',
        value: 'bar',
      },
      {
        title: 'Fizz',
        value: 'fizz',
      },
      {
        title: 'Buzz',
        value: 'buzz',
      },
    ],
  }),

  watch: {
    group () {
      this.drawer = false
    },
  },
}
</script>
