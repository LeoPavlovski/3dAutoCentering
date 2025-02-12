<template>
  <div style="background-color:black; height:100vh; width:100%;" class="pa-10">
    <h1 style="color:white;" class="pa-5 title1">What Are We Offering?</h1>
    <v-row class="rows">
      <v-col :cols="$vuetify.display.width >= 1024 ? 4 : ($vuetify.display.width <= 427 ? 12 : 6)"  style="display: flex; flex-direction: column; align-items: center; justify-content: space-between;">
        <img
           class="image"
            src="https://img.freepik.com/free-photo/auto-mechanic-checking-car-engine_1303-14032.jpg"
        >
        <div
            class="container"
        >
          <h4 class="main-text" style="margin: 0 0 10px 0;">Maintaining your car
          </h4>
          <span class="description">
             Regular maintenance of related parts
      with the centering, such as traps and
      suspension system, is key to the correct
      operation of the car.
      </span>
        </div>
      </v-col>
      <v-col v-show="$vuetify.display.width >=1024" :cols="$vuetify.display.width >= 1024 ? 4 : ($vuetify.display.width <= 427 ? 12 : 6)"  style="display: flex; flex-direction: column; align-items: center; justify-content: space-between;">
        <img
            class="image"
            src="https://www.3dautocenter.com/uploads/7/2/7/0/72709373/auto-electrical-diagnostics_orig.jpg"
        >
        <div
            class="container"
        >
          <h4 class="main-text" style="margin: 0 0 10px 0;">Centering Your Car</h4>
          <span class="description">
        The centering of the front and rear ladder ensures proper functioning of the suspension and better stability.
      </span>
        </div>
      </v-col>
     <v-col class="test" :cols="$vuetify.display.width >= 1024 ? 4 : ($vuetify.display.width <= 427 ? 12 : 6)"  style="display: flex; flex-direction: column; align-items: center; justify-content: space-between;">
        <img
            class="image"
            src="https://roskillauto.co.nz/wp-content/uploads/2021/11/20211123_123348-1024x461.jpeg"
        >
        <div
            class="container"
        >
          <h4 class="main-text" style="margin: 0 0 10px 0;">Tire change</h4>
          <span class="description">
       Changing and balancing tires for safety and
comfortable ride. The properly balanced ones
tires improve handling and
extend the life of the tires.
      </span>
        </div>
      </v-col>
    </v-row>
  </div>
</template>



<style>
.image{
width: 100%; max-width: 500px; height: 300px; object-fit: cover;
}
.container{
color: black; background-color: white; padding: 20px; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; width: 100%; max-width: 500px; height: 150px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); margin-top: 10px;
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
@media(max-width:427px){
  .rows{
    overflow:auto;
    height:560px;
  }
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
