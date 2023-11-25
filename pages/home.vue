<template>
<v-container fluid>
   <v-row >  
      <v-col cols="12" sm="12" md="12" class="image">
       <br><br><br><br>
        <span   class="fill-height pa-2 mt-4"  align="center" > 
        <p class="text-h3 font-weight-light" style="color:white">Bienvenue sur la Plateforme de</p>
        <p class="text-h3 font-weight-light" style="color:white">l'UPGA</p>
       
       
        </span>
        <!-- <carouselText />  -->
  <!-- <v-img  src= 'images/comptable.jpg'  height="600" width="auto" />   -->
  
      </v-col>
   </v-row>
</v-container> 
</template>

<script>
// import carouselText from '../components/carouselText.vue'
    export default {
 // components: { carouselText },
        mounted()
        {
          // this.$router.push('/login')
        }
    }
</script>

<style scoped>
.image{
  background: url('/images/comptable.jpg') no-repeat ;
  background-size: cover;
  height: 100vh;
 background-color: black;
 
}

</style>