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
                        sm="6"
                        md="4"
                      >
                      <v-text-field
                            v-model="don.idtrans"                  
                            label="Numéro de la transaction"
                            prepend-icon="mdi-identifier"
                            required
                          ></v-text-field>                    
                   
                      </v-col> 
                      <v-col
                        cols="12"
                        sm="6"
                        md="4"
                      >
                     
                          <v-file-input
                          id="file"
                          ref="file"
                          v-model="imageUrl"
                          type="file"
                          label="Upload Preuve de transaction"
                          accept="image/*"
                          title="Upload Image"
                          
                          prepend-icon="mdi-attachment"
                          required
                            @change="handleFileUpload"     
                        ></v-file-input>
                        <v-progress-linear
                        v-if="imageUrl !==''"
                            v-model="knowledge"
                            height="20"
                          >                          
                            <strong>{{ Math.ceil(knowledge) }}%</strong>
                        </v-progress-linear>
                        <v-btn   
                                v-if="imageUrl !==''"     
                                :loading="loading"          
                                color="success"
                                size="medium"          
                                variant="elevated"
                                @click="submitFile"
                              >
                                Upload
                              </v-btn>
                       
                    
                      </v-col> 
                      
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
      handleFileUpload (e) {     
        // this.file = e.target.valuefile        
     //  console.log(e)
        
      },
        async submitFile () { 
     this.visible = true      
        const formData = new FormData()      
        formData.append('imgfile', this.imageUrl)
      
        this.$axios.defaults.headers.common.Authorization = 'Bearer ' + localStorage.getItem('authToken')
        
        await this.$axios.post('don/upload/', formData, {
          headers: { 'Content-Type': 'multipart/form-data' },
          onUploadProgress: function (progressEvent) {
            this.knowledge = parseInt(Math.round((progressEvent.loaded / progressEvent.total) * 100))
          }.bind(this),
        },
        ).then(res => { 
          
           this.don.preuve = res.data.path 
           // this.$emit('onDevoirUpload', this.path); 
            
           this.$notifier.showMessage({ content: 'Fichier upload avec succès!' , color: 'success'}); 
           this.dialog = false })
          .catch(err => console.log(err))  
          
        this.visible = false
        this.loading = false
       },
      
        }
      }
</script>
