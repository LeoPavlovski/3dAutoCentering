<template>
  <v-container fluid class="fill-height pa-0 ma-0">
    <!-- Background Image -->
    <img
        style="width: 100%; height: 100vh; object-fit: cover; position: absolute; top: 0; left: 0; z-index: -1;"
        src="https://www.shutterstock.com/image-photo/closeup-car-wheel-indoors-service-600nw-2103819539.jpg"
        alt="Background Image"
    />

    <!-- Main Content -->
    <v-row no-gutters class="fill-height">
      <v-card class="info-card pa-6" elevation="10" hover>
        <v-card-title class="text-h4 font-weight-bold mb-4">{{ $t('contactUs') }}</v-card-title>
        <v-row>
          <!-- Map Embed -->
          <v-col cols="12" md="6">
            <v-card class="map-card" elevation="5">
              <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d951.971333374431!2d20.9161448!3d41.7845354!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x135157fec01f9d99%3A0x936134c415411d2b!2s3D%20Auto%20Centering%20Gostivar!5e1!3m2!1sen!2smk!4v1739461830381!5m2!1sen!2smk"
                  style="border:0; width: 100%; height: 100%;"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </v-card>
          </v-col>

          <!-- Contact Info -->
          <v-col cols="12" md="6" class="d-flex align-center justify-center">
            <v-card class="info-card-inner pa-6" elevation="10" hover>
              <v-list>
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
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      contact: "/Images/3dCarCenteringContact.svg",
    };
  },
};
</script>

<style scoped>
.fill-height {
  height: 100%;
}

.image {
  height: 100%;
  width: 100%;
  object-fit: cover;
}

.info-card {
  height: 100%;
  width: 100%;
  border-radius: 15px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent dark background */
}

.info-card-inner {
  max-width: 700px;
  width: 100%;
  border-radius: 20px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

}

.map-card {
  height: 60vh; /* Set the desired height for the map */
  border-radius: 50px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  background-color: rgba(255, 255, 255, 0.5); /* Semi-transparent white background */
}

.map-card:hover,
.info-card-inner:hover {
  transform: scale(1.03); /* Slightly increase the size */
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2); /* Make the shadow stronger */
}

.v-list-item {
  padding: 8px 0;
}

.v-list-item-icon {
  margin-right: 16px;
}

.v-list-item-title {
  font-weight: 500;
  font-size: 1.1rem;
}

.v-list-item-subtitle {
  font-size: 0.9rem;
  color: #555;
}

@media (max-width: 960px) {
  .map-card {
    height: 200px; /* Adjust map height for smaller screens */
  }

  .info-card-inner {
    padding: 16px; /* Adjust padding on smaller screens */
  }

  .v-list-item-title {
    font-size: 1rem; /* Adjust font size for better readability */
  }

  .v-list-item-subtitle {
    font-size: 0.85rem; /* Adjust subtitle font size */
  }

  .v-card-title {
    font-size: 1.5rem; /* Adjust card title font size */
  }
}
</style>
