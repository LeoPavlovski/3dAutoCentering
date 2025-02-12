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
        3D AUTO
      </h1>
      <h1 class="subtitle">
        centering
      </h1>
      <img
          style="width: 100%; height: 100vh; object-fit: cover;"
          src="https://www.shutterstock.com/image-photo/closeup-car-wheel-indoors-service-600nw-2103819539.jpg"
      >
      <h1
          style="position: absolute; text-transform:uppercase; top: 79%; left: 50%; transform: translate(-50%, -50%); z-index: 2; color: white; font-size: 30px; font-weight: 400; text-align: center;"
      >
        Automotive service
      </h1>
    </div>
  </div>



</template>

<script>
import logo from '/public/Images/3dCenteringLogo.svg'
export default{
  data(){
    return{
Logo:logo,
      icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram',
      ],
    }
  },
  methods:{

  },
  mounted(){
    console.log('sokkodas' , this.$vuetify.display.name);
  }
}
</script>
<style>
.logo{
  position: absolute; top: 25%; left: 50%; transform: translate(-50%, -50%); z-index: 2; width: 300px; height: 300px;
  transition: ease-in-out 0.5s;
}
.logo:hover{
  filter: grayscale(100%);
}
.title{
  position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); z-index: 2; color: #f79f00; font-size: 120px; font-weight: bold; text-align: center;
}
.subtitle{
  position: absolute; text-transform:uppercase; top: 64%; left: 50%; transform: translate(-50%, -50%); z-index: 2; color: #f79f00; font-size: 120px; font-weight: bold; text-align: center;
}
/* Laptop Screen , Large Medium */
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
/* Phones L , M , S */
@media(max-width:426px){
  .logo{
    width:220px;
    height:220px;
  }
  .title{
    font-size:40px;
    top:50%;
  }
  .subtitle{
    font-size:40px;
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
.v-footer{
  background:none !important;
  width:100%;
  height:50px;
}
</style>
