<template>
    <v-container
      id="regular-tables"
      fluid
      tag="section"
    >
      <!-- <base-material-card       
        title="Gestion Membres"
        class="px-5 py-3 mt-4"
      > -->
  
        <v-card class="px-4 mt-2 mx-4">
                    
                      <v-row>
                            <v-col
                          cols="12"
                          sm="6"
                          md="6"
                        >
                          <v-text-field
                            v-model="editedItem.nom"
                            prepend-icon="mdi-account-multiple"
                            label="Nom du Groupe*"
                             :rules="[v => !!v || 'Champ obligatoire']"
                             maxlength="150"
                             required
                          />
                        </v-col>
                          <v-col
                          cols="12"
                          sm="6"
                          md="6"
                        >
                          <v-text-field
                            v-model="editedItem.sigle"
                            
                            label="Sigle"
                             maxlength="10"
                           
                             required
                          />
                        </v-col>    
                      
                     
                        <v-col
                          cols="12"
                          sm="6"
                          md="6"
                        >
                          <v-text-field
                            v-model="editedItem.fondation"
                            prepend-icon="mdi-calendar"
                            label="Date de Fondation"
                            type="date"
                          />
                        </v-col>
                        <v-col
                          cols="12"
                          sm="6"
                          md="6"
                        >
                        <v-text-field
                                  v-model="editedItem.email"
                                  prepend-icon="mdi-at"
                                  label="Email"
                                  :rules="emailRules"
                                  required
                          ></v-text-field>
                        </v-col>
                          <v-col
                          cols="12"
                          sm="6"
                          md="6"
                        >
                          <v-text-field
                            v-model="editedItem.responsable"
                            prepend-icon="mdi-account"
                            :rules="[v => !!v || 'Champ obligatoire']"
                            label="Responsable*"
                             maxlength="50"
                          />
                        </v-col>
                          <v-col
                          cols="12"
                          sm="6"
                          md="6"
                        >
                          <v-text-field
                            v-model="editedItem.maestro"
                            prepend-icon="mdi-account"
                            label="Maestro"
                             maxlength="50"
                          />
                        </v-col>
                          
                          <v-col
                          cols="12"
                          sm="6"
                          md="6"
                        >
                          <v-text-field
                            v-model="editedItem.telephone"
                            prepend-icon="mdi-phone"
                            label="Tél"                                                
                             maxlength="15"
                          />
                        </v-col> 
                          <v-col
                          cols="12"
                          sm="6"
                          md="6"
                        >
                          <v-text-field
                            v-model="editedItem.whatsapp"
                            prepend-icon="mdi-whatsapp"
                            :rules="[v => !!v || 'Champ obligatoire']"
                            label="Whatsapp*"                                                
                             maxlength="15"
                          />
                        </v-col>                                                                      
                      </v-row>                  
                  
                  <v-card-actions>
                    <v-spacer />
                    <!-- <v-btn
                      color="blue darken-1"
                      text
                      @click="close"
                    >
                      Cancel
                    </v-btn> -->
                    <v-btn
                      color="blue darken-1"                    
                      @click="storeGroupe"
                    >
                      Enregistrer
                    </v-btn>
                  </v-card-actions>
                </v-card>
                 
      <!-- </base-material-card> -->
    </v-container>
  </template>
  <script>
  
 // import membreZone from '~/components/membreZone';
     export default {
       
      //  middleware: 'responsable',          
    data: () => ({
        texte :'',
        trtexte:'',
        selected: [],
        dialog: false,
        visible: false,
        classe: '',
        dataDistricts:[],
        dataZones:[],
        zoneNom:'',
        zone:'',
        zones:[],
        district: '',
        districts: [],
        clas :[],
        membres: [],
        search:'',
        departements:[],
        dialogDelete: false,
        ajouter : false,
        sexeop : [{text:'Masculin', value:1}, {text:'Féminin', value:0}],
        menu: false,
        modal: false,
        menu2: false,
        nbEleve:[],
        transferts:[],
        centres: [],
        emailRules: [
                (v) => !!v || 'E-mail doit être valide',
                (v) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail doit être valide'
              ],
            
          
        editedIndex: -1,
        editedItem: {
          nom:'',
          sigle: '',          
          responsable: '',        
          fondation:'',
          email:'',
          maestro: '',
          telephone : '',
          whatsapp: ''
          },
        defaultItem: {
          nom:'',
          prenom: '',
          sexe: '',
          naissance: '',        
          telephone:'',
          adresse:'',
          nom_mere: '',
          zone : '',
          baptise: ''
            },
            headprint: [       
            { text: "Code", value: "code" },
            { text: "Nom", value: "nom" },
            { text: "Prénom", value: "prenom" },    
            { text: 'Naissance', value: 'naissance' },
            // { text: 'Date', value: 'datenais' },
            { text: 'Sexe', value: 'sexe' },
            { text: 'Tel', value: 'telephone' },
            { text: 'Prenom Mère', value: 'prenom_mere' },
           
            ]
            
      }),
  
      computed: {
        
        headers (){
            const  headers= [       
            { text: "ID", value: "code" },
            { text: "Nom", value: "nom" },
            { text: "Prénom", value: "prenom" },    
             { text: 'Naissance', value: 'date_naissance' },
             { text: 'Sexe', value: 'sexe' },
            { text: 'Tel', value: 'numero' },
            { text: 'Prenom Mère', value: 'prenom_mere' },        
            { text: 'Baptisé', value: 'baptise' },        
            { text: 'Actions', value: 'actions', sortable: false },
         ];
        if (this.editedItem.sexe === true){
             headers.push({ text: "Masculin", value: true })
             headers.push({ text: "Féminin", value: false})
           }
        return headers
          },
  
        formTitle () {
          return this.editedIndex === -1 ? 'Membre' : 'Editer '
        },
      },
  
      watch: {
        dialog (val) {
          val || this.close()
        },
        dialogDelete (val) {
          val || this.closeDelete()
        },
      },
  
      created () {
      // this.$axios.defaults.headers.common.Authorization = 'Bearer ' + localStorage.getItem('authToken')
      },
  
      mounted () {
      
        },
  
      methods: {
  
        
        updateEleve (eleve) {  
          this.visible = true  
           this.editedItem.classe_id = this.classe        
           this.editedItem.salle_id = this.salle        
          this.$axios.patch( 'eleve/' + eleve._id, this.editedItem).then(res => {
             if (res.status === 201) { 
                 this.$notifier.showMessage({ content: 'Elève modifié', color: 'success' })            
                   return true 
              } 
              else {   
                this.$notifier.showMessage({ content: 'Echec', color: 'error' })         
                 return false 
              }                  
          })
           this.visible = false
        },
  
  
       editItem (item) {      
          this.editedIndex = this.eleves.indexOf(item)
          this.editedItem = Object.assign({}, item)
          this.dialog = true
       },
  
        deleteItem (item) {
          this.editedIndex = this.eleves.indexOf(item)
          this.editedItem = Object.assign({}, item)
          this.dialogDelete = true
        },
  
      deleteItemConfirm () {
          //  if(checkHaveChildren(this.editedItem) === true){             
          //        this.$notifier.showMessage({ content: 'Suppression echouée', color: 'error' })
          //         this.closeDelete()    
          //        return false
          //   }
          this.deleteEleve(this.editedItem)       
          this.eleves.splice(this.editedIndex, 1)
          this.closeDelete()
        },
  
     
  
          close(){  
              this.editedItem = {}                
              this.dialog=false              
          },
          
        closeDelete () {
          this.dialogDelete = false
          this.$nextTick(() => {
            this.editedItem = Object.assign({}, this.defaultItem)
            this.editedIndex = -1
          })
        },
  
   
  
       
      async storeGroupe () {  
           if(this.editedItem.nom ==='' || this.editedItem.whatsapp ==='' || this.editedItem.responsable===''){
             this.$notifier.showMessage({ content: 'Veuillez saisir les champs obligatoires', color: 'error' })
            return false  
          } 
          this.visible = true        
                       
        //  this.$axios.defaults.headers.common.Authorization = 'Bearer ' + localStorage.authToken         
          await this.$axios.post('groupechant/', this.editedItem).then((res, error) => {
                                 
                // console.log(res.error.code)                  
            if (res.status === 201) {
               this.membres.push(res.data)             
               this.$notifier.showMessage({ content: 'Enregistrement réussi', color: 'success' })    
            } 
            
           else {
            console.log(error) 
                this.$notifier.showMessage({ content: 'Enregistrement déjà échoué.', color: 'info' }) 
            }
           
           
    
          
          })
          this.loading = false
           this.visible = false
        },
  
       
  
       
        showSnackbar (){
           this.$notifier.showMessage({ content: 'veuillez saisir les champs obligatoires', color: 'info' })             
        },
  
        
      },
    }
  </script>
  <style scoped>
  /* .v-progress-circular {
    margin: 1rem;
  } */
  .sectpdf {
    margin: 1em;
    color: #000;
   
  }
   
  </style>
  