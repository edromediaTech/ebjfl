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
       <div class="container-fluid gray-bg " >
           <div class="container">
               <div class=" text-center position-relative pb-1 mb-1">
                   <h5 class="fw-bold text-primary text-uppercase mt-4">Connexion</h5>
                   <!-- <h1 class="mb-0">If You Have Any Query, Feel Free To Contact Us</h1> -->
               </div>
             
               <div class="row g-5">
                   <div class="col-lg-4 col-md-4 col-sm-6" ></div>
                   <div class="col-lg-4 col-md-4 col-sm-6" >
                       <form>
                          <v-card class="elevation-4 pa-3" >
                           <div class="row g-3">
                               <div class="col-md-12 col-sm-6">
                                    <v-text-field
                             v-model="email"
                              prepend-icon="mdi-account"
                             label="Entrer votre e-mail"
                             :rules="emailRules"
                             required
                           ></v-text-field>
                               </div>
                               <div class="col-md-12 col-sm-6">
                                     <v-text-field
                             v-model="password"
                             prepend-icon="mdi-lock"
                             label="Entrer le mot de passe"
                             min="8"
                             :append-icon="e1 ? 'mdi-eye' : 'mdi-eye-off'"
                             :type="e1 ? 'text' : 'password'"
                             :rules="passwordRules"
                             counter
                             required
                             @click:append="() => (e1 = !e1)"
                           ></v-text-field>
                               </div>                           
                             
                               <div class="col-12">
                                   <v-btn :class=" { 'blue darken-4 white--text' 
                               : valid, disabled: !valid }"
                                @click="login">
                                <v-progress-circular
                                 v-if="loading"
                                 :disabled="loading"
                                 :size="30"
                                 color="white"
                                 indeterminate
                               />
                                    Connecter</v-btn>
                               </div>
                           </div>
                             </v-card>
                       </form>
                   </div>
                    <div class="col-lg-4 wow slideInUp" data-wow-delay="0.3s"></div>
                 
               </div>
            
           </div>
       </div>
       <!-- Contact End -->
   
   
           
   
          <!-- Back to Top -->
       <a href="#" class="btn btn-lg btn-primary btn-lg-square rounded back-to-top"><i class="bi bi-arrow-up"></i></a>
   
       
    
    
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

      
   </body>
   
   
    </div>
   </template>
   
   <script>
    import {mapActions ,  mapGetters } from 'vuex'
    import {role} from '../middleware/role'
   
   // import footerPage from '~/components/footerPage'
   
   export default {
    
     props : {infos: { type: Object, default:()=>{}}},
      data () {
             return {
               valid: false,
               loading: false,
               e1: false,          
               password: '',
               ecole_id: '6377f98ee45a0aca8e904033',
               passwordRules: [
                 (v) => !!v || 'Password obligatoire',
               ],
               email: '',
               emailRules: [
                 (v) => !!v || 'E-mail obligatoire',
                 (v) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail doit être valide'
               ],
             }
           },
   
         computed: {
              ...mapGetters('auth', ['user']),
        // ...mapGetters(['errors']),
        },
        
           methods: {
               ...mapActions('auth', ['sendLoginRequest']),
   
       login () {        
           this.loading = true         
           // if (!this.$refs.form.validate()) { this.loading = false; return false }
           this.sendLoginRequest({email: this.email, password:this.password}).then(() => {
                  this.loading = false                  
                  this.$notifier.showMessage({ content: 'Succes!', color: 'success' })
                   
         if(parseInt(this.user.user_level) > role['Vice Recteur']){
                   this.$router.push({ name: 'statEtudiants' })  
          } 
               
         else if(parseInt(this.user.user_level) > role.Etudiant){
            if(this.user.checkInsc === false)
                  this.$router.push({ name: 'prof' })  
             else
                  this.$router.push({ name: 'devoirsProf' })  
          }
        
         else if(parseInt(this.user.user_level) > role.utilisateur){
             if(this.user.checkInsc === false)
                 this.$router.push({ name: 'etudiant' })  
             else
             this.$router.push({ name: 'dashEtudiant' })  
          }       
         else 
            this.$router.push({ path: '/' })      
          
          }).catch(() => {
             this.$notifier.showMessage({ content: 'Email ou Password incorrect!', color: 'error' })       
              this.loading = false
          })
         },
             submit () {
               if (this.$refs.form.validate()) {
                 this.$refs.form.$el.submit()
               }
             },
             clear () {
               this.$refs.form.reset()
             }
           },
   
   }
   </script>
   <style scoped lang="css">
   .login {
       height: 50%;
       width: 100%;
       position: relative;
       top: 0;
       left: 0;
       content: "";
       z-index: 0;
     }
   </style>
   
   
   
   