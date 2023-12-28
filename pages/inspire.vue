<template>
  <v-container
    id="regular-tables"
    fluid
    tag="section"
  >
    <base-material-card
      icon="mdi-account-school"
      title="Gestion Membres"
      class="px-5 py-3 mt-4"
    >
    https://www.youtube.com/channel/UCHKMPdWk5nuFPC_Gr0ACXhw
     <!-- <v-row>
    <v-col cols="12"  sm="6"  md="4">
       
        <v-select                            
            v-model="district"
            :items="districts"
            :rules="[v => !!v || 'Choisir district']"
            label="district"
            required           
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
    <v-col cols="12"  sm="6"  md="4">
       
        <v-select                            
            v-model="zone"
            :items="zones"
            :rules="[v => !!v || 'Choisir zone']"
            label="zone"
            required
          
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
            <v-col cols="12"
                sm="6"        
                md="3">
              <v-text-field
                    v-if="membres.length > 0"
                  v-model="search"
                  append-icon="mdi-magnify"
                  label="Search"
                  single-line
                  hide-details
               ></v-text-field>
             </v-col>
              
               
            </v-row> -->
              <!-- @beforeDownload="beforeDownload($event)"  -->
            
      <v-data-table
        v-model="selected"
        :headers="headers"
         :items="membres"
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
                   
        <template #top>
          <v-row class="mx-4 my-4">
             <!-- <v-btn
                  v-if="selected.length > 0"
                    class="mx-2 mt-2"
                     fab                      
                      x-small
                      color="primary"
                      title="Attestation"                                
                  >
                  <v-icon>mdi-certificate</v-icon>
             </v-btn>
              <v-btn
                 v-if="selected.length > 0"
                   class="mx-2 mt-2"
                     fab                      
                      x-small
                      color="info"
                      title="Rélevés de notes"
                                
                  >
                  <v-icon>mdi-pencil</v-icon>
             </v-btn>
             <v-btn
                v-if="selected.length > 0"
                   class="mx-2 mt-2"
                     fab                                        
                      x-small
                      color="primary"
                      title="Transfert"
                        @click="generateTransfert"         
                  >
                   <v-icon>mdi-logout</v-icon>                  
             </v-btn>                
            
            <v-divider 
            v-if="selected.length > 0"
              class="mx-4"
              inset
              vertical
            />
            -->
            <v-spacer />
            <v-btn
                    v-if="membres.length > 0"
                    class="mx-2 mt-2"
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
                      filename="Eleves CEE"
                      :pdf-quality="2"
                      :manual-pagination="false"
                      pdf-format="letter"
                      pdf-orientation="landscape"
                      pdf-content-width="1000px"       
                    >
                        <template slot="pdf-content">                             
                            <tablePrint :membres="membres" :texte="texte" />                                
                        </template>
                    </vue-html2pdf>
                  </client-only>             
                  </v-btn>
                  
          
             <download-excel             
              v-if="membres.length > 0"
              class="mx-2 mt-1"
              :data="membres"
              name="Liste membres"
              header="La Liste des membres"
            >
              <v-img
                max-height="40"
                max-width="40"
                src="images/excel.png"
              />
            </download-excel>
            <v-badge
                v-if="membres.length > 0"
                  color="primary"                           
                   :content= nbMembre
                   title="Total membres"
                   class="mt-4 mr-4 mx-2"          
                >
                <v-icon>mdi-account-school</v-icon>
                </v-badge>  
            <v-dialog
              v-model="dialog"
              max-width="500px"
            >
              <template #activator="{ on, attrs }">
                <v-btn
                 :disabled ="district == ''"
                  color="primary"
                  dark
                  fab                                        
                   x-small
                  title="Ajouter Membres"
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
                        <v-select
                          v-model="editedItem.sexe"
                          :items="[{text:'Masculin', value:1}, {text:'Féminin', value:0}]"
                          label="Sexe*"
                          
                        />
                      </v-col>
                    
                     <v-col
                        cols="12"
                        sm="6"
                        md="6"
                      >
                    <v-select                            
                       v-model="zone"
                      :items="zones"
                      :rules="[v => !!v || 'Choisir zone']"
                      label="Zone"
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
                          v-model="editedItem.nom_mere"
                          label="Prénom de la Mère*"
                           maxlength="25"
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
                        <v-select
                          v-model="editedItem.baptise"
                          :items="[{text:'Oui', value:1}, {text:'Non', value:0}]"
                          label="Baptisé*"
                          
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


   export default {
  components: { },    
    //  middleware: 'responsable',          
  data: () => ({
      texte :'',
      trtexte:'',
      selected: [],
      dialog: false,
      visible: false,
      classe: '',
      dataDistricts:[],
      zone:'',
      zones:[],
      district: [],
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
        prenom: '',
        sexe: '',
        naissance: '',        
        telephone:'',
        adresse:'',
        nom_mere: '',
        zone : '',
        baptise: ''
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
          { text: "Id", value: "code" },
          { text: "Nom", value: "nom" },
          { text: "Prénom", value: "prenom" },    
          { text: 'Naissance', value: 'naissance' },
          // { text: 'Date', value: 'datenais' },
          { text: 'Sexe', value: 'sexe' },
          { text: 'Tel Personne responsable ', value: 'telephone' },
          { text: 'Prenom Mère', value: 'prenom_mere' },
         
          ]
          
    }),

    computed: {
      
      headers (){
          const  headers= [       
          { text: "ID", value: "code" },
          { text: "Nom", value: "nom" },
          { text: "Prénom", value: "prenom" },    
           { text: 'Naissance', value: 'naissance' },
           { text: 'Sexe', value: 'sexe' },
          { text: 'Tel Personne responsable ', value: 'telephone' },
          { text: 'Prenom Mère', value: 'nom_mere' },        
          { text: 'Actions', value: 'actions', sortable: false },
       ];
      if (this.editedItem.sexe === '0'){
           headers.push({ text: "Masculin", value: "0" })
           headers.push({ text: "Féminin", value: "1" })
         }
      return headers
        },

      formTitle () {
        return this.editedIndex === -1 ? 'Elève' : 'Editer '
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
     this.getMembres()
      // this.get_dept()
      },

    methods: {

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
      // this.texte = 'Liste des élèves : ('+ (this.classes.find(el => el.value === this.editedItem.classe_id)).text+') '+localStorage.anac
      },
     
      generateReport () {
        this.setTexte()
            this.$refs.html2Pdf.generatePdf()
        },

                 
      async getDistricts(){ 
        this.visible = true                
            // this.$axios.defaults.headers.common.Authorization = 'Bearer ' + localStorage.getItem('authToken')
                 await this.$axios.get('membre/all/zone/').then(response => { 
                  this.clas = response.data                  
                 const d = response.data
                 this.dataDistrict = d
                  for(let i =0; i<d.length; i++){
                 this.districtss.push({text:d[i].nom, value:d[i]._id}) 
                                           
                }  
                          
               this.visible = false              
            })
             // this.dataclasses =[]
        },
      getZones(){  
            this.dataDistricts.forEach((d) =>{            
            if(d._id.toString() === this.district){
              const da = d.zones              
              for(let i =0; i<da.length; i++){
                this.zones.push({text:da[i].nom, value:da[i]._id})              
                }               
          return true
            }       
              
          }) 
          
          return false                            
           },

    
       async getMembres(){
                 
                // this.$axios.defaults.headers.common.Authorization = 'Bearer ' + localStorage.getItem('authToken')
                
               await this.$axios.get('membre/all/zone/').then( response => { 
                                         
              // if(response.status === 201)
                   // if(response.data.length === 0){
                         // this.membres = []                
                          console.log(response.data) 
                  //  }
                  //  else 
                       this.membres = response.data.districts;
                       
                                          
              //  else                 
                // this.$notifier.showMessage({ content: 'Personne introuvable', color: 'error' })                                
                 })
        },    
      
       async getMembresByZone(){ 
         
        this.visible = true               
              // this.$axios.defaults.headers.common.Authorization = 'Bearer ' + localStorage.getItem('authToken')
                await this.$axios.get('eleve/all/'+this.zone).then( response => {  
                                                          
                if(response.status === 201)
                    if(response.data.length === 0){
                          this.membres = []  
                          this.nbMembre = [] 
                    }            
                    else {
                    this.getSalles()  
                  
                     this.nbMembre = this.membres.length
                     
                    }
                else                 
                 this.$notifier.showMessage({ content: 'Elève introuvable', color: 'error' })                                
                 })
                 this.visible = false
        },  
        
          
    //   getEleveBySalle(tabEleve, classe) {
    //     const eleves = []
    //       let trouve = null
    //      tabEleve.forEach(function(el){
    //           el.classe.forEach(function(e){ 
    //                  trouve = false                 
    //                   if(e.classe_id === classe && e.annee === localStorage.anac)
    //                     trouve = true                         
    //         })
    //         if(trouve)
    //         eleves.push(el)
    //     })
    //     return eleves

    //   },

  deleteEleve (eleve) {          
        this.$axios.delete('eleve/' + eleve._id).then(res => {         
          if (res.status === 200) {
             this.nbEleve = this.membres.length 
            this.$notifier.showMessage({ content: 'Elève supprimé', color: 'success' })            
            return true 
            } 
            else {           
            return false }
        })
      },

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

    save () {              
         if (this.editedIndex > -1) {          
            this.updateEleve(this.editedItem)
            Object.assign(this.eleves[this.editedIndex], this.editedItem)
          } 
         else {
               this.storeEleve()
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
