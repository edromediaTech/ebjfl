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

     <v-row>
    <v-col cols="12"  sm="6"  md="4">
       
        <v-select                            
            v-model="district"
            :items="districts"
            :rules="[v => !!v || 'Choisir district']"
            label="district"
            required   
            @change="getZones"        
            ></v-select>  
            <v-progress-circular
          v-show="visible"
          :size="10"
          :width="3"
          color="info"
          indeterminate
          class="ma-auto"
        />                  
       </v-col>
    <v-col v-if="district !== ''" cols="12"  sm="6"  md="4">
       
        <v-select                            
            v-model="zone"
            :items="zones"
            :rules="[v => !!v || 'Choisir zone']"
            label="zone"
            required
            @change="getMembres"
            ></v-select>  
                            
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
              
               
            </v-row>
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
       
        <template #[`item.date_naissance`]="{ item }">
          <span>{{ item.date_naissance | moment(" Do/MM/YYYY") }} </span>
        </template>
          <template #[`item.sexe`]="{ item }">
            <span>{{item.sexe ? 'M' : 'F' }} </span>
        </template> 
          <template #[`item.baptise`]="{ item }">
            <span>{{item.baptise ? 'Oui' : 'Non' }} </span>
        </template> 
                   
        <template #top>
          <v-row class="mx-4 my-4">
            
             
             <!-- <v-btn
                v-if="membres.length > 0"
                   class="mx-2 mt-2"
                     fab                                        
                      x-small
                      color="primary"
                      title="Transfert"
                        @click="generateTransfert"        
                  >
                   <v-icon>mdi-logout</v-icon>                  
             </v-btn>                 -->
            
            <!-- <v-divider 
            v-if="membres.length > 0"
              class="mx-4"
              inset
              vertical
            /> -->
           
           
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
                      filename="Liste membres"
                      :pdf-quality="2"
                      :manual-pagination="false"
                      pdf-format="letter"
                      pdf-orientation="landscape"
                      pdf-content-width="1000px"       
                    >
                        <template slot="pdf-content">                             
                            <membreZone :membres="membres" :texte="texte"/>                                
                        </template>
                    </vue-html2pdf>
                  </client-only>             
                  </v-btn>
                  
          
             <!-- <download-excel             
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
            </download-excel> -->
            <!-- <v-badge
                v-if="membres.length > 0"
                  color="primary"                           
                   :content= nbMembre
                   title="Total membres"
                   class="mt-4 mr-4 mx-2"          
                >
                <v-icon>mdi-account-school</v-icon>
                </v-badge>   -->
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
                          v-model="editedItem.date_naissance"
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
                          v-model="editedItem.prenom_mere"
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
                          v-model="editedItem.numero"
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
                          :items="[{text:'Oui', value:true}, {text:'Non', value:false}]"
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
          <v-spacer />
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

import {createCode} from '../helper.js'
import membreZone from '~/components/membreZone';
   export default {
  components: { membreZone},    
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
      codeZone:'',
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
        code:'',
        nom:'',
        prenom: '',
        sexe: '',
        naissance: '',        
        numero:'',
        adresse:'',
        prenom_mere: '',
        zone : '',
        baptise: ''
        },
      defaultItem: {
        code:'',
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
      this.getDistricts()
    // this.getMembres()
     
      },

    methods: {

      getMembres(){                 
        // this.$axios.defaults.headers.common.Authorization = 'Bearer ' + localStorage.getItem('authToken')
            this.visible = true 
             this.membres = []
            
            this.dataZones.forEach((d) =>{              
               if(d._id === this.zone){                           
                    const da = d.membres 
                    this.dataMembres = da              
                    this.membres = d.membres            
                    this.visible = false               
                   return true         
           }       
              
          }) 
          
          return false
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

                 
      async getDistricts(){ 
        this.visible = true                
            // this.$axios.defaults.headers.common.Authorization = 'Bearer ' + localStorage.getItem('authToken')
                 await this.$axios.get('membre/all/zone/').then(response => { 
                 this.dis = response.data.districts                
                 const d = response.data.districts 
                 this.dataDistricts = d
                  for(let i =0; i<d.length; i++){
                 this.districts.push({text:d[i].nom, value:d[i]._id}) 
                                           
                }  
                          
               this.visible = false              
            })
             
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

    
     
  deleteMembre (membre) {          
        this.$axios.delete('membre/' + membre._id).then(res => {         
          if (res.status === 200) {              
              this.$notifier.showMessage({ content: 'Suppression réussie', color: 'success' })            
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
        this.editedIndex = this.membres.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
     },

      deleteItem (item) {
        this.editedIndex = this.membres.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialogDelete = true
      },

    deleteItemConfirm () {
        //  if(checkHaveChildren(this.editedItem) === true){             
        //        this.$notifier.showMessage({ content: 'Suppression echouée', color: 'error' })
        //         this.closeDelete()    
        //        return false
        //   }
        this.deleteMembre(this.editedItem)       
        this.membres.splice(this.editedIndex, 1)
        this.closeDelete()
      },

    save () {              
         if (this.editedIndex > -1) {          
            this.updatemembre(this.editedItem)
            Object.assign(this.membres[this.editedIndex], this.editedItem)
          } 
         else {
               this.storeMembre()
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
        this.editedItem.code = createCode(this.dataMembres,this.dataZones, this.zone, this.editedItem.sexe) 
        alert(this.editedItem.code)     
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
           this.updateMembre(this.editedItem)
          Object.assign(this.membres[this.editedIndex], this.editedItem)
            } 
            else {
               this.storeMembre()
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
