<template>
  <div class="carousel__wrapper">
    <Carousel v-bind="config">
      <Slide v-for="image in images" :key="image.id">
        <img :src="image.url" alt="Car Image" class="car-image" />
      </Slide>

      <template #addons>
        <Navigation />
      </template>
    </Carousel>
  </div>
</template>

<script>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Navigation } from "vue3-carousel";

export default {
  components: {
    Carousel,
    Slide,
    Navigation,
  },
  data() {
    return {
      images: Array.from({ length: 15 }, (_, index) => ({
        id: index + 1,
        url: `/Images/car${index + 1}.jpeg`, // Use your car images
      })),
      config: {
        height: 600,
        itemsToShow: 1,
        gap: 5,
        snapAlign: "center",
        breakpointMode: "carousel", // Determines how breakpoints are handled
        breakpoints: {
          300: { itemsToShow: 2, snapAlign: "center" },
          400: { itemsToShow: 3, snapAlign: "start" },
          500: { itemsToShow: 4, snapAlign: "start" },
        },
      },
    };
  },
};
</script>

<style scoped>
.carousel__wrapper {
  width: 100%;
  max-width: 800px;
  margin: auto;
}

.car-image {
  width: 100%;
  height: 100%;
  object-fit: contain; /* Ensure full image is visible without cropping */
}
</style>
