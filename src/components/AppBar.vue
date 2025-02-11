<template>
  <v-card class="elevation-0" style="border-radius:0px;">
    <v-layout height="100vh">
      <v-app-bar color="black" style="border-radius:0 !important;">
        <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

        <v-toolbar-title>3D Auto Centering</v-toolbar-title>

        <v-spacer></v-spacer>

        <template v-if="$vuetify.display.smAndUp">
        <router-link to="/home" link style="text-decoration:none; color:white; font-size:22px;" class="font-weight-bold">Home</router-link>
        <router-link to="/services" style="text-decoration:none;  color:white; font-size:22px;" class="mx-2 font-weight-bold">Services</router-link>
        <router-link to="/contact" style="text-decoration:none; color:white; font-size:22px;" class="mr-2 font-weight-bold">Contact</router-link>
        </template>
      </v-app-bar>

      <v-navigation-drawer
          v-model="drawer"
          :location="$vuetify.display.mobile ? 'bottom' : undefined"
          temporary
          absolute
          style="height:100vh"
      >
        <v-list>
          <v-list-item
              v-for="(item, index) in items"
              :key="index"
              :to="item.path"
              link
          >
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
      <v-main>
        <router-view/>
      </v-main>

    </v-layout>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    drawer: false,
    group: null,
    items: [
      {
        path:'/home',
        title: 'Home',
      },
      {
        path:'/services',
        title: 'Services',
      },
      {
        path:'/contact',
        title: 'Contact',
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
