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


    <!-- Wrench Icon Follows Cursor -->
    <div class="mouse-circle" ref="mouseCircle">
      <v-icon color="white">mdi-wrench-outline</v-icon>
    </div>

  </v-app>
</template>

<script>

import AppBar from "@/components/AppBar.vue";
import Logo from "../public/Images/3dCenteringLogo.svg";
import FooterComponent from "@/components/FooterComponent.vue";

export default {
  name: 'App',
  components:{
    FooterComponent,
    AppBar,
  },

  data: () => ({
    overlay: false,
    logo: Logo,

    //
  }),

  mounted() {
    this.$nextTick(() => {
      document.addEventListener('mousemove', this.moveCircle);
    });

    this.overlay = true;
    setTimeout(() => {
      this.overlay = false;
    }, 3000);
  },

  beforeUnmount() {
    document.removeEventListener('mousemove', this.moveCircle);
  },

  methods: {
    moveCircle(event) {
      const wrench = this.$refs.mouseCircle;
      if (!wrench) return; // Prevent error if ref is null

      wrench.style.left = `${event.clientX}px`;
      wrench.style.top = `${event.clientY}px`;
    }
  },
};
</script>

<style>
/* Hide the default cursor */
* {
  cursor: none;
}

/* Wrench icon follows mouse (no shadow) */
.mouse-circle {
  position: fixed;
  pointer-events: none;
  transform: translate(-50%, -50%);
  z-index: 9999;
}

/* Wrench icon style */
.v-icon {
  font-size: 40px !important;
  color: white;
}
#app{
  margin:0;
  padding:0;
  box-sizing:border-box;
  font-family:'Poppins',sans-serif;
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
