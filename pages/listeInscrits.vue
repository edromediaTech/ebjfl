<template>
    <v-container
      id="regular-tables"
      fluid
      tag="section"
    >
      <base-material-card
        icon="mdi-clipboard-outline"
        title="Gestion Postulants(es)"
        class="px-5 py-3 mt-4"
      >  
       <v-row>
      <v-col cols="12"  sm="6"  md="4">
         
          <v-select                            
          v-model="faculte"
                    :items="facultes"
                    :rules="[v => !!v || 'Choisir faculté']"
                    label="Faculté"
                    required
                  @change="getPostulantsByFac"
              ></v-select>  
              <v-progress-circular
                  v-show="visible"
                  :size="30"
                  :width="1"
                  color="info"
                  indeterminate
                  class="ma-auto"
                   />                  
                </v-col>                      
  
              <v-spacer />
         </v-row>
                <!-- @beforeDownload="beforeDownload($event)"  -->
              
        <v-data-table
          v-model="selected"
          :headers="headers"
           :items="inscriptions"
           :search="search" show-select
           item-key="_id"
           :single-select = true
           :footer-props="{'items-per-page-options':[ 50, 100, -1]}"
            sort-by="nom"
            class="elevation-1"
        >
         
          <template #[`item.naissance`]="{ item }">
            <span>{{ item.naissance | moment(" Do/MM/YYYY") }} </span>
          </template>
            <template #[`item.sexe`]="{ item }">
              <span>{{item.sexe ? 'M' : 'F' }} </span>
          </template> 
            <template #[`item.complete`]="{ item }">
              <span>{{item.complete ? 'Complete' : 'Non complete' }} </span>
          </template> 
                     
          <template #top>
            <v-row class="mx-4 my-4">
              <v-col cols="12"
                  sm="6"        
                  md="5">
                <v-text-field
                      v-if="inscriptions.length > 0"
                    v-model="search"
                    append-icon="mdi-magnify"
                    label="Search"
                    single-line
                    hide-details
                 ></v-text-field>
               </v-col>
              <v-btn
                 v-if="inscriptions.length > 0"
                  class="mx-4 mt-2 ml-4"
                  fab                      
                  x-small
                  color="info"
                   @click=" generateReport"          
                    >
                    PDF
                    <client-only>
                       <vue-html2pdf   ref="html2Pdf"
                        :show-layout="false"
                        :float-layout="true"
                        :enable-download="true"
                        :preview-modal="false"
                        :paginate-elements-by-height="1400"
                        filename="Postulants UPGA"
                        :pdf-quality="2"
                        :manual-pagination="false"
                        pdf-format="letter"
                        pdf-orientation="landscape"
                        pdf-content-width="1000px"       
                      >
                          <template slot="pdf-content" >                             
                              <!-- <tablePrint :inscriptions="inscriptions"/>                                 -->
                          </template>
                      </vue-html2pdf>
                    </client-only>             
                    </v-btn>
                  
               
            
              <!-- <v-badge
                  v-if="inscriptions.length > 0"
                    color="primary"                           
                     :content= nbEleve
                     title="Total élèves"
                     class="mt-4 mr-4 mx-2"          
                  >
                  <v-icon>mdi-account</v-icon>
                  </v-badge> -->
                             
                
              <v-dialog
                v-model="dialogS"
                max-width="600px"
              >
                <template #activator="{ on, attrs }">
                  <v-btn                  
                    color="primary"
                    dark
                    fab                                        
                     x-small
                    title="Ajouter Postulants"
                    class="mx-2 mt-2"                  
                    v-bind="attrs"
                    v-on="on"              
                     
                  >
                      <v-icon>mdi-plus</v-icon>
                  </v-btn>
                </template>
                <v-card>
                  <v-card-title>
                    <span class="text-h5">Ajouter Postulant</span>
                  </v-card-title>
                    
                  <v-card-text>
                    <v-container>
                      <v-row>
       <v-card v-if="checkCode === false">
           <v-text-field
              v-model="editedItem.email"
              label="Veuillez saisir votre adresse email"
               :rules="emailRules"
               class="px-4"
               required
               @input="functionValEmail"             
           ></v-text-field>                                 
            <div  class="col-12">
             <v-btn :disabled="bverifemail === false" color="primary" small @click="sendCode">Envoyer</v-btn>
          <v-progress-circular
              v-show="visible"
              :size="20"
              :width="3"
              color="info"
              indeterminate
              class="ma-auto"
              /> 
         </div>
      </v-card>
      </v-row>
      <div v-if="checkCode === true" class="row g-3"  >
      <!-- <div> -->
                            <v-col
                          cols="12"
                          sm="6"
                          md="6"
                        >
                          <v-text-field
                            v-model="editedItem.nom"
                            label="Nom*"
                             :rules="[v => !!v || 'Champ obligatoire']"
                             maxlength="25"
                             required
                          />
                        </v-col>
                          <v-col
                          cols="12"
                          sm="6"
                          md="6"
                        >
                          <v-text-field
                            v-model="editedItem.prenom"
                            label="Prénom*"
                             maxlength="55"
                             :rules="[v => !!v || 'Champ obligatoire']"
                             required
                          />
                        </v-col>
                          <v-col
                          cols="12"
                          sm="6"
                          md="6"
                        >
                          <v-text-field
                            v-model="editedItem.email"
                            label="Email*"
                             maxlength="35"
                             :rules="emailRules"
                             required
                             @input="sendCode"
                          />
                        </v-col>
                        <v-col
                          cols="12"
                          sm="6"
                          md="6"
                        >
                          <v-select
                            v-model="editedItem.sexe"
                            :items="[{text:'Masculin', value:true}, {text:'Féminin', value:false}]"
                            label="Sexe*"
                            
                          />
                        </v-col>
                      
                       <v-col
                          cols="12"
                          sm="6"
                          md="6"
                        >
                      <v-select                            
                         v-model="editedItem.faculte"
                        :items="facultes"
                        :rules="[v => !!v || 'Choisir faculté']"
                        label="Faculte"
                        required
                      ></v-select> 
                        </v-col>
                        <v-col
                          cols="12"
                          sm="6"
                          md="6"
                        >
                          <v-text-field
                            v-model="editedItem.naissance"
                            label="Date Naissance"
                            type="date"
                          />
                        </v-col>
                          <v-col
                          cols="12"
                          sm="6"
                          md="6"
                        >
                          <v-text-field
                            v-model="editedItem.adresse"
                            label="Adresse"
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
                            label="Tél"                                                
                             maxlength="15"
                          />
                        </v-col>  
                        <v-col cols="12"   sm="6"     md="6" >
                          <v-select
                            v-model="editedItem.complete"
                            :items="[{text:'Complète', value:true}, {text:'Non Complète', value:false}]"                           
                            label="Inscription*"                            
                          />
                        </v-col>
                      </div>                                             
                      
                    </v-container>
                  </v-card-text>
                  <v-card-actions>
                    <v-spacer />
                    <v-btn
                      color="blue darken-1"
                      text
                      @click="closeS"
                    >
                      Cancel
                    </v-btn>
                    <v-btn
                      color="blue darken-1"
                      text
                      @click="storePostulant"
                    >
                      Save
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>           
              <!-- <download-excel             
                v-if="inscriptions.length > 0"
                class="mx-2 mt-1"
                :data="inscriptions"
                name="Liste eleves"
                header="La Liste des postulants"
              >
                <v-img
                  max-height="40"
                  max-width="40"
                  src="images/excel.png"
                />
              </download-excel>  -->
              <v-dialog
                v-model="dialog"
                max-width="700px"
              >
                <template #activator="{  }">
                 
                </template>
                <v-card>
                  <v-card-title>
                    <span class="text-h5">Editer Postulant</span>
                  </v-card-title>
                    
                  <v-card-text>
                    <v-container>
                      <!-- <v-row> -->
      
                         <div class="row g-3">
                            <v-col
                          cols="12"
                          sm="6"
                          md="6"
                        >
                          <v-text-field
                            v-model="editedItem.nom"
                            label="Nom*"
                             :rules="[v => !!v || 'Champ obligatoire']"
                             maxlength="25"
                             required
                          />
                        </v-col>
                          <v-col
                          cols="12"
                          sm="6"
                          md="6"
                        >
                          <v-text-field
                            v-model="editedItem.prenom"
                            label="Prénom*"
                             maxlength="55"
                             :rules="[v => !!v || 'Champ obligatoire']"
                             required
                          />
                        </v-col>
                          <v-col
                          cols="12"
                          sm="6"
                          md="6"
                        >
                          <v-text-field
                            v-model="editedItem.email"
                            label="Email*"
                             maxlength="35"
                             :rules="emailRules"
                             required
                             @input="sendCode"
                          />
                        </v-col>
                        <v-col
                          cols="12"
                          sm="6"
                          md="6"
                        >
                          <v-select
                            v-model="editedItem.sexe"
                            :items="[{text:'Masculin', value:true}, {text:'Féminin', value:false}]"
                            label="Sexe*"
                            
                          />
                        </v-col>
                      
                       <v-col
                          cols="12"
                          sm="6"
                          md="6"
                        >
                      <v-select                            
                         v-model="editedItem.faculte"
                        :items="facultes"
                        :rules="[v => !!v || 'Choisir faculté']"
                        label="Faculte"
                        required
                      ></v-select> 
                        </v-col>
                        <v-col
                          cols="12"
                          sm="6"
                          md="6"
                        >
                          <v-text-field
                            v-model="editedItem.naissance"
                            label="Date Naissance"
                            type="date"
                          />
                        </v-col>
                          <v-col
                          cols="12"
                          sm="6"
                          md="6"
                        >
                          <v-text-field
                            v-model="editedItem.adresse"
                            label="Adresse"
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
                            label="Tél"                                                
                             maxlength="15"
                          />
                        </v-col>  
                        <v-col cols="12"   sm="6"     md="6" >
                          <v-select
                            v-model="editedItem.complete"
                            :items="[{text:'Complète', value:true}, {text:'Non Complète', value:false}]"                           
                            label="Inscription*"                            
                          />
                        </v-col>
                      </div>                                             
                      <!-- </v-row> -->
                    </v-container>
                  </v-card-text>
                  <v-card-actions>
                    <v-spacer />
                    <v-btn
                      color="blue darken-1"
                      text
                      @click="close"
                    >
                      Cancel
                    </v-btn>
                    <v-btn
                      color="blue darken-1"
                      text
                      @click="save"
                    >
                      Save
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
              <v-divider 
              v-if="selected.length > 0"
                class="mx-4"
                inset
                vertical
              />             
              <v-spacer />            
               
            
              <v-dialog
                v-model="dialogDelete"
                max-width="500px"
              >
                <v-card>
                  <v-card-title
                    class="text-h5"
                  >
                    Etes-vous sur ?
                  </v-card-title>
                  <v-card-actions>
                    <v-spacer />
                    <v-btn
                      color="blue darken-1"
                      text
                      @click="closeDelete"
                    >
                      Cancel
                    </v-btn>
                    <v-btn
                      color="blue darken-1"
                      text
                      @click="deleteItemConfirm"
                    >
                      OK
                    </v-btn>
                    <v-spacer />
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </v-row>
          </template>
          <template #[`item.actions`]="{ item }">
            <v-icon
              small
              class="mr-2"
              @click="editItem(item)"
            >
              mdi-pencil
            </v-icon>
            <v-icon
              small
              @click="deleteItem(item)"
            >
              mdi-delete
            </v-icon>
          </template>         
        </v-data-table>       
      </base-material-card>
    </v-container>
  </template>
  <script>
  import {mapGetters } from 'vuex'
  import {createCode} from '../helper'
 //  import tablePrint from '~/components/tablePrintPdf.vue';
     export default {
  //  components: { tablePrint},    
      middleware: 'admin',          
    data: () => ({
        texte :'',
        trtexte:'',
        selected: [],
        dialog: false,
        dialogS: false,
        visible: false,
        bverifemail: false,
        classe: '',
        dataclasses:[],
        dataFac:[],
        salle:'',
        salles:[],
        facultes:[],
        classes: [],
        clas :[],
        eleves: [],
        inscrits:[],
        search:'',
        faculte:'',
        departements:[],
        dialogDelete: false,
        ajouter : false,
        sexeop : [{text:'Masculin', value:1}, {text:'Féminin', value:0}],
        menu: false,
        modal: false,
        menu2: false,
        nbEleve:[],
        transferts:[],
        inscriptions: [],
        code: false,
        checkCode: false,
        lastFaculte:'',
        emailRules: [
                (v) => !!v || 'E-mail obligatoire',
                (v) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail doit être valide'
              ],
        mail: { from: 'noreply@upga.univ.ht', to: '', subject: 'Code d\'Inscription', html:''},
        editedIndex: -1,
        editedItem: {
          nom:'',          
          prenom: '',
          sexe: '',
          naissance: '',        
          telephone:'',
          adresse:'',
          complete: '',
          faculte : '',
          lastFaculte:'',
          email:'',
          annee:'2023-2024'
          },
        defaultItem: {
          nom:'',
          prenom: '',
          sexe: '',
          naissance: '',        
          telephone:'',
          adresse:'',
          complete: '',
          faculte : '',
          annee:'2023-2024',
          email:'',
            },
            headprint: [       
            { text: "Code", value: "code" },
            { text: "Nom", value: "nom" },
            { text: "Prénom", value: "prenom" },      
            { text: 'Date Naissance', value: 'naissance' },
            { text: 'Sexe', value: 'sexe' },            
            { text: 'Tél', value: 'telephone' },            
            { text: 'Inscription', value: 'complete' },           
            ]            
      }),
  
      computed: {
         ...mapGetters('dataUtil', ['anac']),
          ...mapGetters('auth', ['user']),
        headers (){
            const  headers= [       
            { text: "Code", value: "code" },
            { text: "Nom", value: "nom" },
            { text: "Prénom", value: "prenom" },           
             { text: 'Date Naissance', value: 'naissance' },
            { text: 'Sexe', value: 'sexe' },  
            { text: 'Tél', value: 'telephone' },          
            { text: 'Inscription', value: 'complete' },        
            { text: 'Actions', value: 'actions', sortable: false },
         ];
        if (this.editedItem.sexe === '0'){
             headers.push({ text: "Masculin", value: "0" })
             headers.push({ text: "Féminin", value: "1" })
           }
        return headers
          },
  
        formTitle () {
          return this.editedIndex === -1 ? 'Postulant' : 'Editer '
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
       this.$axios.defaults.headers.common.Authorization = 'Bearer ' + localStorage.getItem('authToken')
      },
  
      mounted () {
         this.getFacultes()       
      },
  
   methods: {
      async getFacultes(){  
             this.visible = true
          // this.$axios.defaults.headers.common.Authorization = 'Bearer ' + localStorage.getItem('authToken')
                   await this.$axios.get('faculte/all/').then(response => {               
                   const d = response.data
                   this.dataFac = response.data
                    for(let i =0; i<d.length; i++){
                   this.facultes.push({text:d[i].nom, value:d[i]._id})                   
                  }                  
              }) 
              this.visible = false 
          },
  
         getPostulantsByFac(){          
            this.visible = true  
            for(const fac of this.dataFac)             
            if(fac._id === this.faculte){
                 this.inscriptions = fac.inscriptions 
             }       
             this.visible = false
        }, 
        
  
        functionValEmail(){
           this.bverifemail = this.ValidateEmail(this.editedItem.email)       
       },
  
  ValidateEmail(email){
      const mailformat = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
        if(email.match(mailformat))
            return true;
        else
          return false;
    },
  
        async beforeDownload ({ html2pdf, options, pdfContent }) {
              await html2pdf().set(options).from(pdfContent).toPdf().get('pdf').then((pdf) => {
                  const totalPages = pdf.internal.getNumberOfPages()
                  for (let i = 1; i <= totalPages; i++) {
                      pdf.setPage(i)
                      pdf.setFontSize(10)
                      pdf.setTextColor(150)
                      pdf.text('Page ' + i + ' de ' + totalPages, (pdf.internal.pageSize.getWidth() * 0.88), (pdf.internal.pageSize.getHeight() - 0.3))
                  } 
              }).save()
          },
        setTexte(){
         this.texte = 'Liste des élèves : ('+ (this.facultes.find(el => el.value === this.faculte)).text+') '+localStorage.anac
        },
       
        generateReport () {
          this.setTexte()
              this.$refs.html2Pdf.generatePdf()
          },
  
                   
        
      
         
    deletePostulant (etudiant) {          
          this.$axios.delete('inscription/' + etudiant._id).then(res => {         
            if (res.status === 200) {
               this.nbEleve = this.inscriptions.length 
              this.$notifier.showMessage({ content: 'Postulant supprimé', color: 'success' })            
              return true 
              } 
              else {           
              return false }
          })
        },
  
    updatePostulant (etudiant) {  
        this.visible = true  
        this.editedItem.lastFaculte = this.lastFaculte 
       
        this.$axios.patch( 'inscription/'+etudiant._id, this.editedItem).then(res => {                
           if (res.status === 201) { 
                  this.$notifier.showMessage({ content: 'Inscription modifiée', color: 'success' })                             
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
        this.lastFaculte = item.faculte 
        
          this.editedIndex = this.inscriptions.indexOf(item)
          this.editedItem = Object.assign({}, item)
          this.dialog = true
       },
  
        deleteItem (item) {
          this.editedIndex = this.inscriptions.indexOf(item)
          this.editedItem = Object.assign({}, item)
          this.dialogDelete = true
        },
  
      deleteItemConfirm () {
          //  if(checkHaveChildren(this.editedItem) === true){             
          //        this.$notifier.showMessage({ content: 'Suppression echouée', color: 'error' })
          //         this.closeDelete()    
          //        return false
          //   }
          this.deletePostulant(this.editedItem)       
          this.inscriptions.splice(this.editedIndex, 1)
          this.closeDelete()
        },
  
      save () {              
           if (this.editedIndex > -1) {          
              this.updatePostulant(this.editedItem)
              Object.assign(this.inscriptions[this.editedIndex], this.editedItem)
            } 
           else {
                this.storePostulant()
              }
            this.close()
        },
  
          close(){  
              this.editedItem = {}                
              this.dialog=false                
          },
  
          closeS(){  
              this.editedItem = {}                
              this.dialogS=false                
          },
  
        closeDelete () {
          this.dialogDelete = false
          this.$nextTick(() => {
            this.editedItem = Object.assign({}, this.defaultItem)
            this.editedIndex = -1
          })
        },
  
  
        async getInscrits(){
            // this.$axios.defaults.headers.common.Authorization = 'Bearer ' + localStorage.getItem('authToken')  
            const annee = '2023-2024'              
                  await this.$axios.get('inscription/all/'+annee).then( response => {
                                                 
                  if(response.status === 201)
                      if(response.data.length === 0)
                            this.inscrits = []                
                      else 
                         this.inscrits = response.data;                                          
                  else                 
                       this.$notifier.showMessage({ content: 'Inscription introuvable', color: 'error' })                                
                   })
                   this.getFacultes()
      },
  
  
    getAge(dateString) {
      const today = new Date();
      const birthDate = new Date(dateString);
      let age = today.getFullYear() - birthDate.getFullYear();
      const m = today.getMonth() - birthDate.getMonth();
      if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
          age--;
      }
      return age;
  },
  
    check_age(classe, naissance){
            if(parseInt(this.getAge(naissance)) < classe)
              return false;
            return true;
        },
  
    async sendCode(){   
        this.visible = true  
        
                const rand = (createCode(this.inscrits))      
                this.mail.to = this.editedItem.email
                this.mail.html = 'Cher(e) postulant(e), <br><br> Veuillez utiliser le code ci-dessous pour poursuivre le processus d\'inscription en ligne. <br><br>Votre code est <b style="font-size:24px;">'+ rand+'</b> <br> <br> <img src="https://upga.univ.ht/img/piedEmail.jpg" width="280">'
              await this.$axios.post('mail/', this.mail).then((res) => {
              if (res.status === 201) {
                    this.code = rand  
                    this.checkCode = true                    
              } 
              else {
                  this.$notifier.showMessage({ content: 'Echec:', color: 'error' })
                }
            })   
           
        this.visible = false      
      },
       
      async storePostulant () {  
        this.visible = true
        this.loading = true  
              if (this.editedItem.prenom ==='' || this.editedItem.nom  ===''|| this.editedItem.email ==='' || this.editedItem.faculte === '') {
                  this.$notifier.showMessage({ content: 'Veuillez saisir les champs obligatoires', color: 'error' })
              return false
        }
       // this.$axios.defaults.headers.common.Authorization = 'Bearer ' + localStorage.authToken
      
       this.editedItem.code = this.code
     
        await this.$axios.post('inscription/', this.editedItem).then((res) => {
          if (res.status === 201) {
             this.inscriptions.push(res.data)
              this.$notifier.showMessage({ content: 'Inscription réussie!', color: 'success' })
              this.$router.push({ name: 'confirmationInsc', params:{code:this.code} }) 
              this.sendMail()
          }            
          else {
            this.$notifier.showMessage({ content: 'Echec:', color: 'error' })
          }
        })
       
           this.visible = false
        },
  
        async sendMail(){   
           this.visible = true   
           const rand = (createCode(this.inscrits))
           this.mail.html = `Cher(e) postulant(e), <br><br>  Votre inscription en ligne a été réalisée avec succès!.
                      <br><br>Votre code est <b style="font-size:24px;">`+this.code+`</b> <br> <br> 
                      <p> En attendant la soumission des pièces sous-mentionnées :
                        <ul>
                            <li class="mb-1">Acte de naissance ou Extrait des Archives <b>(Original et Copie)</b></li>
                            <li class="mb-1">Copie du NIF ou du NIN</li>
                            <li class="mb-1">Autorisation parentale pour les candidats(es) n'ayant pas encore 18 ans accomplis. </li>
                            <li class="mb-1">Diplôme de fin d'études classiques (Philo ou S4)</li>
                            <li class="mb-1">Deux (2) photos d'dentité récentes</li>
                            <li>Frais d'inscription <b>(1000.00)</b> gourdes</li>    
                        </ul></p> <br>
                        <br> 
                <p ><b>NB:</b> Le concours d'admission aura lieu le dimanche <b>15 Octobre 2023</b> 
                    à compter de <b>9h AM</b> dans les locaux de l'UPGA dans les disciplines suivantes :  
                        <br>
                        
                     a) Francais/Culture générale / Maths / Sciences(Physique, Chimie) pour <b>la Faculté de l'éducation</b><br>
                      b) Francais/Culture générale / Maths pour la <b>la Faculté d'Eco-Gestion</b><br>
                     c) Francais/Culture générale / Maths pour la <b>la Faculté de Génie Civil</b>
                        </p> 
                       <br><img src="https://upga.univ.ht/img/piedEmail.jpg" width="280">`
  
          this.mail.to = this.editedItem.email
           await this.$axios.post('mail/', this.mail).then((res) => {
          if (res.status === 201) {
             this.code = rand 
                    
             
          } else {
            this.$notifier.showMessage({ content: 'Echec:', color: 'error' })
          }
        })
        
        this.visible = false
      
      },
  
  
       
        showSnackbar (){
           this.$notifier.showMessage({ content: 'veuillez saisir les champs obligatoires', color: 'info' })             
        },
  
        save1 () {       
           if(!this.check_age(this.classe,this.editedItem.naissance)){
              this.$notifier.showMessage({ content: 'La Date de naissance ne correspond pas a la classe!', color: 'error' })     
                    return false;
             }        
       
          if (this.editedIndex > -1) {
             this.updateEleve(this.editedItem)
            Object.assign(this.eleves[this.editedIndex], this.editedItem)
              } 
              else {
                 this.storeEleve()
              }
            this.close()
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
  