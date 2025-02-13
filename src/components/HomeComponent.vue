<template>
  <div>
    <div style="position: relative;">
      <div
          style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0, 0, 0, 0.5);   z-index: 1;">
      </div>
      <img
          class="logo"
          :src="Logo"
      >
      <h1 class="title">
       {{$t('navigation.auto')}}
      </h1>
      <h1 class="subtitle">
        {{$t('centering')}}
      </h1>
      <img
          style="width: 100%; height: 100vh; object-fit: cover;"
          src="https://www.shutterstock.com/image-photo/closeup-car-wheel-indoors-service-600nw-2103819539.jpg"
      >
      <h1 class="desc">
        {{$t('automotiveService')}}
      </h1>
    </div>
  </div>



</template>

<script>
import logo from '/public/Images/3dCenteringLogo.svg'
export default{
  data(){
    return{
      titleLetters: '3D AUTO'.split(''), // Split title into individual letters
      subtitleLetters: 'Centering'.split(''), // Split subtitle into individual letters
      Logo:logo,
      icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram',
      ],
    }
  },
  mounted() {
    // Add mousemove event listener to track mouse position
    document.addEventListener('mousemove', this.moveCircle);
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


<style>
/* Mouse-following circle */

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
    font-size:35px;
    top:50%;
  }
  .subtitle{
    font-size:50px;
    top:55%;
  }
}
.v-footer{
  background:none !important;
  width:100%;
  height:50px;
}
</style>
