<template>
  <v-row justify="center">
    <v-dialog
      v-model="dialog"
      persistent
      max-width="300px"
    >
      <template #activator="{ on, attrs }">                   
        <v-btn               
          color="blue darken-4"          
          title="Télécharger image"
          v-bind="attrs"
          class="mx-1 mt-4"
          v-on="on"
        >
         Ajouter Fichier
          <v-icon>mdi-upload</v-icon> 
        </v-btn>
      </template>
    
      <v-card>
        <v-card-title>
          <span class="text-h5"> Upload image</span>
        </v-card-title>
        <v-card-text>
          <v-container>
           
            <v-row>
              <v-col
                cols="12"
                md="12"
              >
                 
                <v-file-input
           
                  id="file"
                   ref="file"
                  v-model="imageUrl"
                  name=fichier
                  type="file"
                  label="Upload fichier"
                  accept=""
                  hide-input
                  prepend-icon="mdi-attachment"
                  required
                    @change="handleFileUpload"
                />
              
              </v-col>
             
              <v-progress-linear
                v-model="knowledge"
                height="25"
              >
                <strong>{{ Math.ceil(knowledge) }}%</strong>
              </v-progress-linear>
            </v-row>
          
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn
            color="blue darken-1"
            text
            @click="dialog = false"
          >
            Cancel
          </v-btn>

          <v-btn
            color="blue darken-1"
            class="mr-0"
            @click="submitFile"          
          >            
            Upload
          </v-btn>
          <v-progress-circular
              v-if="loading"
              :size="30"
              color="primary"
              indeterminate
            />
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>
<script>
  
  // import { checkTypeFile } from '../../../helpers/outils.js'
  export default {
   props:{devoir :{type: Object, default:null} },
      
    data: () => ({

      dialog: false,
      imageUrl:[],
      documentUrl: [],
      description:'',
      libelle:'',
      path: 'rien',
      knowledge: 0,
      loading: false,
      file: '',
    }),

    methods: {
      
      handleFileUpload (file) {
         this.file = file  
              
       // this.fichier = this.fichier
       // this.nomFichier = file.file.name
       
        // this.$refs.file.files[0]
      },
      async submitFile () {
        /*
    Initialize the form data
  */
        const formData = new FormData()

        /*
    Add the form data we need to submit
  */
        // if (this.path_src.size > 100 * 1024 * 1024) {
        //   this.$store.dispatch('set_snackbar', { showing: true, text: 'La taille du Fichier depasse 100 mb:  ' + (this.path_src.size / (1024 * 1024)).toFixed(2) + 'mb' })
        //   return false
        // }
        // if (!checkTypeFile(this.path_src, ['mp4', 'mp3', 'jpg'])) {
        //   this.$store.dispatch('set_snackbar', { showing: true, text: ' Le type du fichier est incorrect (mp4, mp3, jpg) ' })
        //   return false
        // }
        formData.append('imgfile', this.file)

      //  formData.append('cours', "cours")
        // formData.append('classematiere_salle', this.matiere)
        /*
    Make the request to the POST /single-file URL
  */
        this.$axios.defaults.headers.common.Authorization = 'Bearer ' + localStorage.getItem('authToken')
        
        await this.$axios.post('don/upload/', formData, {
          headers: { 'Content-Type': 'multipart/form-data' },
          onUploadProgress: function (progressEvent) {
            this.knowledge = parseInt(Math.round((progressEvent.loaded / progressEvent.total) * 100))
          }.bind(this),
        },
        ).then(res => { 
           this.path = res; 
           this.$emit('onPreuveUpload', this.path); 
            
           this.$notifier.showMessage({ content:  'Fichier upload avec succès!' , color: 'success'}); 
           this.dialog = false })
          .catch(err => console.log(err))          
       },
    },

  }
</script>
