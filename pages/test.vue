<!-- WeeklyProgram.vue -->
<template>
  <v-container>
    <v-row>
      <v-col
        v-for="(day, index) in weekDays"
        :key="index"
        cols="12"
        md="6"
        lg="4"
      >
        <v-card class="pa-3">
          <v-card-title class="headline">{{ day.name }}</v-card-title>
          <v-divider></v-divider>
          <v-list dense>
            <v-list-item-group v-if="day.events.length > 0">
              <v-list-item v-for="(event, eventIndex) in day.events" :key="eventIndex">
                <v-list-item-content>
                  <v-list-item-title>{{ event.title }}</v-list-item-title>
                  <v-list-item-subtitle>{{ event.time }}</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
            <v-list-item v-else>
              <v-list-item-content>Aucun événement prévu</v-list-item-content>
            </v-list-item>
          </v-list>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      weekDays: [
        { name: 'Lundi', events: [{ title: 'Réunion', time: '10:00 - 11:30' }, /* ... */] },
        { name: 'Mardi', events: [{ title: 'Présentation', time: '14:00 - 15:30' }, /* ... */] },
        { name: 'Mercredi', events: [] }, // Aucun événement prévu
        // Ajoutez les autres jours de la semaine avec leurs événements respectifs
      ],
    };
  },
};
</script>

<style scoped>
/* Ajoutez du style supplémentaire si nécessaire */
</style>
