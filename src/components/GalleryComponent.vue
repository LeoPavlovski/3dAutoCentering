<template>
  <div class="carousel__wrapper">
    <swiper
        :modules="[Autoplay, Navigation, Pagination]"
        :slides-per-view="1"
        :space-between="10"
        :loop="true"
        :autoplay="{ delay: 3000, disableOnInteraction: false }"
        :navigation="true"
        :breakpoints="{
        480: { slidesPerView: 1.2 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 }
      }"
    >
      <swiper-slide v-for="image in images" :key="image.id">
        <img :src="image.url" alt="Car Image" class="car-image" />
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return { Autoplay, Navigation, Pagination };
  },
  data() {
    return {
      images: Array.from({ length: 15 }, (_, index) => ({
        id: index + 1,
        url: `/Images/car${index + 1}.jpeg`,
      })),
    };
  },
};
</script>

<style scoped>
.carousel__wrapper {
  width: 100%;
  height: 100vh;
  background: black;
  display: flex;
  justify-content: center;
  align-items: center;
}

.car-image {
  width: 100%;
  height: auto;
  min-height: 600px;
  object-fit: contain;
}

</style>
