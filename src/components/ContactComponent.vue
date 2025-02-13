<template>
    <v-row  style="background:black; height:100vh;" class="d-flex align-center" >
      <!-- Google Map -->

        <v-col cols="12" md="6" class="item">
          <iframe
              class="full-content"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d951.971333374431!2d20.9161448!3d41.7845354!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x135157fec01f9d99%3A0x936134c415411d2b!2s3D%20Auto%20Centering%20Gostivar!5e1!3m2!1sen!2smk!4v1739441413213!5m2!1sen!2smk"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-referrer-when-downgrade"
          ></iframe>
        </v-col>

        <!-- Image -->
        <v-col cols="12" md="6" class="item">
          <img :src="centering" alt="3D Centering Banner" class="full-content" />
        </v-col>
    </v-row>
</template>

<script>
export default {
  data() {
    return {
      centering: "/Images/3dCarCenteringContact.svg",
    };
  },
};
</script>

<style scoped>

.item {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60vh; /* Ensures equal height */
}

.full-content {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border: none;
  aspect-ratio: 16/9; /* Maintains aspect ratio */
}

@media(max-width:1024px){
  .full-content{
    width:100%;
    height:75%;

  }
}


</style>
