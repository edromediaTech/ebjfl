<!-- UpcomingEvents.vue -->
<template>
    <v-container>
      <v-row>
        <!-- Première colonne pour les événements -->
        <v-col v-for="(event, index) in januaryEvents" :key="index" cols="12" md="4">
          <v-card>
            <v-img :src="event.image" aspect-ratio="2.5">
              <v-card-title class="white--text">{{ event.title }}</v-card-title>
            </v-img>
            <v-card-subtitle>{{ formatDate(event.date) }}</v-card-subtitle>
            <v-card-text>{{ event.description }}</v-card-text>
          </v-card>
        </v-col>
  
        <!-- Deuxième colonne pour l'image -->
        <v-col cols="12" md="8">
          <v-card>
            <v-img src="URL_DE_VOTRE_IMAGE" aspect-ratio="2.5"></v-img>
            <!-- Ajoutez du texte ou d'autres éléments selon vos besoins -->
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script>
  export default {
    props: {events:{type:Array, default:() =>[]}},
    computed: {
      januaryEvents() {
       // const now = new Date();
        return this.events.filter(
          (event) => new Date(event.date).getMonth() === 0 // 0 correspond à janvier
        );
      },
    },
    methods: {
      formatDate(dateString) {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString('fr-FR', options);
      },
    },
  };
  </script>
  
  <style scoped>
  /* Ajoutez du style supplémentaire si nécessaire */
  </style>
  