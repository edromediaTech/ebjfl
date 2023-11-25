<template>
  
  <v-container
    id="regular-tables"
    fluid
    tag="section"
  >
    <base-material-card
      icon="mdi-account"
      title="Liste des utilisateurs"
      class="px-5 py-3 mt-4"
    >
      <h1>Gestion Utilisateur {{nbu}}</h1>
      <center>
        <v-progress-circular
          v-show="visible"
          :size="50"
          :width="3"
          color="primary"
          indeterminate
          class="ma-auto"
        />
      </center>
     
            
  <v-data-table  :search="search" :headers="headers" :items="users" :footer-props="{'items-per-page-options':[50, 100, -1]}"> 
        <template #[`item.last_seen`]="{ item }">
            <span> {{getdate(item.last_seen)}} </span> 
      </template>
          <template #[`item.statut`]="{ item }">
            <span v-if="item.statut ==='Online'"> <v-icon color="success" title="Online">mdi-circle</v-icon> </span> 
            <span v-else>  <v-icon color="gray" title="Offline">mdi-circle</v-icon> </span> 
      </template>
    <template #[`item.user_level`]="props"> 
         <!-- <v-edit-dialog
          :return-value.sync="props.item.user_level"
          @save="save"
          @cancel="cancel"
          @open="open"
          @close="close"
        > -->
          {{privilege[props.item.user_level] }}
          <!-- <template #input>
      <v-select      
          v-model="props.item.user_level"
          :items="privileges"
          label="Privileges" 
          @change="updatePrivilege(props.item)"         
        />
            </template>
        </v-edit-dialog> -->
      </template>
      <template #top>
          <v-toolbar flat>
             <v-col cols="12"
                  sm="6"        
              md="4">
             <v-text-field
         v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
             </v-col>
            <!-- <v-divider
              class="mx-4"
              inset
              vertical
            /> -->
            <v-spacer />
            <v-dialog
              v-model="dialog"
              max-width="500px"
            >
              
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
                        md="12"
                      >
                        <v-text-field
                          v-model="editedItem.name"
                          label="Nom"
                          maxlength="25"
                           required
                        />
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="12"
                      >
                       <v-select      
                        v-model="editedItem.user_level"
                        :items="privileges"
                        label="Privileges" 
                                 
                      />
                      </v-col>
                        <!-- <v-col
                        cols="12"
                        sm="6"
                        md="12"
                      >
                        <v-text-field
                          v-model="editedItem.password"
                         prepend-icon="mdi-lock"
                          label="Entrer le mot de passe"
                          min="8"
                          :append-icon="e1 ? 'mdi-eye' : 'mdi-eye-off'"
                          :type="e1 ? 'text' : 'password'"
                          :rules="passwordRules"
                          counter
                          required
                          @click:append="() => (e1 = !e1)"
                        />
                      </v-col>
                        <v-col
                        cols="12"
                        sm="6"
                        md="12"
                      >
                        <v-text-field
                          v-model="editedItem.password1"
                          label="Confirm Password"
                           prepend-icon="mdi-lock"                         
                          min="8"
                          :append-icon="e1 ? 'mdi-eye' : 'mdi-eye-off'"
                          :type="e1 ? 'text' : 'password'"
                          counter
                          required
                          @click:append="() => (e1 = !e1)"
                        />
                      </v-col> -->
                                                 
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
          </v-toolbar>
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
    middleware: 'admin', 
    data (){
        return {
          dialog: false,
          dialogDelete: false,
            nbu: 0,
            e1: false,
            search:'',
            visible: false,
            password:'',
            password1:'',
             passwordRules: [
              (v) => !!v || 'Password obligatoire',
            ],
        //     rules: {
        //     required: value => !!value || "Required.",
        //     password: value => {
        //       const pattern =" /^(?=.[a-z])(?=.[A-Z])(?=.[0-9])(?=.[!@#$%^&*])(?=.{8,})/"
        //       return (
        //     pattern.test(value) ||
        //     "Min. 8 characters with at least one capital letter, a number and a special character."
        //   );
        //   }
        // },

            users: [],
            privileges:[],
            // [{text: 'User', value:0},{text: 'Menagere', value:1}, {text: 'Cuisinière', value:2},
            // {text: 'Messager', value:3}, {text: 'Conseiller', value:4},{text: 'Eleve', value:5}, 
            // {text: 'Prof', value:6},  {text: 'Bibliothecaire', value:7}, {text: 'Psychologue', value:8}, 
            // {text:'Secretaire', value:9}, {text:'Surveillant', value:10},  {text:'Censeur', value:11},
            // {text:'Econome', value:12}, {text:'directeur', value:13},  {text:'Comptable', value:14},
            // {text:'Adm', value:15},   {text:'SupAdm', value:16}],
            privilege:['User', 'Etudiant',  'Professeur',
                         'bibliothecaire', 'secretaire Fac','Vice doyen','Doyen', 'Secretaire',
                         'Vice Recteur', 'Recteur', 'adm',  'supadm'],
           headers: [
              { text: "Statut", value: "statut" },
              { text: "Nom", value: "name" },              
              { text: "Email", value: "email" },
              // { text: "Dernière Visite", value: "last_seen" }, 
              { text: "Privilège", value: "user_level" },
              { text: 'Actions', value: 'actions', sortable: false },
            ],
      editedIndex: -1,
      editedItem: {
        name:'',
      //  password: '',  
        user_level:''    
       
      },
      defaultItem: {
        name:'',
        email: '',
        user_level:''       
      },
        }
    },
    computed : {
       formTitle () {
        return this.editedIndex === -1 ? 'Utilisateur' : 'Editer '
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
  mounted (){
     this.getRoles()
      this.get_users_online()
  },
  methods : {
async getRoles() {          
            this.loading =true           
                     
           this.$axios.defaults.headers.common.Authorization = 'Bearer ' + localStorage.getItem('authToken')
                 await this.$axios.get('role/all/').then(response => {                                    
                 const d = response.data
                 const val = Object.values(d)
                 const key = Object.keys(d)
                   for(let i =0; i<val.length; i++){
                 this.privileges.push({text:key[i], value:val[i]})                   
                }            
                             
            })
            this.loading = false
              
          },
     async  get_users_online () {
          this.$axios.defaults.headers.common.Authorization = 'Bearer ' + localStorage.getItem('authToken')       
              this.visible = true  
          await this.$axios.get('auth/all/').then(res => {
            
               this.users = res.data
               this.nbu = res.data.length
             this.visible = false
          })
        }, 

        
    
 updateUser (user) {  
    this.$axios.defaults.headers.common.Authorization = 'Bearer ' + localStorage.getItem('authToken')            
        this.$axios.patch('auth/' + user._id, this.editedItem).then(res => {
             if(res.status === 201)
                  this.$notifier.showMessage({ content: 'Utilisateur modifié', color: 'success' }) 
             else             
                 this.$notifier.showMessage({ content: 'Echec', color: 'error' }) 
             
        })
      },
      
 updatePrivilege (user) {  
   this.$axios.defaults.headers.common.Authorization = 'Bearer ' + localStorage.getItem('authToken')                
        this.$axios.patch('auth/'+ user._id, this.editedItem).then(res => {
           if(res.status === 201)
              this.$notifier.showMessage({ content: 'Privilege modifié', color: 'success' }) 
           else             
              this.$notifier.showMessage({ content: 'Echec', color: 'error' }) 
         
        })
      },

  
   deleteUser (user) {
        this.$axios.delete('user-delete/' + this.user.id).then(res => {
         
          if (res.status === 201) { 
            this.$notifier.showMessage({ content: 'Utilisateur supprimé', color: 'success' })            
            return true 
            } 
            else { 
              this.$notifier.showMessage({ content: 'Echec', color: 'error' })           
            return false }
        })
      },

       editItem (item) {
        this.editedIndex = this.users.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },

       save () {
            this.loading = true   

        //  if(this.editedItem.password !== this.editedItem.password1){
        //     this.$notifier.showMessage({ content: 'Password incorrect!', color: 'error' })     
        //           return false;
        //    } 

        if (this.editedIndex > -1) {         
          this.updateUser(this.editedItem)
          Object.assign(this.users[this.editedIndex], this.editedItem)
            } 
           
          this.close()
      },

      deleteItem (item) {
        this.editedIndex = this.users.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialogDelete = true
      },

      deleteItemConfirm () {
        this.deleteuser(this.editedItem)       
        this.users.splice(this.editedIndex, 1)
        this.closeDelete()
      },

      close () {
        this.dialog = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },

      closeDelete () {
        this.dialogDelete = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },

 getdate(dated){
      const diff = new Date().getTime() -new Date(dated).getTime()
      if (diff < 1000)
        return 'maintenant'
      const nbjour = Math.trunc(diff / ( 1000 * 60 * 60 * 24))
      if(nbjour > 6)
        return dated
      else if (nbjour <6 && nbjour > 0 )
         return ('il y a ' + nbjour + ' j')
      else {
        const nbheure = Math.trunc(diff / ( 1000 * 60 * 60))
        if (nbheure >11 )
          return 'Il y a '+nbheure + ' heures'
        else if (nbheure < 12 && nbheure > 0)
          return ('il y a ' + nbheure + 'h')
        else {
          const nbminute = Math.trunc(diff / ( 1000 * 60))
          if (nbminute > 29 )
            return ('moins de 1h')
          else if(nbminute < 30 && nbminute > 0)
            return ('il y a '+ nbminute + ' min')
          else {
            const nbseconde = Math.trunc(diff / ( 1000))
          if (nbseconde > 29 )
            return ('moins de 1mn')
          else if(nbseconde < 30 && nbseconde > 0)
            return ('il y a '+ nbseconde + ' sec')
          }
        }
      }
       },


        
    cancel() {
      this.snack = true;
      this.snackColor = "error";
      this.snackText = "Canceled";
    },
    open() {
      this.snack = true;
      this.snackColor = "info";
      this.snackText = "Dialog opened";
    },
   


  }
}
</script>