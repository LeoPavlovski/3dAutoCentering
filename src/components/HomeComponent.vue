<template>
  <div style="position: relative;">
    <!-- Dark overlay -->
    <div
        style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0, 0, 0, 0.5); z-index: 1;">
    </div>

    <!-- Centered Logo -->
    <img
        :src="Logo"
        style="position: absolute; top: 25%; left: 50%; transform: translate(-50%, -50%); z-index: 2; width: 300px; height: 300px;"
    >

    <!-- Title under the Logo -->
    <h1
        style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); z-index: 2; color: #f79f00; font-size: 120px; font-weight: bold; text-align: center;"
    >
      3D AUTO
    </h1>
    <h1
        style="position: absolute; text-transform:uppercase; top: 64%; left: 50%; transform: translate(-50%, -50%); z-index: 2; color: #f79f00; font-size: 120px; font-weight: bold; text-align: center;"
    >
     centering
    </h1>

    <!-- Background Image -->
    <img
        style="width: 100%; height: 100vh; object-fit: cover;"
        src="https://www.shutterstock.com/image-photo/closeup-car-wheel-indoors-service-600nw-2103819539.jpg"
    >
    <h1
        style="position: absolute; text-transform:uppercase; top: 79%; left: 50%; transform: translate(-50%, -50%); z-index: 2; color: white; font-size: 30px; font-weight: bold; text-align: center;"
    >
     Automotive service
    </h1>
  </div>


</template>

<script>
import logo from '/public/Images/3dCenteringLogo.svg'
export default{
  data(){
    return{
Logo:logo
    }
  },
  methods:{

  }
}
</script>