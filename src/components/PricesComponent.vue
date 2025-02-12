<template>
  <div style="background:black;">
    <div class="full-screen-image">
      <v-img :src="price" alt="3D Centering Prices" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      price: 'Images/3dCenteringPrices.svg'
    };
  }
};
</script>

<style scoped>
.full-screen-image {
  width: 100%;
  height: 100vh;
  overflow: hidden;
}

.full-screen-image img {
  width: 100%;
  height: 100%;
  object-fit: cover; /* Ensures the image covers the screen without distortion */
}
</style>
