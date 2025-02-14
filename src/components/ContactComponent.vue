<template>
  <v-container fluid class="fill-height pa-0 ma-0">
    <v-row no-gutters class="fill-height">
      <v-col cols="12" md="6">
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d951.971333374431!2d20.9161448!3d41.7845354!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x135157fec01f9d99%3A0x936134c415411d2b!2s3D%20Auto%20Centering%20Gostivar!5e1!3m2!1sen!2smk!4v1739461830381!5m2!1sen!2smk"
            style="border:0;"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            class="image"
        ></iframe>
      </v-col>
      <v-col  cols="12" md="6">
      <img class="image" :src="contact">
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data(){
    return{
      contact: "/Images/3dCarCenteringContact.svg",
    }
  }
}
</script>

<style scoped>
.fill-height{
  height:100%;
}
.image{
  height:100%;
  width:100%;
  object-fit:cover;
}
</style>
