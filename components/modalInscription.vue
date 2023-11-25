<template>
    <div>
      <v-row
        justify="center"
      >
        <!-- <v-btn
          color="primary"
          class="ma-2"
          x-small
          text
          @click="dialog = true"
        >
          Inscription 2023-2024
        </v-btn> -->
        <v-dialog
          v-model="dialog"
          width="500"
          class="mt-4"
        >
          <v-card>           
            <v-card-text>
                <a href="/inscription"><img src="img/masterInsc.jpeg" alt=""  width="450"> </a> 
              <a href="/inscription">Cliquez pour vous inscrire</a>
            </v-card-text>
            <v-card-actions>
              <v-btn
                color="primary"
                variant="text"
                x-small
                @click="dialog = false"
              >
                X
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
  
        <!-- <v-dialog
          v-model="dialog2"
          width="auto"
        >
          <v-card>
            <v-card-title>
              Dialog 2
            </v-card-title>
            <v-card-text>
              <v-btn
                color="primary"
                @click="dialog3 = !dialog3"
              >
                Open Dialog 3
              </v-btn>
            </v-card-text>
            <v-card-actions>
              <v-btn
                color="primary"
                variant="text"
                @click="dialog2 = false"
              >
                Close
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
   -->
        <!-- <v-dialog
          v-model="dialog3"
          width="auto"
        >
          <v-card>
            <v-card-title>
              <span>Dialog 3</span>
            </v-card-title>
            <v-card-actions>
              <v-btn
                color="primary"
                variant="text"
                @click="dialog3 = false"
              >
                Close
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog> -->
      </v-row>
    </div>
  </template>
  <script>
  export default {
    data () {
      return {
        dialog: true,
        dialog2: false,
        dialog3: false,
      }
    },
  }
</script>