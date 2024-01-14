<template>
    <v-app>
      <v-container>
        <!-- <v-btn @click="openDialog"></v-btn> -->
  
        <v-dialog v-model="dialog" max-width="400">
            <a href="/dons">
          <v-card>
            <v-card-title>
              <!-- <span class="headline">Fenêtre Modale</span> -->
              <v-spacer></v-spacer>
              <v-btn icon @click="closeDialog">
                <v-icon>mdi-close</v-icon>
              </v-btn>
            </v-card-title>
            <v-card-text>
              <v-expand-transition>
                <div v-if="dialog">
                  <v-alert outlined type="success">
                   <b>Merci pour votre soutien !</b>  <br>
                    Nous apprécions vraiment votre générosité.
                    <br><br>
                <b> Que Dieu vous bénisse abondamment!</b> 
                  </v-alert>
                </div>
              </v-expand-transition>
  
            
            </v-card-text>
            <v-card-actions>
              
              
            </v-card-actions>
          </v-card>
        </a>
        </v-dialog>
   
      </v-container>
    </v-app>
  </template>
  
  <script>
  export default {
    data() {
      return {
        dialog: true,
      };
    },
    methods: {
      openDialog() {
        this.dialog = true;
      },
      closeDialog() {
        this.dialog = false;
      },
    },
  };
  </script>
  
  <style>
  /* Ajoutez des styles personnalisés au besoin */
  </style>
  