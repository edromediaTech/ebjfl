<template>
  <v-container
    id="regular-tables"
    fluid
    tag="section"
  >
    <base-material-card
      icon="mdi-clipboard-outline"
      title="Gestion etudiants"
      class="px-5 py-3 mt-4"
    >
    <v-row>
    <v-col cols="12"  sm="6"  md="4">
       <v-progress-circular
          v-show="visible"
          :size="10"
          :width="1"
          color="info"
          indeterminate
          class="ma-auto"
        />
        <v-select                            
            v-model="classe"
            :items="classes"
            :rules="[v => !!v || 'Choisir classe']"
            label="Classe"
            required
            @change="getEtudiantsByClasse"
            ></v-select>                    
       </v-col>
                       

            <v-spacer />
            <v-col cols="12"
                sm="6"        
                md="3">
              <v-text-field
                    v-if="etudiants.length > 0"
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
         :items="etudiants"
         :search="search" 
         item-key="_id"         
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
                    v-if="etudiants.length > 0"
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
                      filename="Etudiant UPGA"
                      :pdf-quality="2"
                      :manual-pagination="false"
                      pdf-format="letter"
                      pdf-orientation="landscape"
                      pdf-content-width="1000px"       
                      
                        >
                        <template slot="pdf-content" >                             
                            <!-- <tablePrint :etudiants="etudiants" :texte="texte" />                                 -->
                        </template>
                    </vue-html2pdf>
                  </client-only>             
                  </v-btn>           
          
             <download-excel             
                v-if="etudiants.length > 0"
                class="mx-2 mt-1"
              :data="etudiants"
              name="Liste etudiants"
              header="Liste des etudiants"
            >
              <v-img
                max-height="40"
                max-width="40"
                src="images/excel.png"
              />
            </download-excel>            
                <v-badge
                v-if="etudiants.length > 0"
                  color="primary"                           
                   :content= nbetudiant
                   class="mt-4 mr-4"          
                >
                <v-icon>mdi-account</v-icon>
                </v-badge>   
            
          </v-row>
        </template>       
      </v-data-table>       
    </base-material-card>
  </v-container>
</template>
<script>
import {mapGetters } from 'vuex'
import {filtreTab} from '../helper.js'
// import tablePrint from '~/components/tablePrintPdf.vue';
   export default {
 // components: { tablePrint},    
  middleware: 'admin',          
  data: () => ({
      texte :'',
      trtexte:'',
      selected: [],
      dialog: false,
      visible: false,
      classe: '',
      dataclasses:[],
      salle:'',
      salles:[],
      classes: [],
      etudiants: [],
      search:'',
      ecole_id: '6377f98ee45a0aca8e904033',
      departements:[],
      dialogDelete: false,
      ajouter : false,
      sexeop : [{text:'Masculin', value:1}, {text:'Féminin', value:0}],
      menu: false,
      modal: false,
      menu2: false,
      transferts:[],
      centres: [],
      nbetudiant:[],
      editedIndex: -1,
      editedItem: {
        nom:'',
        prenom: '',
        sexe: '',
        naissance: '',
        datenais: '',
        telephone:'',
        adresse:'',
         prenom_mere: '',
        parent_id:'',
        classe : []
        },
      defaultItem: {
        nom:'',
        prenom: '',
        sexe: '',
        lieunais: '',
        datenais: '',
        tel:'',
        deficience: '',
        prenom_mere: '',
          },
          headprint: [       
          { text: "Id", value: "code" },
          { text: "Nom", value: "nom" },
          { text: "Prénom", value: "prenom" },    
          { text: 'Date', value: 'naissance' },
          { text: 'Sexe', value: 'sexe' },
          { text: 'Tel', value: 'telephone' },
          { text: 'Prenom Mère', value: 'nom_mere' },
         
          ]
          
    }),

    computed: {
       ...mapGetters('dataUtil', ['anac']),
        ...mapGetters('auth', ['user']),
      headers (){
          const  headers= [       
          { text: "ID", value: "code" },
          { text: "Nom", value: "nom" },
          { text: "Prénom", value: "prenom" },    
          { text: 'Date Naissance', value: 'naissance' },
          { text: 'Sexe', value: 'sexe' },
          { text: 'Tel', value: 'telephone' },
          { text: 'Prenom Mère', value: 'nom_mere' },        
          // { text: 'Actions', value: 'actions', sortable: false },
       ];
      if (this.editedItem.sexe === '0'){
           headers.push({ text: "Masculin", value: "0" })
           headers.push({ text: "Féminin", value: "1" })
         }
      return headers
        },

      formTitle () {
        return this.editedIndex === -1 ? 'etudiant' : 'Editer '
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
      this.getClasses()
      // this.get_dept()
      },

    methods: {

      generateTransfert (){
        this.visible = true
         this.$axios.defaults.headers.common.Authorization = 'Bearer ' + localStorage.getItem('authToken')
          this.$axios.post('cert-trans', JSON.stringify(this.format_data())).then(res => {
            if(res.data === 1){
               this.transferts = this.selected
               this.$notifier.showMessage({ content: 'etudiant transferé', color: 'success' }) 
               this.$router.push({ name: 'gestionTransfert' }) 
            
            }
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
        this.texte = 'Liste des étudiants : '+ (this.classes.find(el => el.value === this.classe)).text +' '+localStorage.anac
      },
     
    generateReport () {
        this.setTexte()
            this.$refs.html2Pdf.generatePdf()
        }, 
      
    async getClasses(){ 
        this.visible = true                
             this.$axios.defaults.headers.common.Authorization = 'Bearer ' + localStorage.getItem('authToken')
                 await this.$axios.get('classe/all/').then(response => {                   
                 const d = response.data
                 this.dataclasses = d
                  for(let i =0; i<d.length; i++){
                 this.classes.push({text:d[i].nom, value:d[i]._id})                   
                }            
               this.visible = false              
            })
        },

    getSalles(){  
          this.dataclasses.forEach((d) =>{            
            if(d._id.toString() === this.classe){
              const da = d.salle              
              for(let i =0; i<da.length; i++){
                this.salles.push({text:da[i].nom, value:da[i]._id})                 
                }
          return true
            }         
              
          }) 
          return false                            
           },

async getEtudiantsByClasse(){ 
        await this.getSalles()  
        this.visible = true               
               this.$axios.defaults.headers.common.Authorization = 'Bearer ' + localStorage.getItem('authToken')
                await this.$axios.get('etudiant/all/').then( response => {                                              
                if(response.status === 201)
                    if(response.data.length === 0){
                          this.etudiants = []  
                          this.Nbetudiant = [] 
                    }            
                    else {
                    this.etudiants = filtreTab(response.data,"classe", "classe_id", this.classe)
                     this.nbetudiant = this.etudiants.length
                    }
                else                 
                 this.$notifier.showMessage({ content: 'Etudiant introuvable', color: 'error' })                                
                 })
                 this.visible = false
        },  
    
      //  async getetudiants(){
      //            this.getSalles() 
      //          this.$axios.defaults.headers.common.Authorization = 'Bearer ' + localStorage.getItem('authToken')
                
      //           await this.$axios.get('etudiant/classe/').then( response => {
                              
      //           if(response.status === 201)
      //               if(response.data.reponse.length === 0){
      //                     this.etudiants = []  
      //                      this.nbetudiant = [] 
      //               }             
      //               else {
      //                 this.etudiants = response.data.reponse;
      //                 this.nbetudiant = this.etudiants.length
      //               }
      //           else                 
      //            this.$notifier.showMessage({ content: 'etudiant introuvable', color: 'error' })                                
      //            })
      //   },    
      
        deleteEtudiant (etudiant) {
        this.$axios.delete('etudiant/' + etudiant._id).then(res => {         
          if (res.data.status === 1) { 
            this.$notifier.showMessage({ content: 'etudiant supprimé', color: 'success' })            
            return true 
            } 
            else {           
            return false }
        })
      },

      updateEtudiant (etudiant) {  
        this.visible = true  
        this.editedItem.anac =this.anac  
        this.editedItem.salle_id = etudiant.salle_id     
        this.$axios.patch( 'etudiant/' + etudiant.etudiant_salle_id  +'|'+ etudiant.id, etudiant).then(res => {
           if (res.data.status === 1) { 
               this.$notifier.showMessage({ content: 'etudiant modifié', color: 'success' })            
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
        this.editedIndex = this.etudiants.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },

      deleteItem (item) {
        this.editedIndex = this.etudiants.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialogDelete = true
      },

      deleteItemConfirm () {
        this.deleteEtudiant(this.editedItem)       
        this.etudiants.splice(this.editedIndex, 1)
        this.closeDelete()
      },

      save () {       
               
     
        if (this.editedIndex > -1) {          
          this.updateEtudiant(this.editedItem)
          Object.assign(this.etudiants[this.editedIndex], this.editedItem)
            } 
            else {
               this.storeEtudiant()
            }
          this.close()
      },

        close(){
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

  check_age(classe, datenais){
          if(parseInt(this.getAge(datenais)) < classe)
            return false;
          return true;
      },

     
    async storeEtudiant () {                 
         
        this.visible = true
        this.editedItem.parent_id = process.env.ecole_id
        this.editedItem.classe.push({classe_id:this.classe, salle_id:this.salle, annee:localStorage.anac})
        console.log(this.editedItem)
        this.$axios.defaults.headers.common.Authorization = 'Bearer ' + localStorage.authToken         
        await this.$axios.post('etudiant/', this.editedItem).then(res => {  
                     
          if (res.status === 201) {
             this.etudiants.push()
             this.$notifier.showMessage({ content: 'Etudiant enregistré avec succès', color: 'success' })    
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
         if(!this.check_age(this.classe,this.editedItem.datenais)){
            this.$notifier.showMessage({ content: 'La Date de naissance ne correspond pas a la classe!', color: 'error' })     
                  return false;
           }        
     
        if (this.editedIndex > -1) {
          this.editedItem.ecole_id = localStorage.ecole_id
          this.editedItem.classe_id = this.classe
          this.updateetudiant(this.editedItem)
          Object.assign(this.etudiants[this.editedIndex], this.editedItem)
            } 
            else {
               this.storeetudiant()
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
