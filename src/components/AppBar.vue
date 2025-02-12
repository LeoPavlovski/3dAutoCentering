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
              <router-link
                  :to="currentPath"
                  @click.prevent="delayedNavigation('/home')"
                  style="text-decoration:none; color:white; font-size:18px;"
                  class="font-weight-bold"
              >
                {{$t('navigation.home')}}
              </router-link>
              <router-link
                  :to="currentPath"
                  @click.prevent="delayedNavigation('/services')"
                  style="text-decoration:none; color:white; font-size:18px;"
                  class="mx-2 font-weight-bold"
              >
                {{$t('navigation.services')}}
              </router-link>
              <router-link
                  :to="currentPath"
                  @click.prevent="delayedNavigation('/contact')"
                  style="text-decoration:none; color:white; font-size:18px;"
                  class="mr-2 font-weight-bold"
              >
                {{$t('navigation.contact')}}
              </router-link>
              <router-link
                  :to="currentPath"
                  @click.prevent="delayedNavigation('/gallery')"
                  style="text-decoration:none; color:white; font-size:18px;"
                  class="mr-2 font-weight-bold"
              >
                {{$t('navigation.gallery')}}
              </router-link>
            </template>
          </div>
          <div>
            <img  @click="changeLanguage('mkd')"  :src="Macedonian" style="width:25px; height:25px; border-radius:50%; cursor:pointer;">
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
              @click="loaderAnimation"
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
  <v-overlay
      :model-value="overlay"
      class="align-center justify-center"
  >
    <img width="120" height="120" :src="logo" class="rotate-animation">
  </v-overlay>
</template>

<script>
import i18n from "@/i18n";
import alFlag from '/public/flags/al.svg'
import mkFlag from '/public/flags/mk.svg'
import gbFlag from '/public/flags/gb.svg'
import Logo from '/public/Images/3dCenteringLogo.svg'


export default {
  computed: {
    i18n() {
      return i18n
    }
  },
  data: () => ({
    currentPath: '',
    logo: Logo,
    overlay : false,
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
      this.loaderAnimation();
    },
    loaderAnimation () {
      this.overlay = true;
      setTimeout(()=>{
        this.overlay = false;
      },2000)
    },
    delayedNavigation(path) {
      this.loaderAnimation();
      setTimeout(() => {
        this.currentPath = path;
        this.$router.push(path);
      }, 1500); // Delay navigation by 1 second
    }
  },

  watch: {
    group () {
      this.drawer = false
    },
  },
}
</script>
<style scoped>
@keyframes rotate {
  from {
    transform: rotate(0deg);
    filter: grayscale(2);
  }
  to {
    transform: rotate(360deg);
    filter: grayscale(0);
  }
}

.rotate-animation {
  animation: rotate 2s linear infinite;

}
</style>
