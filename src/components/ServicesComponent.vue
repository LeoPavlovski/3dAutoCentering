<template>
  <div>
    <v-img
        :src="siteBackground"
        cover
        class="full-screen-image"
    />
    <div style="position:absolute; top:10%; left:0; bottom:0; right:0;">
      <h1 style="color:white;" class="pa-5 title1" :class="$vuetify.display.smAndDown? 'text-center' : 'text-left'">
        {{ $t('whatareweoffering') }}
      </h1>
      <v-row class="rows d-flex" style="height:80vh; overflow:auto;">
        <v-col :cols="$vuetify.display.smAndDown? 12 : 4" :class="$vuetify.display.smAndDown? 'pr-9' : ''">
          <div style="border:10px solid white; margin-left:25px;">
            <div style="margin:5px;">
              <img
                  class="image"
                  src="https://img.freepik.com/free-photo/auto-mechanic-checking-car-engine_1303-14032.jpg"
              >
              <div class="container">
                <h4 class="main-text" style="margin: 0 0 10px 0;">Maintaining your car
                </h4>
                <span style="font-size:16px;" class="description">
             Regular maintenance of related partswith the centering, such as traps andsuspension system, is key to the correctoperation of the car.</span>
              </div>
            </div>
          </div>
        </v-col>
        <v-col :cols="$vuetify.display.smAndDown? 12 : 4" :class="$vuetify.display.smAndDown? 'pr-9 pl-9' : ''">
          <div style="border:10px solid white;">
            <div style="margin:5px;">
              <img  class="image" src="https://www.3dautocenter.com/uploads/7/2/7/0/72709373/auto-electrical-diagnostics_orig.jpg">
              <div
                  class="container"
              >
                <h4 class="main-text" style="margin: 0 0 10px 0;">Centering Your Car</h4>
                <span style="font-size:16px;" class="description">
        The centering of the front and rear ladder ensures proper functioning of the suspension and better stability.
      </span>
              </div>
            </div>
          </div>
        </v-col>
        <v-col :cols="$vuetify.display.smAndDown? 12 : 4" :class="$vuetify.display.smAndDown? 'pr-9 pl-9' : ''">
          <div style="border:10px solid white;">
            <div style="margin:5px;">
              <img
                  class="image"
                  src="https://roskillauto.co.nz/wp-content/uploads/2021/11/20211123_123348-1024x461.jpeg"
              >
              <div
                  class="container"
              >
                <h4 class="main-text" style="margin: 0 0 10px 0;">Tire change</h4>
                <span style="font-size:16px;" class="description">Changing and balancing tires for safety andcomfortable ride. The properly balanced onestires improve handling andextend the life of the tires.
      </span>
              </div>
            </div>
          </div>
        </v-col>
      </v-row>
    </div>
  </div>
</template>
<script>
import background1 from "../../public/Images/background1.webp";

export default{
  data(){
    return{
      siteBackground: background1,
    }
  },
  mounted(){
  }
}
</script>
<style scoped>
.full-screen-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  object-fit: cover;
}
.image{
  border-top-left-radius:0px; border-top-right-radius:0px;
  width: 100%; max-width: 500px; height: 470px; object-fit: cover;
  transition:0.5s;
  filter:grayscale(0);
}
.image:hover{
  filter:grayscale(1);
  transform:scale(.95);
}
.container{
  border:4px solid white;
  color: black; background-color: white; padding: 10px; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; width: 100%; max-width: 500px; height: 150px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); margin-top: 1px;
}
.main-text{
  font-weight:700;
}
.description{
  font-size:10px;
}
@media(max-width:3000px){
  .image{
    width:100%;
    max-width:1000px;
  }
  .container{
    max-width:1000px;
  }
}
@media(max-width:1024px){
  .main-text{
    font-size:20px;
  }
  .description{
    font-size:18px;
  }
  .image{
    height:200px;
  }
  .container{
    height:250px;
  }
}
@media(max-width:435px){
  .title1{
    font-size:25px;
  }
  .image{
    height:300px;
  }
}
@media(max-width:375px){
  .rows{
    overflow:auto;
    height:100vh;
  }
  .title1{
    font-size:20px;
  }
  .image{
    height:200px;
  }
}
</style>
