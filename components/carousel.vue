<template>
<v-container fluid >
  <!-- <div class="paddingTB60 site-heading"> -->
  <v-row>
    <v-col md="12" sm="12">
  <v-carousel
   class="car"
    cycle
    data-overlay="4" 
    height="auto"
    hide-delimiter-background
    show-arrows-on-hover
  >
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
    ></v-carousel-item>
  </v-carousel>
    </v-col>
   
  </v-row>
</v-container>
</template>
<script>
  export default {
    data () {
      return {
          items: [
          {
            src: 'img/dorvenica1.jpeg',
          },
          {
            src: 'img/dorvenica3.jpeg',
          },
          {
            src: 'img/dorvenica4.jpeg',
          },
          {
            src: 'img/dorvenica6.jpeg',
          },
          {
            src: 'img/dorvenica2.jpeg',
          },
         
          
                 
         
        ],
          cars: [
             {
            src: 'img/master1.jpeg',
          },
        
           {
            src: 'img/upnch.jpeg',
          },
               
           {
            src: 'img/car12.jpeg',
          },       
            {
            src: 'img/car3.jpeg',
          },      
         
          
          {
            src: 'img/car13.jpeg',
          },
         
          
          {
            src: 'img/car15.jpeg',
          },
          
          {
            src: 'img/car13.jpeg',
          },
         
          
          {
            src: 'img/car15.jpeg',
          },
          {
            src: 'img/car8.jpeg',
          },
          {
            src: 'img/integ.jpeg',
          },
          {
            src: 'img/car14.jpeg',
          },
         
          {
            src: 'img/car11.jpeg',
          },         
         
        ],

      }
    },
  }
</script>
<style scoped>
.car {
  padding: 0;
  margin: 0;
  height:0;
}
</style>
