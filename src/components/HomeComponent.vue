<template>
  <div>
    <div style="position: relative;">
      <!-- Overlay -->
      <div
          style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0, 0, 0, 0.5); z-index: 1;">
      </div>

      <!-- Logo -->
      <img class="logo" :src="Logo" />

      <!-- Title with individual letters -->
      <h1 class="title" style="cursor: default">
        <span v-for="(letter, index) in titleLetters" :key="'title-' + index" class="letter">
          {{ letter }}
        </span>
      </h1>

      <!-- Subtitle with individual letters -->
      <h1 class="subtitle" style="cursor: default">
        <span v-for="(letter, index) in subtitleLetters" :key="'subtitle-' + index" class="letter">
          {{ letter }}
        </span>
      </h1>

      <!-- Background Image -->
      <img
          style="width: 100%; height: 100vh; object-fit: cover;"
          :src="siteBackground"
      />

      <!-- Description -->
      <h1 class="desc">
        {{ $t('automotiveService') }}
      </h1>

    </div>
  </div>
</template>


<script>
import logo from '/public/Images/3dCenteringLogo.svg';
import background1 from '/public/Images/background1.webp';
import background2 from '/public/Images/background2.svg';

export default {
  data() {
    return {
      siteBackground: background1,
      siteBackgroun2: background2,
      Logo: logo,
      titleLetters: '3D AUTO'.split(''), // Split title into individual letters
      subtitleLetters: 'Centering'.split(''), // Split subtitle into individual letters
    };
  },
  mounted() {
    // Add mousemove event listener to track mouse position
    document.addEventListener('mousemove', this.moveCircle);
    console.log('$', this.$vuetify.display.name);
  },
  methods: {
    moveCircle(event) {
      const circle = this.$refs.mouseCircle;
      if (circle) {
        // Update circle position to follow the mouse
        circle.style.left = `${event.clientX}px`;
        circle.style.top = `${event.clientY}px`;
      }
    },
  },
  beforeUnmount() {
    // Clean up the event listener when the component is destroyed
    document.removeEventListener('mousemove', this.moveCircle);
  },
};
</script>

<style scoped>
/* Letter hover effect */
.letter {
  position: relative;
  transition: color 0.3s ease-in-out;
}

.letter:hover {
  color: white; /* Only the hovered letter will change color */
}

/* Existing styles */
.logo {
  position: absolute;
  top: 25%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  width: 300px;
  height: 300px;
  transition: ease-in-out 0.5s;
}

.logo:hover {
  filter: grayscale(100%);
}

.title {
  position: absolute;
  top: 50%;
  text-transform: uppercase;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  color: #f79f00;
  font-size: 120px;
  font-weight: bold;
  text-align: center;
}

.subtitle {
  position: absolute;
  text-transform: uppercase;
  top: 64%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  color: #f79f00;
  font-size: 120px;
  font-weight: bold;
  text-align: center;
}

.desc {
  position: absolute;
  text-transform: uppercase;
  top: 79%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  color: white;
  font-size: 25px;
  font-weight: 400;
  text-align: center;
}

@media(max-width:1440px) {
  .logo {
    width: 300px;
    height: 300px;
  }
}
@media(max-width:1024px){
  .logo{
    width:250px;
    height:250px;
  }
  .title{
    font-size:80px;
    top:50%;
  }
  .subtitle{
    font-size:80px;
    top:60%;
  }
}

@media(max-width:431px){
  .logo{
    width:250px;
  }
  .title{
    font-size:39px;
    top:50%;
  }
  .subtitle{
    font-size:55px;
    top:55%;
  }
}
@media(max-width:642px){
  .logo{
    width:250px;
  }
  .title{
    font-size:35px;
    top:50%;
  }
  .subtitle{
    font-size:55px;
    top:55%;
  }
}
@media(max-width:480px){
  .logo{
    width:250px;
  }
  .title{
    font-size:39px;
    top:50%;
  }
  .subtitle{
    font-size:55px;
    top:55%;
  }
}
@media(max-width:426px){
  .logo{
    width:220px;
    height:220px;
  }
  .title{
    font-size:45px;
    top:50%;
  }
  .subtitle{
    font-size:55px;
    top:55%;
  }
}
@media(max-width:320px){
  .logo{
    width:180px;
    height:180px;
  }
  .title{
    font-size:30px;
    top:50%;
  }
  .subtitle{
    font-size:30px;
    top:55%;
  }
}
@media(max-width:392px){
  .logo{
    width:180px;
    height:180px;
  }
  .title{
    font-size:30px;
    top:50%;
  }
  .subtitle{
    font-size:55px;
    top:55%;
  }
}
.v-footer{
  background:none !important;
  width:100%;
  height:50px;
}
</style>
