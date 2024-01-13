<template>
    <v-container
      id="regular-tables"
      fluid
      tag="section"
    >
      <base-material-card
        icon="mdi-account-multiple"
        title="Gestion Groupes"
        class="px-5 py-3 mt-4"
      >
  
       <v-row>
      <v-col cols="12"  sm="6"  md="4">         
        
           <v-progress-circular
            v-show="visible"
            :size="10"
            :width="3"
            color="info"
            indeterminate
            class="ma-auto"
          />                  
         </v-col>
                           
  
              <v-spacer />
              <v-col cols="12"
                  sm="6"        
                  md="3">
                <v-text-field
                      v-if="groupes.length > 0"
                    v-model="search"
                    append-icon="mdi-magnify"
                    label="Search"
                    single-line
                    hide-details
                 ></v-text-field>
               </v-col>
                
                 
              </v-row>
                <!-- @beforeDownload="beforeDownload($event)"  -->
              
        <v-data-table
          v-model="selected"
          :headers="headers"
           :items="groupes"
           :search="search"  show-select
           item-key="_id"
           :single-select = true
           :footer-props="{'items-per-page-options':[ 50, 100, -1]}"
            sort-by="nom"
            class="elevation-1"
        >
         
          <template #[`item.fondation`]="{ item }">
            <span>{{ item.fondation | moment(" Do/MM/YYYY") }} </span>
          </template>
            <template #[`item.sexe`]="{ item }">
              <span>{{item.sexe ? 'M' : 'F' }} </span>
          </template> 
            <template #[`item.baptise`]="{ item }">
              <span>{{item.baptise ? 'Oui' : 'Non' }} </span>
          </template> 

          <template #top>
          <v-row>
           
          <v-dialog
              v-model="dialog"
              max-width="500px"
            >
              <template #activator="{ on, attrs }">
                <v-btn
                 :disabled ="classe == ''"
                  color="primary"
                  dark
                  fab                                        
                   x-small
                  title="Ajouter elèves"
                  class="mx-2 mt-2"                  
                  v-bind="attrs"
                  v-on="on"                
                   
                >
                    <v-icon>mdi-plus</v-icon>
                </v-btn>
              </template>
              <v-card>
                <v-card-title>
                  <span class="text-h5">{{ formTitle }}</span>
                </v-card-title>
                  
                <v-card-text>
                  <v-container>
                    <v-row>
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
                          v-model="editedItem.sigle"
                          label="Sigle"
                           maxlength="15"                          
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
                          label="Email"
                           maxlength="45"                          
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
                          label="Date Fondation"
                          type="date"
                        />
                      </v-col>
                        <v-col
                        cols="12"
                        sm="6"
                        md="6"
                      >
                        <v-text-field
                          v-model="editedItem.responsable"
                          label="Responsable*"
                          :rules="[v => !!v || 'Champ obligatoire']"
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
                          label="Whatsapp"                                                
                           maxlength="15"
                        />
                      </v-col>                                               
                    </v-row>
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
  
 // import membreZone from '~/components/membreZone';
     export default {
   // components: { membreZone},    
      //  middleware: 'responsable',          
    data: () => ({
        texte :'',
        groupes:[],
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
          sigle: '',          
          responsable: '',        
          fondation:'',
          email:'',
          maestro: '',
          telephone : '',
          whatsapp: ''
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
             { text: "Groupe", value: "nom" },
            { text: "Sigle", value: "sigle" },
            { text: "Responsable", value: "responsable" },    
             { text: 'Fondation', value: 'fondation' },             
            { text: 'Tel', value: 'telephone' },
            { text: 'Whatsapp', value: 'whatsapp' },        
            { text: 'Email', value: 'email' },        
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
        this.getGroups()
      // this.getMembres()
       
        },
  
      methods: {
  
        async getGroups(){ 
          this.visible = true                
              // this.$axios.defaults.headers.common.Authorization = 'Bearer ' + localStorage.getItem('authToken')
                   await this.$axios.get('groupechant/all/').then(response => { 
                   this.groupes = response.data                 
                            
                 this.visible = false              
              })
               
          },
        downloadPdf (){          
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
          this.zoneNom =  (this.zones.find(el => el.value === this.zone)).text
          this.texte = 'Liste des membres de la zone: '+ (this.zones.find(el => el.value === this.zone)).text +' du district '+ (this.districts.find(el => el.value === this.district)).text
        },
       
        generateReport () {
          this.setTexte()
              this.$refs.html2Pdf.generatePdf()
          },
  
                   
      
  
        getZones(){
          this.zones = [] 
              this.dataDistricts.forEach((d) =>{              
                if(d.zones[0].district === this.district){
                  const da = d.zones 
                  this.dataZones = da             
                  for(let i =0; i<da.length; i++){               
                     this.zones.push({text:da[i].nom, value:da[i]._id})              
                  }  
                              
            return true
              }       
                
            }) 
            
            return false                            
             },
           
            
    
    deleteGroup (groupe) {          
          this.$axios.delete('groupechant/' + groupe._id).then(res => {         
            if (res.status === 200) {
                this.$notifier.showMessage({ content: 'Groupe supprimé', color: 'success' })            
              return true 
              } 
              else {           
              return false }
          })
        },
  
     updateGroup(groupe) {  
          this.visible = true                  
          this.$axios.patch( 'groupechant/' + groupe._id, this.editedItem).then(res => {
             if (res.status === 201) { 
                 this.$notifier.showMessage({ content: 'groupe modifié', color: 'success' })            
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
          this.editedIndex = this.groupes.indexOf(item)
          this.editedItem = Object.assign({}, item)
          this.dialog = true
       },
  
        deleteItem (item) {
          this.editedIndex = this.groupes.indexOf(item)
          this.editedItem = Object.assign({}, item)
          this.dialogDelete = true
        },
  
      deleteItemConfirm () {
          //  if(checkHaveChildren(this.editedItem) === true){             
          //        this.$notifier.showMessage({ content: 'Suppression echouée', color: 'error' })
          //         this.closeDelete()    
          //        return false
          //   }
          this.deleteGroup(this.editedItem)       
          this.groupes.splice(this.editedIndex, 1)
          this.closeDelete()
        },
  
      save(){              
           if (this.editedIndex > -1) {          
              this.updateGroup(this.editedItem)
              Object.assign(this.groupes[this.editedIndex], this.editedItem)
            } 
           else {
                 this.storeGroupe()
              }
            this.close()
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
  
       
      async storeMembre () {  
           if(this.editedItem.nom ==='' || this.editedItem.prenom ==='' || this.editedItem.sexe ===''){
             this.$notifier.showMessage({ content: 'Veuillez saisir les champs obligatoires', color: 'error' })
            return false  
          } 
          this.visible = true        
             this.editedItem.zone = this.zone           
          this.$axios.defaults.headers.common.Authorization = 'Bearer ' + localStorage.authToken         
          await this.$axios.post('membre/', this.editedItem).then(res => {                           
            if (res.status === 201) {
               this.membres.push(res.data)
               this.nbMembre = this.membres.length
               this.$notifier.showMessage({ content: 'Enregistrement réussi', color: 'success' })    
                 } else {
               this.$notifier.showMessage({ content: 'Echec:', color: 'error' })       
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
  