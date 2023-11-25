<template>
    <v-container>
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
   
    
    <!--====== PAGE BANNER PART START ======-->
    
    <div id="page-banner" class="pt-105 pb-190 mb-0 bg_cover top" data-overlay="8" style="background-image: url(img/dorvenica6.jpeg)">
        
    </div>
    
    <!--====== PAGE BANNER PART ENDS ======-->
    
    <!--====== CONTACT PART START ======-->
    
    <section id="contact-page" class="pt-0 pb-0 ">
        <div class="container">
            <div class="row gray-bg ">
                <div class="col-lg-5">
                    <div class="contact-from">
                        <div class="section-title">
                            <h5>Contactez-nous</h5>
                            
                        </div> <!-- section title -->
                        <div class="main-form pt-45 ">
                            <form >
                                <div class="row ">
                                    <div class="col-md-12">
                                       
                                            <v-text-field
                                                v-model="contact.nom"
                                                prepend-icon="mdi-account"
                                                label="Nom"
                                                required
                                              ></v-text-field>
                                       
                                    </div>
                                    <div class="col-md-12">
                                       
                                            <v-text-field
                                    v-model="contact.email"
                                    prepend-icon="mdi-lock"
                                    label="E-mail"
                                    :rules="emailRules"
                                    required
                        ></v-text-field>
                                      
                                    </div>
                                   
                                    <div class="col-md-12">
                                        <div class="singel-form form-group">
                                            <textarea  v-model="contact.message"  data-error="Please,leave us a message." required="required"></textarea>
                                            <div class="help-block with-errors"></div>
                                        </div> <!-- singel form -->
                                    </div>
                                    <p class="form-message"></p>
                                    <div class="col-md-12">
                                        <div class="singel-form">
                                            <button  class="main-btn" @click="storeContact">Envoyer</button>
                                        </div> <!-- singel form -->
                                    </div> 
                                    <v-progress-circular
                                    v-show="visible"
                                    :size="20"
                                    :width="3"
                                    color="info"
                                    indeterminate
                                    class="ma-auto"
                                    /> 
                                </div> <!-- row -->
                            </form>
                        </div> <!-- main form -->
                    </div> <!--  contact from -->
                </div>
                <div class="col-lg-7 gray-bg">
                    <div class="contact-address">
                        <div class="contact-heading">
                            <h5>Adresse</h5>
                            
                        </div>
                        <ul>
                            <li>
                                <div class="singel-address">
                                    <div class="icon">
                                        <i class="fa fa-home"></i>
                                    </div>
                                    <div class="cont">
                                        <h6>Ave Christ-Roi #17, zone la Rivière Canarie, Ouanaminthe, Nord-Est, Haiti WI</h6>
                                    </div>
                                </div> <!-- singel address -->
                            </li>
                            <li>
                                <div class="singel-address">
                                    <div class="icon">
                                        <i class="fa fa-phone"></i>
                                    </div>
                                    <div class="cont">
                                        <h6>(509) 3261-8684 / 4066-1728</h6>
                                        <h6>3455-8794 / 4002-2406 / (786)763-1578</h6>
                                    </div>
                                </div> <!-- singel address -->
                            </li>
                            <li>
                                <div class="singel-address">
                                    <div class="icon">
                                        <i class="fa fa-envelope-o"></i>
                                    </div>
                                    <div class="cont">
                                        <h6>dorvenicauniversity@gmail.com</h6>
                                        <h6>info@dorvenica.univ.ht</h6>
                                    </div>
                                </div> <!-- singel address -->
                            </li>
                            <li>
                                <div class="singel-address">
                                    <div class="icon">
                                        <i class="fa fa-globe"></i>
                                    </div>
                                    <div class="cont">
                                        <h6>www.dorvenica.univ.ht</h6>
                                      
                                    </div>
                                </div> <!-- singel address -->
                            </li>
                        </ul>
                    </div> <!-- contact address -->
                
                </div>
            </div> <!-- row -->
        </div> <!-- container -->

    </section>
    
    <!--====== CONTACT PART ENDS ======-->
   
   
   
    <!--====== BACK TO TOP PART START ======-->
    
    <a href="#" class="back-to-top"><i class="fa fa-angle-up"></i></a>
    
    <!--====== BACK TO TOP PART ENDS ======-->
    
    
    
    
    
    
    
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
</v-container>

</template>
<script>

export default {

  data: () => ({
    visible: false,
    loading :false,
    contact: { nom: '', email: '', message: '' },
    contacts: [],
    info: { nom: '' },
     emailRules: [
              (v) => !!v || 'E-mail obligatoire',
              (v) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail doit être valide'
            ],
  }),

  methods: {

    async storeContact () {
      this.visible = true
      this.loading = true
      if (this.contact.message ==='' || this.contact.nom  ===''|| this.contact.email ==='') {
        this.$notifier.showMessage({ content: 'Veuillez saisir les champs obligatoires', color: 'error' })
        return false
      }

      this.$axios.defaults.headers.common.Authorization = 'Bearer ' + localStorage.authToken
      await this.$axios.post('contact/', this.contact).then((res) => {
        if (res.status === 201) {
          this.contacts.push(res.data)
          this.$notifier.showMessage({ content: 'Message envoyé avec succès', color: 'success' })
          this.contact.message =''
          this.contact.nom  =''
          this.contact.email =''
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

