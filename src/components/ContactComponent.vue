<template>
  <v-container  :style="{ overflow: $vuetify.display.smAndDown ? 'auto' : '' }"  class="pa-0 ma-0 fill-height" fluid style=" background-color: black;">
    <v-row no-gutters>
      <!-- Left column for the map -->
      <v-col
          cols="12"
          md="6"
          :style="{ height: $vuetify.display.smAndDown ? '45vh' : '100vh' }"
      >
        <div class="map-container">
          <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d743.7578677838892!2d20.9161448!3d41.7845354!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x135157fec01f9d99%3A0x936134c415411d2b!2s3D%20Auto%20Centering%20Gostivar!5e0!3m2!1sen!2smk!4v1739800715235!5m2!1sen!2smk"
              width="100%"
              height="100%"
              style="border: 0;"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </v-col>

      <!-- Right column for contact details -->
      <v-col cols="12" md="6" class="d-flex flex-column">
        <v-card height="100%">
          <!-- Image Wrapper -->
          <div class="image-wrapper">
            <v-img class="info-image" :src="img" alt="Banner"></v-img>
          </div>
          <!-- Contact Info -->
          <v-list >
            <v-list-item>
              <v-list-item-icon class="d-flex">
                <v-icon color="orange" class="mr-1" size="23">mdi-account</v-icon>
                <v-list-item-title>{{ $t('contactInfo.contactPerson') }}</v-list-item-title>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-subtitle class="py-1">Slagjan Nikolovski</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>

            <v-list-item>
              <v-list-item-icon class="d-flex">
                <v-icon color="orange" class="mr-1" size="23">mdi-phone</v-icon>
                <v-list-item-title>{{ $t('contactInfo.phone') }}</v-list-item-title>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-subtitle class="py-1">+389 75 371 855</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>

            <v-list-item>
              <v-list-item-icon class="d-flex">
                <v-icon color="orange" class="mr-1" size="23">mdi-map-marker</v-icon>
                <v-list-item-title>{{ $t('contactInfo.address') }}</v-list-item-title>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-subtitle class="py-1">Ulica Belicica br: 136, Gostivar, 1230, Macedonia</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>

            <v-list-item>
              <v-list-item-icon class="d-flex">
                <v-icon color="orange" class="mr-1" size="23">mdi-instagram</v-icon>
                <v-list-item-title>{{ $t('instagram') }}</v-list-item-title>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-subtitle class="py-1">@3dcenteringgostivar</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>

            <v-list-item>
              <v-list-item-icon class="d-flex">
                <v-icon color="orange" class="mr-1" size="23">mdi-email</v-icon>
                <v-list-item-title>{{ $t('email') }}</v-list-item-title>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-subtitle class="py-1">3dautocentering@gmail.com</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>

            <v-list-item>
              <v-list-item-icon class="d-flex">
                <v-icon color="orange" class="mr-1" size="23">mdi-clock</v-icon>
                <v-list-item-title>{{ $t('contactInfo.workingHours') }}</v-list-item-title>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-subtitle>{{ $t('contactInfo.monSat') }}</v-list-item-subtitle>
                <v-list-item-subtitle>{{ $t('contactInfo.sun') }}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default{
  data(){
    return{
      img: "/Images/3dCenteringBanner.svg",
    }
  }
}
</script>

<style scoped>
/* Ensures full-screen layout */



.info-image {
  width: 100%;
  height: auto;
  object-fit: cover;
}

/* Responsive Adjustments */

/* Make map fill its column */
.map-container {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
}

/* Ensures the card fills the column */
.fill-height{
  width:100%;
  height:100%;
}
.image-wrapper {
  position: relative;
  width: 100%;
  background-color: black; /* Ensure background is black */
}

.image-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 1; /* Adjust to make the image darker */
}
</style>
