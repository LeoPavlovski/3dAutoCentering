<template>
  <v-card class="elevation-0" style="border-radius:0px;">
    <v-layout height="100vh" width="100%">

      <v-app-bar style="border-radius:0 !important; background:black; position:fixed;top:0;left:0;right:0;">

        <v-app-bar-nav-icon color="white" variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <div class="d-flex align-center justify-space-between" style="width:100%;">
          <div>
            <button style="color:white; font-weight:bold;" @click="delayedNavigation('/home')">3D Auto Centering</button>
          </div>
          <div>
            <template v-if="$vuetify.display.lgAndUp">
              <router-link
                  :to="currentPath"
                  @click.prevent="delayedNavigation('/home')"
                  style="text-decoration:none; color:white; font-size:18px"
                  class="font-weight-bold mx-5"
                  :style="{
                  textDecoration: $route.path === '/home' ? 'underline' : 'none',
                  color: $route.path === '/home' ? '#FF6D00' : 'white',
                  marginTop: '10px',
                  fontSize: '18px',
                  letterSpacing: '1.4px'

                  }"
              >
                {{$t('navigation.home')}}
              </router-link>
              <router-link
                  :to="currentPath"
                  @click.prevent="delayedNavigation('/services')"
                  style="text-decoration:none; color:white; font-size:18px; letter-spacing: 1.4px"
                  class="mx-2 font-weight-bold mx-5"
                  :style="{
                  textDecoration: $route.path === '/services' ? 'underline' : 'none',
                  color: $route.path === '/services' ? '#FF6D00' : 'white',
                  marginTop: '10px',
                  fontSize: '18px',
                  letterSpacing: '1.4px'
  }"
              >
                {{$t('navigation.services')}}
              </router-link>
              <router-link
                  :to="currentPath"
                  @click.prevent="delayedNavigation('/contact')"
                  style="text-decoration:none; color:white; font-size:18px; letter-spacing: 1.4px"
                  class="mr-2 font-weight-bold mx-5"
                  :style="{
                  textDecoration: $route.path === '/contact' ? 'underline' : 'none',
                  color: $route.path === '/contact' ? '#FF6D00' : 'white',
                  marginTop: '10px',
                  fontSize: '18px',
                  letterSpacing: '1.4px'
  }"
              >
                {{$t('navigation.contact')}}
              </router-link>
              <router-link
                  :to="currentPath"
                  @click.prevent="delayedNavigation('/gallery')"
                  style="text-decoration:none; color:white; font-size:18px; letter-spacing: 1.4px"
                  class="mr-2 font-weight-bold mx-5"
                  :style="{
                  textDecoration: $route.path === '/gallery' ? 'underline' : 'none',
                  color: $route.path === '/gallery' ? '#FF6D00' : 'white',
                  marginTop: '10px',
                  fontSize: '18px',
                  letterSpacing: '1.4px'
  }"
              >
                {{$t('navigation.gallery')}}
              </router-link>

              <router-link
                  :to="currentPath"
                  @click.prevent="delayedNavigation('/prices')"
                  style="text-decoration:none; color:white; font-size:18px; letter-spacing: 1.4px"
                  class="mr-2 font-weight-bold mx-5"
                  :style="{
                  textDecoration: $route.path === '/prices' ? 'underline' : 'none',
                  color: $route.path === '/prices' ? '#FF6D00' : 'white',
                  marginTop: '10px',
                  fontSize: '18px',
                  letterSpacing: '1.4px'
  }"
              >
                {{$t('navigation.prices')}}
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
          style="height:100vh; opacity: 0.9"
      >
        <v-list height="400">
          <v-list-item
              v-for="(item, index) in iconsMenu"
              :key="index"
              @click.prevent="delayedNavigation(item.path)"
              :to="item.path"
              link
              @click="loaderAnimation"
          >
            <div class="d-flex align-center">
              <v-icon color="#E65100" style="margin-right:10px;">{{item.icon}}</v-icon>
              <v-list-item-title style="font-weight:500;">{{ $t(item.name) }}</v-list-item-title>
            </div>
          </v-list-item>

        </v-list>
      </v-navigation-drawer>
      <v-main>
        <router-view/>
      </v-main>

    </v-layout>
  </v-card>
  <v-overlay
      opacity="0.6"
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
    icons: [
      'mdi-facebook',
      'mdi-instagram',
    ],
    iconsMenu:[
      {icon:'mdi-home', name:'navigation.home', path:'/home'},
      {icon: 'mdi-car-cog', name:'navigation.services' , path:'/services'},
      {icon:'mdi-card-account-phone' , name:'navigation.contact' , path:'/contact'},
      {icon:'mdi-car-multiple', name:'navigation.gallery' , path:'/gallery'},
      {icon:'mdi-cash-multiple', name:'navigation.prices' , path:'/prices'},
    ],
    drawer: false,
    Albanian:alFlag,
    Macedonian:mkFlag,
    England:gbFlag,
    group: null,
    items: [
      { title: 'navigation.home', path: '/home' },
      { title: 'navigation.services', path: '/service' },
      { title: 'navigation.contact', path: '/contact' },
      { title: 'navigation.gallery', path: '/gallery' },
      { title: 'navigation.prices', path: '/prices' },
    ],
  }),
  mounted() {
  },
  methods: {
    redirectToPage(item){
      const instagramProfile = 'https://www.instagram.com/3dcenteringgostivar/'
      const facebookProfile = 'https://www.facebook.com/jovanoski.nikola'
      if(item === 'mdi-facebook'){
        //Open a facebook profile page
        window.open(facebookProfile);
      }
      if(item === 'mdi-instagram'){
        //Open an instagram page
        window.open(instagramProfile);
      }
    },
    changeLanguage(value) {
      this.$i18n.locale = value;
      localStorage.setItem('language',value);
      this.loaderAnimation();
    },
    loaderAnimation () {
      this.overlay = true;
      setTimeout(()=>{
        this.overlay = false;
      },1200)
    },
    delayedNavigation(path) {
      this.loaderAnimation();
      setTimeout(() => {
        this.currentPath = path;
        this.$router.push(path);
      }, 1000); // Delay navigation by 1 second
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
