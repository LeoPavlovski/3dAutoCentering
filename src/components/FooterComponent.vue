
<template>
<!--  <div style="position:fixed; bottom:0;left:0; background-color:white; width:100%;">-->
<!--    <p>TESTING FOOTER COMPONENT ON MOBILE DEVICES></p>-->
<!--  </div>-->
  <v-footer v-if="!drawer" style="position:fixed;left:0;bottom:0; padding:0;margin:0; z-index:0; width:100%;">
    <div class="bg-orange-accent-4  w-100 align-center d-flex">
      <strong style="font-size:12px; padding-left:10px;">{{$t('socialMedia')}}!</strong>
      <v-spacer></v-spacer>
      <div v-if="this.$vuetify.display.mdAndUp" style="font-size:12.5px; margin-right: 100px">
        <span>&copy;</span>
        <span> 2025 - 3D Auto Centring Gostivar.</span>
      </div>

      <v-spacer></v-spacer>
      <img
          :src="tiktok"
          width="20"
          height="20"
          class="tiktok-icon"
          @click="redirectToTikTok"
      />

      <v-btn
          v-for="icon in icons"
          :key="icon"
          :icon="icon"
          class="mx-4"
          variant="plain"
          density="compact"
          color="white"
          @click="redirectToPage(icon)"
      ></v-btn>
    </div>
  </v-footer>
</template>

<style scoped>

</style>
<script>
import i18n from "@/i18n";
import alFlag from '/public/flags/al.svg'
import mkFlag from '/public/flags/mk.svg'
import gbFlag from '/public/flags/gb.svg'
import Logo from '/public/Images/3dCenteringLogo.svg'
import Tiktok from '/public/Images/tiktok.svg'
export default {
  computed: {
    i18n() {
      return i18n
    }
  },
  data: () => ({
    currentPath: '',
    tiktok: Tiktok,
    logo: Logo,
    overlay : false,
    icons: [
      'mdi-instagram',
    ],
    iconsMenu:[
      {icon:'mdi-home', name:'navigation.home', path:'/home'},
      {icon: 'mdi-car-cog', name:'navigation.services' , path:'/service'},
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
      { title: 'navigation.services', path: '/services' },
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
    redirectToTikTok(){
      const instagramProfile = 'https://www.tiktok.com/@3dcenteringgostivar'
        window.open(instagramProfile);
    },
    changeLanguage(value) {
      this.$i18n.locale = value;
      this.loaderAnimation();
    },
    loaderAnimation () {
      this.overlay = true;
      setTimeout(()=>{
        this.overlay = false;
      },1300)
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
.tiktok-icon {
  cursor: pointer; /* Change cursor to hand */
  transition: filter 0.3s ease-in-out; /* Smooth transition */
  filter: grayscale(50%) brightness(80%); /* Initially gray */
}

.tiktok-icon:hover {
  filter: grayscale(0%) brightness(200%); /* Fully white */
}
</style>
