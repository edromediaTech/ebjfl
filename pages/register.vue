<template>
    <div> 
        <head>
   
   <!--====== Required meta tags ======-->
   <meta charset="utf-8">
   <meta http-equiv="x-ua-compatible" content="ie=edge">
   <meta name="description" content="">
   <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
   
   <!--====== Title ======-->
   <title>Edubin - LMS Education HTML Template</title>
   
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
      <div class="container-fluid py-1 gray-bg">
          <div class="container py-1">
              <div class="text-center position-relative pb-3 mb-5 mx-auto">
                  <h5 class="fw-bold text-primary text-uppercase">S'inscrire</h5>
                  <!-- <h1 class="mb-0">If You Have Any Query, Feel Free To Contact Us</h1> -->
              </div>
             
              <div class="row g-5">
                  <div class="col-lg-4 "></div>
                  <div class="col-lg-4 ">
                     <v-card class="elevation-4 pa-3" >
                      <form>
                          <div class="row g-3">
                              <div class="col-md-12 col-sm-6">
                                <v-text-field
                                  v-model="name"
                                  prepend-icon="mdi-account"
                                  label="Nom / Prenom"
                                  required
                            ></v-text-field>
                              </div>
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
                                  <v-btn :class=" { 'blue darken-4 white--text' : valid, disabled: !valid }"
                               @click="register">
                               <v-progress-circular
                      v-if="loading"
                      :disabled="loading"
                      :size="30"
                      color="white"
                      indeterminate
                    />
                               Inscrire</v-btn>
                              </div>
                          </div>
                      </form>
                     </v-card>
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
   import {  mapActions } from 'vuex'
  export default {
     
   data () {
            return {
              valid: false,
                loading: false,
              name: '',
              e1: false,
              password: '',
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
          methods: {
            ...mapActions('auth', ['sendRegisterRequest']),
  
        async register () {
         
           this.loading = true
           // console.log(this.name)
            await this.$axios.post( 'auth/signup', 
            {name: this.name, email:this.email, password:this.password})           
              // .then(response => response.json())
            .then(jsonResponse => {
               this.$notifier.showMessage({ content: 'Enregistrement réussi!', color: 'success' })
               this.$router.push("/login")
              this.loading = false
            })
        .catch(error => console.log('Error: ', error));
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
    #register {
      height: 50%;
      width: 100%;
      position: relative;
      padding-bottom: 1px;
      padding-top: 1px;
      top: 0;
      left: 0;
      content: "";
      z-index: 0;
    }
  </style>