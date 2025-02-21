<template>
  <div class="carousel__wrapper">
    <v-img
        :src="siteBackground"
        cover
        class="full-screen-image"
    />
    <v-card
        style="background-color: transparent;"
        :style="$vuetify.display.lgAndUp ? 'padding: 50px; margin-top:30px;' : ''"
    >
      <div style="border:6px solid white;">
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

           <div style="margin:5px;">
             <img :src="image.url" alt="Car Image" class="car-image"/>
          </div>

        </swiper-slide>
      </swiper>
        </div>
    </v-card>
  </div>
</template>

<script>
import {Swiper, SwiperSlide} from "swiper/vue";
import {Autoplay, Navigation, Pagination} from "swiper/modules";
import background1 from '/public/Images/background1.webp';

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
    return {Autoplay, Navigation, Pagination};
  },
  data() {
    return {
      siteBackground: background1,
      images: Array.from({length: 15}, (_, index) => ({
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
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top:-60px;
}

.car-image {
  width: 100%;
  height: auto;
  object-fit: contain;
  margin-top: 10px;
  border-radius: 15px;
  transition: transform 0.5s ease-in-out, box-shadow 0.3s ease-in-out;
}

.car-image:hover {
  transform: scale(0.9); /* Makes the image pop up */
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.3); /* Adds a shadow for a better effect */
  cursor: pointer;
}
.full-screen-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  object-fit: cover;
}
</style>
