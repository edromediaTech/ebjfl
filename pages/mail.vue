<template>
  <div>
    <head>
      <meta charset="utf-8">
      <title>UPNCH - Université Publique du Nord au Cap-Haitien</title>
      <meta content="width=device-width, initial-scale=1.0" name="viewport">
      <meta content="" name="keywords">
      <meta content="" name="description">

      <!-- Favicon -->
      <link href="img/favicon.ico" rel="icon">

      <!-- Google Web Fonts -->
      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <link href="https://fonts.googleapis.com/css2?family=Heebo:wght@400;500;600&family=Nunito:wght@600;700;800&display=swap" rel="stylesheet">

      <!-- Icon Font Stylesheet -->
      <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css" rel="stylesheet">
      <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css" rel="stylesheet">

      <!-- Libraries Stylesheet -->
      <link href="/lib/animate/animate.min.css" rel="stylesheet">
      <link href="/lib/owlcarousel/assets/owl.carousel.min.css" rel="stylesheet">

      <!-- Customized Bootstrap Stylesheet -->
      <link href="css/bootstrap.min.css" rel="stylesheet">

      <!-- Template Stylesheet -->
      <link href="css/style.css" rel="stylesheet">
    </head>

    <body>
        <base-material-card
      icon="mdi-at"
      title="Mail"
      class="px-5 py-3 mt-4" >
     
      <!-- Contact Start -->
      <v-card>
    <v-tabs     
      bg-color="primary"
    >
      <v-tab v-model="one" value="one" @click="checkNew"><v-icon>mdi-plus</v-icon> <b>Nouveau</b></v-tab>
      <v-tab v-model="two" value="two" @click="checkReceive"><v-icon>mdi-enveloppe</v-icon>  <b>Reception</b></v-tab>
      <v-tab v-model="three" value="three" @click="checkSent"><b>Envoyé</b></v-tab>
      <v-tab v-model="four" value="four" @click="checkTrash"><v-icon>mdi-delete</v-icon> <b>Corbeille</b></v-tab>
    </v-tabs>
    <v-card-text>
      <v-window >
        <v-window-item  v-if="one" v-model="one" value="one">
      <div class="container-xxl py-5">
        <div class="container">
          
          <div class="row g-4">           
           
            <div class="col-lg-2 col-md-12 wow fadeInUp" data-wow-delay="0.5s"></div>
            <div class="col-lg-8 col-md-12">
              <form>
                <div class="row g-3">
                  <div class="col-md-6">
                    <div class="form-floating">
                      <v-select
                          v-model="mail.from"
                          :items="[ {text:'info@upnch.univ.ht', value:'info@upnch.univ.ht'}, 
                                    {text:'rectorat@upnch.univ.ht', value:'rectorat@upnch.univ.ht'}, 
                                    {text:'administration@upnch.univ.ht', value:'administration@upnch.univ.ht'}, 
                                     {text:'secretariat@upnch.univ.ht', value:'secretariat@upnch.univ.ht'}]"
                          label="De*"                          
                        />               
                    
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-floating">
                      <v-text-field
                            v-model="mail.to"                         
                            label="A"
                            required
                          ></v-text-field>                
                    
                    </div>
                  </div>
                  <div class="col-md-12">
                    <div class="form-floating">
                      <v-text-field
                          v-model="mail.subject"                           
                          label="Sujet"                          
                          required
                        ></v-text-field>
                    </div>
                  </div>

                  <div class="col-12">
                    <div>
                         <ckeditor-nuxt v-model="mail.html"/>
                      <!-- <v-textarea id="message" v-model="mail.html"  label="Message"  /> -->
                      <!-- <label for="message">Message</label> -->
                    </div>
                  </div>
                  <v-progress-circular
                    v-show="visible"
                    :size="20"
                    :width="3"
                    color="info"
                    indeterminate
                    class="ma-auto"
                 />
                  <div class="col-12">
                    <v-btn class="btn-primary" @click="storeMail">Envoyer</v-btn>                   
                  </div>
                </div>
              </form>
            </div>
               <div class="col-lg-2 col-md-12 wow fadeInUp" data-wow-delay="0.5s"></div>
          </div>
        </div>
      </div>
     

    </v-window-item>

<v-window-item v-if="two"  v-model="two"  value="two" >
  <div class="row g-3">
                  <div class="col-md-6">
                    <div class="form-floating">
                      <v-select
                          v-model="email"
                          :items="[ {text:'info@upnch.univ.ht', value:'info@upnch.univ.ht'},
                                     {text:'rectorat@upnch.univ.ht', value:'rectorat@upnch.univ.ht'}, 
                                    {text:'administration@upnch.univ.ht', value:'administration@upnch.univ.ht'},                                   
                                     {text:'secretariat@upnch.univ.ht', value:'secretariat@upnch.univ.ht'}]"
                          label="De*"  
                          @change="getMails"                        
                        />               
                    
                    </div>
                    <v-progress-circular
                    v-show="visible"
                    :size="20"
                    :width="3"
                    color="info"
                    indeterminate
                    class="ma-auto"
                 />
                  </div>
                  </div>
  <v-data-table 
      v-if="receives.length > 0"
       v-model="selected" 
       show-select
       :headers="headers" 
       item-key="_id"
       :single-select = true
      :items="receives" show-expand  
      class="elevation-1" :footer-props="{'items-per-page-options':[50, 100, -1]}">   
         
      <template #[`item.created_at`]="{ item }">
            <span> {{getdate(item.created_at)}} </span>
      </template>

       <template #[`item.sup`]="{item}">
        <v-simple-checkbox
          v-model="item.sup"         
          value="item.sup"           
        ></v-simple-checkbox>
      </template>
     
      <template #expanded-item="{ item }">
      <td :colspan="headers.length" class="py-4">
        <!-- eslint-disable vue/no-v-html -->
           <span class="my-4" v-html="item.html"></span>
           <!--eslint-enable-->
        </td>    
        
    </template>
          
        <template #top>
          <v-toolbar flat>
             <v-btn
      class="mx-4 px-4"
      fab
      dark
      x-small
      color="primary"
      title="Suppression multiples"
      @click="deleteAllMessages"
    >
      <v-icon dark>
        mdi-delete
      </v-icon>
    </v-btn>
            <v-divider
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
                    @click="deleteMessage(id)"
                  >
                    OK
                  </v-btn>
                   
                  <v-spacer />
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-toolbar>
        </template>
        <template #[`item.actions`]="{item  }">  
          <v-icon
          :disabled="selected.length === 0"
           small
           title="Répondre"
           color="success"
            @click="checkRep"
          >
            mdi-plus
          </v-icon>       
          <v-icon
            :disabled="selected.length === 0"
            x-small
            title="Supprimer"
            color="info"
            @click="confirm(item)"
          >
            mdi-delete
          </v-icon>
         
        </template>
       
      </v-data-table>
</v-window-item>

<v-window-item v-if="three" v-model="three"  value="three">
  <div class="row g-3">
                  <div class="col-md-6">
                    <div class="form-floating">
                      <v-select
                          v-model="email"
                          :items="[ {text:'info@upnch.univ.ht', value:'info@upnch.univ.ht'},
                                    {text:'rectorat@upnch.univ.ht', value:'rectorat@upnch.univ.ht'}, 
                                    {text:'administration@upnch.univ.ht', value:'administration@upnch.univ.ht'}, 
                                     {text:'secretariat@upnch.univ.ht', value:'secretariat@upnch.univ.ht'}]"
                          label="De*"  
                          @change="getMails"                        
                        />               
                    
                    </div>
                    <v-progress-circular
                    v-show="visible"
                    :size="20"
                    :width="3"
                    color="info"
                    indeterminate
                    class="ma-auto"
                 />
                  </div>
                  </div>
  <v-data-table 
  v-if="sent.length > 0"
       v-model="selSent" 
       show-select
       :headers="headSent" 
       item-key="_id"
       :single-select = true
      :items="sent" show-expand  
      class="elevation-1" :footer-props="{'items-per-page-options':[50, 100, -1]}">   
         
      <template #[`item.created_at`]="{ item }">
            <span> {{getdate(item.created_at)}} </span>
      </template>

       <template #[`item.sup`]="{item}">
        <v-simple-checkbox
          v-model="item.sup"         
          value="item.sup"           
        ></v-simple-checkbox>
      </template>
     
      <template #expanded-item="{ item }">
      <td :colspan="headSent.length" class="py-4">
        <!-- eslint-disable vue/no-v-html -->
           <span v-html="item.html"></span>
           <!--eslint-enable-->
      </td>
    </template>
          
        <template #top>
          <v-toolbar flat>
             <v-btn
      class="mx-4 px-4"
      fab
      dark
      x-small
      color="primary"
      title="Suppression multiples"
      @click="deleteAllMessages"
    >
      <v-icon dark>
        mdi-delete
      </v-icon>
      
    </v-btn>
            <v-divider
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
                    @click="deleteMessage(id)"
                  >
                    OK
                  </v-btn>
                   
                  <v-spacer />
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-toolbar>
        </template>
        <template #[`item.actions`]="{item  }">
         
          <v-icon
            x-small
            @click="confirm(item)"
          >
            mdi-delete
          </v-icon>
        </template>
       
      </v-data-table>
</v-window-item>
<v-window-item v-if="four" v-model="four"  value="four">
  <div class="row g-3">
                  <div class="col-md-6">
                    <div class="form-floating">
                      <v-select
                          v-model="email"
                          :items="[{text:'rectorat@upnch.univ.ht', value:'rectorat@upnch.univ.ht'}, 
                                    {text:'administration@upnch.univ.ht', value:'administration@upnch.univ.ht'}, 
                                    {text:'info@upnch.univ.ht', value:'info@upnch.univ.ht'}, 
                                     {text:'secretariat@upnch.univ.ht', value:'secretariat@upnch.univ.ht'}]"
                          label="De*"  
                          @change="getMails"                        
                        />               
                    
                    </div>
                    <v-progress-circular
                    v-show="visible"
                    :size="20"
                    :width="3"
                    color="info"
                    indeterminate
                    class="ma-auto"
                 />
                  </div>
                  </div>
  <v-data-table 
  v-if="trashes.length > 0"
       v-model="selTrash" 
       show-select
       :headers="headTrash" 
       item-key="_id"
       :single-select = true
      :items="receives" show-expand  
      class="elevation-1" :footer-props="{'items-per-page-options':[50, 100, -1]}">   
         
      <template #[`item.created_at`]="{ item }">
            <span> {{getdate(item.created_at)}} </span>
      </template>
      <template #[`item.from`]="{ item }">
            <span>{{item.from}} </span>           
      </template>

       <template #[`item.sup`]="{item}">
        <v-simple-checkbox
          v-model="item.sup"         
          value="item.sup"           
        ></v-simple-checkbox>
      </template>
     
      <template #expanded-item="{ item }">
      <td :colspan="headTrash.length" class="py-4">
        <!-- eslint-disable vue/no-v-html -->
           <span v-html="item.html"></span>           
           <!--eslint-enable-->
      </td>
    </template>
          
        <template #top>
          <v-toolbar flat>
             <v-btn
      class="mx-4 px-4"
      fab
      dark
      x-small
      color="primary"
      title="Suppression multiples"
      @click="deleteAllMessages"
    >
      <v-icon dark>
        mdi-delete
      </v-icon>
    </v-btn>
            <v-divider
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
                    @click="deleteMessage(id)"
                  >
                    OK
                  </v-btn>
                   
                  <v-spacer />
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-toolbar>
        </template>
        <template #[`item.actions`]="{item  }">
         
          <v-icon
            x-small
            @click="confirm(item)"
          >
            mdi-delete
          </v-icon>
        </template>
       
      </v-data-table>
</v-window-item>
</v-window>
</v-card-text>
</v-card>
      <a href="#" class="btn btn-lg btn-primary btn-lg-square back-to-top"><i class="bi bi-arrow-up" /></a>

      <!-- JavaScript Libraries -->
      <script src="https://code.jquery.com/jquery-3.4.1.min.js" />
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js" />
      <script src="lib/wow/wow.min.js" />
      <script src="lib/easing/easing.min.js" />
      <script src="lib/waypoints/waypoints.min.js" />
      <script src="lib/owlcarousel/owl.carousel.min.js" />

      <!-- Template Javascript -->
      <script src="js/main.js" />
        </base-material-card>
    </body>
  </div>
</template>

<script>
import CkeditorNuxt from "@/components/ckeditornuxt";
export default {
  components: {CkeditorNuxt},
  middleware:'admin',
  data: () => ({
    visible: false,
    selected:[],
    selSent:[],
    selTrash:[],
    three: false,
    one:true,
    two:false,
    four:false,
    email:'',
    mail: { from: '', to: '', subject: '', html:'' },
    mails:[],
    data:[],
    receives:[],
    sent:[],
    trashes:[],
    dialogDelete:false,
    headers: [        
       { text: "De", value: "from" },             
       { text: 'Sujet', value: 'subject' },         
       { text: 'Date', value: 'created_at' },         
       { text: 'Actions', value: 'actions', sortable: false },
       ],
    headSent: [        
       { text: "A", value: "to" },    
       { text: 'Sujet', value: 'subject' },          
       { text: 'Date', value: 'created_at' },         
       { text: 'Actions', value: 'actions', sortable: false },
       ],
    headTrash: [ 
      { text: "De", value: "from" },        
       { text: "A", value: "to" },   
       { text: 'Sujet', value: 'subject' },           
       { text: 'Date', value: 'created_at' },         
       
       ]
  }),

  

mounted () {
 // this.getMails()
},
  methods: {
   // ...mapActions('auth', [ 'sendLogoutRequest', 'getUserData', 'setUser']),
  checkNew (){
    this.one = true
    this.two = false
    this.three = false
     this.four = false
  },
  checkRep (){
    this.one = true
    this.two = false
    this.three = false
     this.four = false
     this.mail.to = this.selected[0].from
     this.getMails()
  },
  checkReceive (){
   
    this.one = false
    this.two = true
    this.three = false
    this.four = false
    if(this.email !== '')
      this.getMails()
   
                   
  },
  checkSent(){   
    this.one = false
    this.two = false
    this.three = true
     this.four = false
     if(this.email !== '')
       this.getMails()
  },
  checkTrash(){   
    this.one = false
    this.two = false
    this.three = false
    this.four = true
    if(this.email !== '')
       this.getMails()
  },
   classifyMail(mails, email){      
     const messages = {sent:[], receives:[], trash:[]}
      for(const mail of mails){                
        if(mail.to.includes(email) === true && mail.trash === false)
           messages.receives.push(mail)
        if(mail.from === email && mail.trash === false)
           messages.sent.push(mail)
        if(mail.trash === true)
           messages.trash.push(mail)
      }
       return(messages)      
   },

   async  getMails () {     
          this.visible = true       
          this.$axios.defaults.headers.common.Authorization = 'Bearer ' + localStorage.getItem('authToken')
           const id = this.email              
            await this.$axios.get('mail/all/'+ id).then( response => {  
                                                 
                if(response.status === 200)
                    if(response.data.length === 0){
                          this.mails = []  
                          this.$notifier.showMessage({ content: 'Aucun message', color: 'info' })  
                    }              
                    else {
                    this.mails = response.data;                  
                    this.data = this.classifyMail(this.mails, id)
                    this.receives = this.data.receives
                    this.sent =  this.data.sent
                    this.trashes = this.data.trash                     
                    }
                else                 
                  this.$notifier.showMessage({ content: 'Message introuvable', color: 'error' })                                
                 })
            this.visible = false
        },


    async storeMail () {
      
      this.visible = true
      if (this.mail.from === ''|| this.mail.to === '' || this.mail.subject === '' || this.mail.html==='') {
        this.$notifier.showMessage({ content: 'Veuillez saisir les champs obligatoires', color: 'error' })
        return false
      }
      
      this.$axios.defaults.headers.common.Authorization = 'Bearer ' + localStorage.authToken
      await this.$axios.post('mail/', this.mail).then((res) => {
        if (res.status === 201) {
            this.$notifier.showMessage({ content: 'Mail envoyé avec succès', color: 'success' })
            this.mail.from = ''
            this.mail.to = ''
            this.mail.subject = ''
            this.mail.html = ''
        } else {
          this.$notifier.showMessage({ content: 'Echec:', color: 'error' })
        }
      })
      
      this.visible = false
    },

    message_id (){
            const tab = this.selected.map(item => item.id)
            this.tab_del = tab;
        },

        delItem(item){
            const sug = this.messages
            const sugg = sug.filter(it => item.id !== it.id)
            this.messages = sugg;        
        },

        delAllItem(tab){
            const sug = this.mesages
            const sugg = sug.filter(it => !tab.includes(it.id))
            this.mesages = sugg;        
        },

         async  deleteMessage (item) {
           
          this.visible = true             
           this.$axios.defaults.headers.common.Authorization = 'Bearer ' + localStorage.getItem('authToken')        
          await this.$axios.delete('contact/'+ item._id).then(res => {
           
           if(res.status === 200) {
               
               this.delItem(item)
                this.$notifier.showMessage({ content: 'Message supprimé', color: 'success' })  
                this.closeDelete()          
                return true 
             } 
            else {   
               this.$notifier.showMessage({ content: 'Echec!', color: 'success' })         
               return false
             }
          })
         this.visible = false
        },

         async  deleteAllMessages () {
             this.message_id()
             this.visible = true
             const tab = this.tab_del.join('|') 
          this.$axios.defaults.headers.common.Authorization = 'Bearer ' + localStorage.getItem('authToken')        
          await this.$axios.delete('message/all/'+ tab).then(res => {
          if (res.data !== 0) 
              this.delAllItem(tab)
                this.$notifier.showMessage({ content: res.data+' messages supprimés', color: 'success' })            
           this.visible = false
       })
        },

          confirm (item){   
              this.id = item
            this.dialogDelete = true
        },

    closeDelete () {
        this.dialogDelete = false
        },
    getdate(dated){
        console.log(new Date().getTime())
      const diff = new Date().getTime() - new Date(dated).getTime()
      if (diff < 0)
        return '0'
      const nbjour = Math.trunc(diff / ( 1000 * 60 * 60 * 24))
      if(nbjour > 6)
        return dated
      else if (nbjour < 6 && nbjour > 0 )
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
    

  }
  }

</script>
