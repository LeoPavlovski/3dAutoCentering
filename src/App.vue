<template>
  <v-app>
    <v-overlay
        opacity="0.7"
        :model-value="overlay"
        class="align-center justify-center"
    >
      <img width="120" height="120" :src="logo" class="rotate-animation">
    </v-overlay>
    <app-bar></app-bar>
    <footer-component></footer-component>
  </v-app>
</template>

<script>
import AppBar from "@/components/AppBar.vue";
import Logo from "../public/Images/3dCenteringLogo.svg";
import FooterComponent from "@/components/FooterComponent.vue";

export default {
  name: 'App',
  components: {
    FooterComponent,
    AppBar,
  },

  data() {
    return {
      overlay: false,
      logo: Logo,
      language: null,
    };
  },

  mounted() {

    const storedLanguage = localStorage.getItem('language');
    if(storedLanguage){
      this.$i18n.locale = storedLanguage;
    }

    this.language = this.$i18n.locale; // Store it in component data
    localStorage.setItem('language', this.language); // Ensure it's saved




    // Show overlay for 3.5s
    this.overlay = true;
    setTimeout(() => {
      this.overlay = false;
    }, 3500);
  },
};
</script>

<style>
#app {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
}

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
