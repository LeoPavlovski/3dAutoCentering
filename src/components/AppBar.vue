<template>
  <v-card class="elevation-0" style="border-radius:0px;">
    <v-layout height="100vh" width="100%">
      <v-app-bar color="black" style="border-radius:0 !important;">
        <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <div class="d-flex align-center justify-space-between" style="width:100%;">
          <div>
            <span>3D Auto Centering</span>
          </div>
          <div>
            <template v-if="$vuetify.display.smAndUp">
              <router-link to="/home" link style="text-decoration:none; color:white; font-size:18px;" class="font-weight-bold">{{$t('navigation.home')}}</router-link>
              <router-link to="/services" style="text-decoration:none;  color:white; font-size:18px;" class="mx-2 font-weight-bold">{{$t('navigation.services')}}</router-link>
              <router-link to="/contact" style="text-decoration:none; color:white; font-size:18px;" class="mr-2 font-weight-bold">{{$t('navigation.contact')}}</router-link>
              <router-link to="/gallery" style="text-decoration:none; color:white; font-size:18px;" class="mr-2 font-weight-bold">{{$t('navigation.gallery')}}</router-link>
            </template>
          </div>
          <div>
            <img @click="changeLanguage('mkd')"  :src="Macedonian" style="width:25px; height:25px; border-radius:50%; cursor:pointer;">
            <img  @click="changeLanguage('en')" class="mx-2" :src="England" style="width:25px; height:25px; border-radius:50%; cursor:pointer">
            <img @click="changeLanguage('al')" :src="Albanian" style="width:25px; margin-right:10px; height:25px; border-radius:50%; cursor:pointer">
          </div>
        </div>


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
            <v-list-item-title>{{ $t(item.title) }}</v-list-item-title>
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
import i18n from "@/i18n";
import alFlag from '/public/flags/al.svg'
import mkFlag from '/public/flags/mk.svg'
import gbFlag from '/public/flags/gb.svg'

export default {
  computed: {
    i18n() {
      return i18n
    }
  },
  data: () => ({
    drawer: false,
    Albanian:alFlag,
    Macedonian:mkFlag,
    England:gbFlag,
    group: null,
    items: [
      { title: 'navigation.home', path: '/home' },
      { title: 'navigation.services', path: '/services' },
      { title: 'navigation.contact', path: '/contact' },
      { title: 'navigation.about', path: '/about' },
      { title: 'navigation.gallery', path: '/gallery' },
    ],
  }),
  methods: {
    changeLanguage(value) {
      this.$i18n.locale = value;
    },
  },

  watch: {
    group () {
      this.drawer = false
    },
  },
}
</script>
