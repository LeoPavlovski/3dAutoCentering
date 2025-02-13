<template>
  <div class="image-container">
    <v-img v-if="$vuetify.display.mdAndUp" :src="price" alt="3D Centering Prices" class="full-screen-image" />
    <img style="width:100%; margin-top:-150px;" v-if="$vuetify.display.smAndDown" :src="priceMobile">
  </div>
</template>

<script>
export default {
  data() {
    return {
      price: "/Images/3dCenteringPrices.svg",
      priceMobile: "/Images/Cenovnik2.svg",
    };
  },
};
</script>

<style scoped>
.image-container {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: black;
  overflow: hidden;
  padding: 10px; /* Prevents overflow issues on some mobile devices */
}

.full-screen-image {
  max-width: 90vw; /* Ensures the image fits well within the viewport */
  max-height: 90vh; /* Prevents the image from overflowing */
  object-fit: contain; /* Keeps the image fully visible without distortion */
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .full-screen-image {
    max-width: 95vw;
    max-height: 85vh;
  }
}

@media (max-width: 480px) {
  .full-screen-image {
    max-width: 100vw;
    max-height: 80vh;
  }
}
</style>
