<template>
  <div>
    <v-img
        :src="siteBackground"
        cover
        class="full-screen-image"
    />
    <div style="position: absolute; top: 10%; left: 0; right: 0; overflow:auto; height:80%;">
      <div class="d-flex align-items-center justify-space-between">
        <h1
            style="color: white;"
            class="pa-5 title1 text-left"
        >
          {{ $t('Location') }}
        </h1>
        <h1
            v-if="$vuetify.display.mdAndUp"
            style="color: white;"
            class="pa-5 title1 text-right"
        >
          {{ $t('ContactInformation') }}
        </h1>
      </div>

      <v-container fluid>
        <v-row
            class="justify-center align-center"
            style="min-height: 50vh; overflow: auto;"
        >
          <!-- Map Column -->
          <v-col
              cols="12"
              md="7"
              class="d-flex justify-center"
          >
            <div style="border: 10px solid white; width: 100%;">
              <div style="margin: 5px; height: 500px;">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d743.7578677838892!2d20.9161448!3d41.7845354!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x135157fec01f9d99%3A0x936134c415411d2b!2s3D%20Auto%20Centering%20Gostivar!5e0!3m2!1sen!2smk!4v1739800715235!5m2!1sen!2smk"
                    width="100%"
                    height="100%"
                    style="border: 0;"
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </v-col>

          <!-- Contact Info Column -->
          <h1
              v-if="$vuetify.display.smAndDown"
              style="color: white;"
              class="pa-5 title1 text-start mr-auto"
          >
            {{ $t('Contact Information') }}
          </h1>
          <v-col
              cols="12"
              md="5"
              class="d-flex justify-center"
          >
            <div style="border: 10px solid white; width: 100%;">
              <div style="margin: 5px; height: 500px;">
                <v-card height="500">
                  <v-list>
                    <template v-for="(item, index) in contactItems" :key="index">
                      <v-list-item style="height:80px;">
                        <div class="box">
                          <div class="d-flex align-center">
                            <v-icon color="orange" class="mr-2">{{ item.icon }}</v-icon>
                            <span  class="font-weight-medium">{{ item.title }}</span>
                          </div>
                          <span  class="font-weight-light" :class="$vuetify.display.width >= 960 && $vuetify.display.width <=1350 ? 'pl-5' : ' '">{{ item.value }}</span>
                        </div>
                      </v-list-item>
                      <v-divider v-if="index !== contactItems.length - 1"></v-divider>
                    </template>
                  </v-list>
                </v-card>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>

</template>
<script>
import background1 from "../../public/Images/background1.webp";
import Tiktok from '/public/Images/tiktok.svg'

export default{
  data(){
    return{
      tiktok: Tiktok,
      siteBackground: background1,
    }
  },
  computed:{
    contactItems() {
      return [
        { icon: 'mdi-account', title: this.$t('contactInfo.contactPerson'), value: 'Slagjan Nikolovski' },
        { icon: 'mdi-phone', title: this.$t('contactInfo.phone'), value: '+389 75 371 855' },
        { icon: 'mdi-map-marker', title: this.$t('contactInfo.address'), value: 'Ulica Belicica br: 136, Gostivar 1230 Macedonia' },
        { icon: 'mdi-instagram', title: this.$t('instagram'), value: '@3dcenteringgostivar' },
        { icon: 'mdi-email', title: this.$t('email'), value: '3dautocentering@gmail.com' },
        { icon: 'mdi-clock', title: this.$t('contactInfo.workingHours'), value: `${this.$t('contactInfo.monSat')} | ${this.$t('contactInfo.sun')}` }
      ];
    }
  },
  mounted(){
  }
}
</script>
<style scoped>
.full-screen-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  object-fit: cover;
}
.image{
  border-top-left-radius:0px; border-top-right-radius:0px;
  width: 100%; max-width: 500px; height: 470px; object-fit: cover;
  transition:0.5s;
  filter:grayscale(0);
}
.image:hover{
  filter:grayscale(1);
  transform:scale(.95);
}
.container{
  border:4px solid white;
  color: black; background-color: white; padding: 10px; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; width: 100%; max-width: 500px; height: 150px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); margin-top: 1px;
}
.main-text{
  font-weight:700;
}
.description{
  font-size:10px;
}
@media(max-width:3000px){
  .image{
    width:100%;
    max-width:1000px;
  }
  .container{
    max-width:1000px;
  }
}
@media(max-width:1024px){
  .main-text{
    font-size:20px;
  }
  .description{
    font-size:18px;
  }
  .image{
    height:200px;
  }
  .container{
    height:250px;
  }
}
@media(max-width:435px){
  .title1{
    font-size:25px;
  }
  .image{
    height:300px;
  }
}
@media(max-width:375px){
  .rows{
    overflow:auto;
    height:100vh;
  }
  .title1{
    font-size:20px;
  }
  .image{
    height:200px;
  }
}
.tiktok-icon {
  cursor: pointer;
  transition: filter 0.3s ease-in-out;
  filter: invert(47%) sepia(94%) saturate(664%) hue-rotate(1deg) brightness(101%) contrast(101%);
}
.v-list-item:hover{
  transition:0.5s;
}
.transition-class:hover{
  transition:0.5s;
}
.transition-class{
  transition:0.5s;
}
.box{
  display:flex;
  align-items:center;
  justify-content:space-between;
}
@media(max-width:450px){
  .box{
    display:block;
    text-align:left;
  }
}
@media(max-width:1024px){
  .sub-text{

  }
}

</style>
