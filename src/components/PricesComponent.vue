<template>
  <div class="image-container">
    <img v-if="$vuetify.display.mdAndUp && $i18n.locale === 'mkd'" :src="priceWebMacedonian" alt="3D Centering Prices" class="full-screen-image"  />
    <img v-if="$vuetify.display.mdAndUp && $i18n.locale === 'en'" :src="priceWebEnglish" alt="3D Centering Prices" class="full-screen-image" />
    <img v-if="$vuetify.display.mdAndUp && $i18n.locale === 'al'" :src="priceWebAlbanian" alt="3D Centering Prices" class="full-screen-image" />
    <img style="width:100%; margin-top:-150px;" v-if="$vuetify.display.smAndDown && $i18n.locale === 'al'" :src="priceMobileAlbanian">
    <img style="width:100%; margin-top:-150px;" v-if="$vuetify.display.smAndDown && $i18n.locale === 'en'" :src="priceMobileEnglish">
    <img style="width:100%; margin-top:-150px;" v-if="$vuetify.display.smAndDown && $i18n.locale === 'mkd'" :src="priceMobileMacedonian">
  </div>
</template>

<script>
import i18n from "@/i18n";

export default {
  computed: {
    i18n() {
      return i18n
    }
  },
  data() {
    return {
      price: "/Images/3dCenteringPrices.svg",
      priceMobileMacedonian: "/Images/Macedonian.svg",
      priceMobileAlbanian: "/Images/Albanian.svg",
      priceMobileEnglish: "/Images/English.svg",
      priceWebMacedonian: "/Images/MacedonianPriceBig.svg",
      priceWebEnglish: "/Images/EnglishPriceBig.svg",
      priceWebAlbanian: "/Images/AlbanianPriceBig.svg",
    };
  },
  mounted(){
    console.log('asiidijd' ,this.$i18n.locale);
  }
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
  max-width: 100vw; /* Ensures the image fits well within the viewport */
  max-height: 90vh; /* Prevents the image from overflowing */
  object-fit: contain; /* Keeps the image fully visible without distortion */
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .full-screen-image {
    max-width: 100vw;
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
