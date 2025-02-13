<template>
  <div style="background-color:black; height:100vh; width:100%;">
    <div class="d-flex flex-column">
      <h1 style="color:white;" class="pa-5 title1" :class="$vuetify.display.smAndDown? 'text-center' : 'text-left'">What Are We Offering?</h1>
      <v-row class="rows d-flex" style="height:80vh; overflow:auto;">
        <v-col :cols="$vuetify.display.smAndDown? 12 : 4" class="pa-0 ma-0">
          <div class="pa-10">
            <img
                class="image"
                src="https://img.freepik.com/free-photo/auto-mechanic-checking-car-engine_1303-14032.jpg"
                style="border:10px solid white;"
            >
            <div class="container">
              <h4 class="main-text" style="margin: 0 0 10px 0;">Maintaining your car
              </h4>
              <span style="font-size:16px;" class="description">
             Regular maintenance of related partswith the centering, such as traps andsuspension system, is key to the correctoperation of the car.</span>
          </div>

          </div>
        </v-col>
        <v-col :cols="$vuetify.display.smAndDown? 12 : 4" class="pa-0 ma-0">
          <div class="pa-10">
            <img  style="border:10px solid white;" class="image" src="https://www.3dautocenter.com/uploads/7/2/7/0/72709373/auto-electrical-diagnostics_orig.jpg">
            <div
                class="container"
            >
              <h4 class="main-text" style="margin: 0 0 10px 0;">Centering Your Car</h4>
              <span style="font-size:16px;" class="description">
        The centering of the front and rear ladder ensures proper functioning of the suspension and better stability.
      </span>
          </div>
          </div>
        </v-col>
        <v-col :cols="$vuetify.display.smAndDown? 12 : 4" class="pa-0 ma-0">
          <div class="pa-10">
            <img
                class="image"
                src="https://roskillauto.co.nz/wp-content/uploads/2021/11/20211123_123348-1024x461.jpeg"
                style="border:10px solid white;"
            >
            <div
                class="container"
            >
              <h4 class="main-text" style="margin: 0 0 10px 0;">Tire change</h4>
              <span style="font-size:16px;" class="description">Changing and balancing tires for safety andcomfortable ride. The properly balanced onestires improve handling andextend the life of the tires.
      </span>
          </div>
          </div>
        </v-col>
      </v-row>
    </div>
  </div>
</template>
<script>
export default{
  data(){
    return{

    }
  },
  mounted(){
    console.log('asokdas' , this.$vuetify.display.name);
  }
}
</script>
<style>
.image{
width: 100%; max-width: 500px; height: 300px; object-fit: cover;
}
.container{
  border:4px solid white;
color: black; background-color: white; padding: 10px; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; width: 100%; max-width: 500px; height: 150px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); margin-top: 0;
}
.main-text{
  font-weight:700;
}
.description{
  font-size:10px;
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
