<template>
  <div>
    
    <head>
   
   <!--====== Required meta tags ======-->
   <meta charset="utf-8">
   <meta http-equiv="x-ua-compatible" content="ie=edge">
   <meta name="description" content="">
   <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
   
   <!--====== Title ======-->
   <title>Dorvenica University - Dorvenica the Best University</title>
   
   <!--====== Favicon Icon ======-->
   <link rel="shortcut icon" href="images/favicon.png" type="image/png">

   <!--====== Slick css ======-->
   <link rel="stylesheet" href="css/slick.css">

   <!--====== Animate css ======-->
   <link rel="stylesheet" href="css/animate.css">
   
   <!--====== Nice Select css ======-->
   <link rel="stylesheet" href="css/nice-select.css">
   
   <!--====== Nice Number css ======-->
   <link rel="stylesheet" href="css/jquery.nice-number.min.css">

   <!--====== Magnific Popup css ======-->
   <link rel="stylesheet" href="css/magnific-popup.css">

   <!--====== Bootstrap css ======-->
   <link rel="stylesheet" href="css/bootstrap.min.css">
   
   <!--====== Fontawesome css ======-->
   <link rel="stylesheet" href="css/font-awesome.min.css">
   
   <!--====== Default css ======-->
   <link rel="stylesheet" href="css/default.css">
   
   <!--====== Style css ======-->
   <link rel="stylesheet" href="css/style.css">
   
   <!--====== Responsive css ======-->
   <link rel="stylesheet" href="css/responsive.css">
 
 
</head>

<body>
   
    <!-- Contact Start -->
    <div class="container-fluid py-5 gray-bg" >
        <div class="container py-5">
            <div class="text-center position-relative mx-auto " >
                <h5 class="fw-bold text-primary text-uppercase">Inscription <span>Postulant</span></h5>               
            </div>            
            <div class="row g-5">
                <div class="col-lg-12 wow slideInUp" data-wow-delay="0.3s">
                  <form>  
  <div class="row g-3">                        
    <div class="col-md-4 col-sm-6"></div>                        
      <div v-if="checkCode === false " class="col-md-4 col-sm-6 ma-4 px-4">
        <v-card>
           <v-text-field
              v-model="inscription.email"
              label="Veuillez saisir votre adresse email"
               :rules="emailRules"
               class="px-4 mt-3"
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
      </div>
    
      <div class="col-md-4 col-sm-6"></div>
      <div class="row g-3">
         <div class="col-md-4 col-sm-6">  </div>
      <div class="col-md-4 col-sm-6"> 
       <v-card>  
        <p  v-if="checkCode === true && verif === false" class="px-4">
          <b style="color: blue; font-size: 14px;" >Un message vous a été envoyé à votre email, veuillez saisir le code de verification.</b></p>                          
           <v-text-field
           v-if="checkCode === true && verif === false"
              v-model="inputCode"
              label="Code de Vérification" 
              class="px-4"  
              maxlength ="6"                                  
             required
           ></v-text-field>
            <v-btn v-if="checkCode === true && verif === false" color="primary" class="mb-2 px-4" small @click="codeVerification">Verifier</v-btn>
         </v-card>
      </div>
         <div class="col-md-4 col-sm-6"> </div>                               
         </div>    
     </div>
  <div v-if="verif === true" class="row g-3">
   <div class="col-md-6 col-sm-6">
      <v-text-field
          v-model="inscription.nom"                               
          label="Nom"
          required
       ></v-text-field>
       </div> 
  
      <div class="col-md-6 col-sm-6">
           <v-text-field
              v-model="inscription.prenom"  
              label="Prénom"
             required
         ></v-text-field>
      </div>
      
<div class="col-md-6 col-sm-6">
<v-text-field
    v-model="inscription.naissance"
    label="Date Naissance"
    type="date"  
    required>
  </v-text-field>
              </div>    
<div class="col-md-6 col-sm-6">
                <v-text-field
    v-model="inscription.adresse"
    label="Adresse"                          
    required>
  </v-text-field>
              </div>  
                      
<div class="col-md-6 col-sm-6">
    <v-select
    v-model="inscription.sexe"
    :items="[{text:'Masculin', value:1}, {text:'Féminin', value:0}]"
    label="Sexe*"/>
</div>                                                  

     
      <div class="col-md-6 col-sm-6">
           <v-text-field
              v-model="inscription.telephone"
              label="Téléphone"
             required
  ></v-text-field>
      </div>

          
        <v-col   cols="12"  sm="6"    md="6">
          <v-select                            
              v-model="inscription.faculte"
              :items="facultes"
              :rules="[v => !!v || 'Choisir faculté']"
              label="Faculté"
              required    
              @change="getOptions"             
              ></v-select> 
          </v-col>                          
        <v-col   cols="12"  sm="6"    md="6">
          <v-select                            
              v-model="inscription.option"
              :items="options"
              :rules="[v => !!v || 'Choisir Option']"
              label="Option"
              required>
              </v-select>
            </v-col>                 

      <div class="col-12">
         <v-btn color="primary" @click="storeInscription">Soumettre</v-btn>
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
  
</form>

                </div>               
            </div>
        </div>
    </div>
    <!-- Contact End -->
   <!--====== BACK TO TP PART START ======-->
    
   <a href="#" class="back-to-top"><i class="fa fa-angle-up"></i></a>
    
    <!--====== BACK TO TP PART ENDS ======-->
   
    
    <!--====== jquery js ======-->
    <script src="js/vendor/modernizr-3.6.0.min.js"></script>
    <script src="js/vendor/jquery-1.12.4.min.js"></script>

    <!--====== Bootstrap js ======-->
    <script src="js/bootstrap.min.js"></script>
    
    <!--====== Slick js ======-->
    <script src="js/slick.min.js"></script>
    
    <!--====== Magnific Popup js ======-->
    <script src="js/jquery.magnific-popup.min.js"></script>
    
    <!--====== Counter Up js ======-->
    <script src="js/waypoints.min.js"></script>
    <script src="js/jquery.counterup.min.js"></script>
    
    <!--====== Nice Select js ======-->
    <script src="js/jquery.nice-select.min.js"></script>
    
    <!--====== Nice Number js ======-->
    <script src="js/jquery.nice-number.min.js"></script>
    
    <!--====== Count Down js ======-->
    <script src="js/jquery.countdown.min.js"></script>
    
    <!--====== Validator js ======-->
    <script src="js/validator.min.js"></script>
    
    <!--====== Ajax Contact js ======-->
    <script src="js/ajax-contact.js"></script>
    
    <!--====== Main js ======-->
    <script src="js/main.js"></script>
    
    <!--====== Map js ======-->
    <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDC3Ip9iVC0nIxC6V14CKLQ1HZNF_65qEQ"></script>
    <script src="js/map-script.js"></script>
</body>


  </div>
</template>
<script>
import {createCode} from '../helper'
export default {

  data: () => ({
    visible: false,
    loading :false,
    inscription: { nom: '', prenom: '',  telephone:'', sexe:'', email:'', faculte:'', naissance:'', adresse:'', annee:'2023-2024', code:'' },
      inscriptions: [],
      inputCode:'',
      inscrits: [],
      facultes :[],
      options:[],
      dataFac:[],
      code: false,
      verif : false,
      checkCode : false,
      bverifemail:false,
         info: { nom: '' },
       emailRules: [
                (v) => !!v || 'E-mail obligatoire',
                (v) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail doit être valide'
              ],
      mail: { from: 'noreply@upnch.univ.ht', to: '', subject: 'Code d\'Inscription', html:''},
  }),

  mounted(){
    this.getInscrits()
    
  },

  methods: {
   async getInscrits(){
         //  this.$axios.defaults.headers.common.Authorization = 'Bearer ' + localStorage.getItem('authToken')
        const annee = '2023-2024'                
                await this.$axios.get('inscription/all/'+annee).then( response => {
                 // console.log(response.data)                              
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

    functionValEmail(){
           this.bverifemail = this.ValidateEmail(this.inscription.email)       
       },

    ValidateEmail(email){
        const mailformat = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
          if(email.match(mailformat))
              return true;
          else
            return false;
    },

    async sendCode(){   
      this.visible = true   
      const rand = (createCode(this.inscrits))
        this.mail.to = this.inscription.email
      this.mail.html = 'Cher(e) postulant(e), <br><br> Veuillez utiliser le code ci-dessous pour poursuivre le processus d\'inscription en ligne. <br><br>Votre code est <b style="font-size:24px;">'+ rand+'</b> <br> <br> <img src="https://upnch.univ.ht/img/piedEmail.jpg" width="280">'
         await this.$axios.post('mail/', this.mail).then((res) => {
        if (res.status === 201) {
           this.code = rand 
           this.checkCode = true          
           
        } else {
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
                    En attendant de soumettre les pièces sous-mentionnées : 
                   <br><ul>  <li>Original et copie de l'acte de naissance ou extrait des archives.</li>
                        <li>Original et copie du certificat de fin d'etudes secondaires (ou attestation de réussite) : Bacc II, Bac unique ou équivalent.</li>
                        <li>Trois photos d'identité de date récente (Format Passeport)</li>
                        <li>Original et copie de la Carte d'identification Nationale ou Matricul Fiscal</li>
                        <li>Fiche de paiement des frais d'inscription de mille cinq cent  (1 500) gourdes à payer à la BNC au nom et au numéro de compte : UPNCH 2040001401 </li></ul><br> 
                     <br><img src="https://upnch.univ.ht/img/piedEmail.jpg" width="280">`

        this.mail.to = this.inscription.email
         await this.$axios.post('mail/', this.mail).then((res) => {
        if (res.status === 201) {
           this.code = rand 
           this.checkCode = true          
           
        } else {
          this.$notifier.showMessage({ content: 'Echec:', color: 'error' })
        }
      })
      
      this.visible = false
    
    },

    codeVerification(){
       if(parseInt(this.code) === parseInt(this.inputCode)){            
          this.verif = true         
        }
        else{
           this.$notifier.showMessage({ content: 'Code invalide:', color: 'error' })
        }
    },
    
     async getFacultes(){  
         this.$axios.defaults.headers.common.Authorization = 'Bearer ' + localStorage.getItem('authToken')
                 await this.$axios.get('faculte/all/').then(response => {  
                  console.log(response.data)                                
                 const d = response.data
                 this.dataFac = response.data
                  for(let i =0; i<d.length; i++){
                 this.facultes.push({text:d[i].nom, value:d[i]._id})                   
                }                  
            })
            // this.getOptions()
        },

    getOptions(){  
      this.options = [] 
          for(const fac of this.dataFac)             
            if(fac._id === this.inscription.faculte){                           
                for(let i =0; i<fac.options.length; i++)                
                 this.options.push({text:fac.options[i].nom, value:fac.options[i]._id})            
          }                                         
            
        },

    async storeInscription () {
      this.visible = true
        this.loading = true
  
              if (this.inscription.prenom ==='' || this.inscription.nom  ===''|| this.inscription.email ==='' || this.inscription.faculte === '') {
                  this.$notifier.showMessage({ content: 'Veuillez saisir les champs obligatoires', color: 'error' })
              return false
        }
       // this.$axios.defaults.headers.common.Authorization = 'Bearer ' + localStorage.authToken
       this.inscription.code = this.code
      
        await this.$axios.post('inscription/', this.inscription).then((res) => {
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
      this.loading = false
      this.visible = false
    }

  }
}
</script>
