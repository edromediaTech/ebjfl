<template>
<v-container>
    <head>
    <meta charset="utf-8">
    <title>EBJFL - Atteindre la communauté pour Christ.</title>
    <meta content="width=device-width, initial-scale=1.0" name="viewport">
    <meta content="Eglise Baptiste Jérusalem de Fort-Liberté" name="keywords">
    <meta content="Eglise Baptiste Jérusalem de Fort-Liberté" name="description">

    <!-- Favicon -->
    <link href="img/favicon.ico" rel="icon">

    <!-- Google Web Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800&family=Rubik:wght@400;500;600;700&display=swap" rel="stylesheet">

    <!-- Icon Font Stylesheet -->
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css" rel="stylesheet">

    <!-- Libraries Stylesheet -->
    <link href="lib/owlcarousel/assets/owl.carousel.min.css" rel="stylesheet">
    <link href="lib/animate/animate.min.css" rel="stylesheet">

    <!-- Customized Bootstrap Stylesheet -->
    <link href="css/bootstrap.min.css" rel="stylesheet">

    <!-- Template Stylesheet -->
    <link href="css/style.css" rel="stylesheet">
</head>

<body>
   
  
    <!--====== SHOP PART START ======-->
    
    <section id="shop-singel" class="pt-120 pb-120 gray-bg">
        <div class="container">
            <div class="shop-destails">
                <div class="row">
                    <div class="col-lg-6">
                        <div class="shop-left pt-30">
                            <div id="pills-tabContent" class="tab-content">
                                <!-- <div id="pills-image-1" class="tab-pane fade show active" role="tabpanel" aria-labelledby="pills-image-1-tab">
                                    <div class="shop-image">
                                        <a href="img/offrande.jpg" class="shop-items"><img src="img/offrande.jpg" width="550" alt="Shop"></a>
                                    </div>
                                </div> -->
                                <!-- <div id="pills-image-2" class="tab-pane fade" role="tabpanel" aria-labelledby="pills-image-2-tab">
                                    <div class="shop-image">
                                        <a href="img/gourde.jpg" class="shop-items"><img src="img/gourde.jpg" alt="Shop"></a>
                                    </div>
                                </div>
                                <div id="pills-image-3" class="tab-pane fade" role="tabpanel" aria-labelledby="pills-image-3-tab">
                                    <div class="shop-image">
                                        <a href="img/zelle.jpg" class="shop-items"><img src="img/zelle.jpg" alt="Shop"></a>
                                    </div>
                                </div>
                                <div id="pills-image-4" class="tab-pane fade" role="tabpanel" aria-labelledby="pills-image-4-tab">
                                    <div class="shop-image">
                                        <a href="images/shop-singel/ss-1.jpg" class="shop-items"><img src="images/shop-singel/ss-1.jpg" alt="Shop"></a>
                                    </div>
                                </div> -->
                            </div>
                            <ul id="pills-tab" class="nav nav-justified mt-30" role="tablist">
                                <li class="nav-item">
                                    <a id="pills-image-1-tab" class="active" data-toggle="pill" href="#pills-image-1" role="tab" aria-controls="pills-image-1" aria-selected="true">
                                        <span class="shop-thum">
                                            <img src="img/gourdes.jpg" width="150" alt="Thum">
                                        </span>
                                    </a>
                                </li>
                                <!-- <li class="nav-item">
                                    <a id="pills-image-2-tab" data-toggle="pill" href="#pills-image-2" role="tab" aria-controls="pills-image-2" aria-selected="false">
                                        <span class="shop-thum">
                                            <img src="img/dollar.jpg"  width="150" alt="Thum">
                                        </span>
                                    </a>
                                </li> -->
                                <li class="nav-item">
                                    <a id="pills-image-3-tab" data-toggle="pill" href="#pills-image-3" role="tab" aria-controls="pills-image-1" aria-selected="false">
                                        <span class="shop-thum">
                                            <img src="img/gourde.jpg"  width="150" alt="Thum">
                                        </span>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a id="pills-image-4-tab" data-toggle="pill" href="#pills-image-4" role="tab" aria-controls="pills-image-4" aria-selected="false">
                                        <span class="shop-thum">
                                            <img src="img/zelle.png" width="150" alt="Thum" >
                                        </span>
                                    </a>
                                </li>
                            </ul>
                        </div> <!-- shop left -->
                    </div>
                    <div class="col-lg-6">
                        <div class="shop-right pt-30">
                            <span class="text-gray mt-4">Merci beaucoup pour votre désir de soutenir le travail de l'EBJFL</span><br>
                           <br>
                            <span> <b>"Chacun donne ce qu'il a décidé dans son cœur, sans tristesse ni contrainte, car Dieu aime celui qui 
                                donne avec joie." - 2 Corinthiens 9:7</b> </span>
                            <br><br>
                                <p>Votre contribution, quel que soit le montant, est une expression de votre amour pour Dieu et notre communauté. 
                                    Donnez avec joie et faites partie de notre engagement collectif envers le bien.</p>
                                <p>Que Dieu vous bénisse abondamment pour votre contribution et votre dévouement continu.</p>
                            <div class="nice-number pt-15">
                                <v-select
                          v-model="don.type"
                          :items="[{text:'Dime', value:Dime}, {text:'Offrande', value:Offrande},  {text:'offrande Moisson', value:Moisson},
                                  {text:'Don Particulier', value:Don}]"
                          label="Type de contribution*"
                          
                        />
                            </div>
                            <div class="add-btn pt-15">
                                <button type="button" class="main-btn">Add to Cart</button>
                            </div>
                        </div>
                    </div>
                </div>  <!-- row -->
                <div class="row">
                    <div class="col-lg-12">
                        <div class="shop-reviews mt-60">
                            <ul id="myTab" class="nav" role="tablist">
                                <li class="nav-item">
                                    <a id="description-tab" class="active" data-toggle="tab" href="#description" role="tab" aria-controls="description" aria-selected="true">Description</a>
                                </li>
                                <li class="nav-item">
                                    <a id="reviews-tab" data-toggle="tab" href="#reviews" role="tab" aria-controls="reviews" aria-selected="false">Reviews</a>
                                </li>
                            </ul> <!-- nav -->
                            <div id="myTabContent" class="tab-content">
                                <div id="description" class="tab-pane fade show active" role="tabpanel" aria-labelledby="description-tab">
                                    <div class="description-cont pt-40">
                                        <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
                                    </div>
                                </div> <!-- row -->
                                <div id="reviews" class="tab-pane fade" role="tabpanel" aria-labelledby="reviews-tab">
                                    <div class="reviews-cont">
                                        <ul>
                                           <li>
                                               <div class="singel-reviews">
                                                    <div class="reviews-author">
                                                        <div class="author-thum">
                                                            <img src="images/review/r-1.jpg" alt="Reviews">
                                                        </div>
                                                        <div class="author-name">
                                                            <h6>Bobby Aktar</h6>
                                                            <span>April 03, 2019</span>
                                                        </div>
                                                    </div>
                                                    <div class="reviews-description pt-20">
                                                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which.</p>
                                                        <div class="rating">
                                                            <ul>
                                                                <li><i class="fa fa-star"></i></li>
                                                                <li><i class="fa fa-star"></i></li>
                                                                <li><i class="fa fa-star"></i></li>
                                                                <li><i class="fa fa-star"></i></li>
                                                                <li><i class="fa fa-star"></i></li>
                                                            </ul>
                                                            <span>/ 5 Star</span>
                                                        </div>
                                                    </div>
                                                </div> <!-- singel reviews -->
                                           </li>
                                           <li>
                                               <div class="singel-reviews">
                                                    <div class="reviews-author">
                                                        <div class="author-thum">
                                                            <img src="images/review/r-2.jpg" alt="Reviews">
                                                        </div>
                                                        <div class="author-name">
                                                            <h6>Humayun Ahmed</h6>
                                                            <span>April 13, 2019</span>
                                                        </div>
                                                    </div>
                                                    <div class="reviews-description pt-20">
                                                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which.</p>
                                                        <div class="rating">
                                                            <ul>
                                                                <li><i class="fa fa-star"></i></li>
                                                                <li><i class="fa fa-star"></i></li>
                                                                <li><i class="fa fa-star"></i></li>
                                                                <li><i class="fa fa-star"></i></li>
                                                                <li><i class="fa fa-star"></i></li>
                                                            </ul>
                                                            <span>/ 5 Star</span>
                                                        </div>
                                                    </div>
                                                </div> <!-- singel reviews -->
                                           </li>
                                        </ul>
                                        <div class="reviews-form">
                                            <form action="#">
                                                <div class="row">
                                                    <div class="col-md-6">
                                                        <div class="form-singel">
                                                            <input type="text" placeholder="Fast name">
                                                        </div>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <div class="form-singel">
                                                            <input type="text" placeholder="Last Name">
                                                        </div>
                                                    </div>
                                                    <div class="col-lg-12">
                                                        <div class="form-singel">
                                                            <div class="rate-wrapper">
                                                                <div class="rate-label">Your Rating:</div>
                                                                <div class="rate">
                                                                    <div class="rate-item"><i class="fa fa-star" aria-hidden="true"></i></div>
                                                                    <div class="rate-item"><i class="fa fa-star" aria-hidden="true"></i></div>
                                                                    <div class="rate-item"><i class="fa fa-star" aria-hidden="true"></i></div>
                                                                    <div class="rate-item"><i class="fa fa-star" aria-hidden="true"></i></div>
                                                                    <div class="rate-item"><i class="fa fa-star" aria-hidden="true"></i></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-lg-12">
                                                        <div class="form-singel">
                                                            <textarea placeholder="Comment"></textarea>
                                                        </div>
                                                    </div>
                                                    <div class="col-lg-12">
                                                        <div class="form-singel">
                                                            <button type="button" class="main-btn">Post Comment</button>
                                                        </div>
                                                    </div>
                                                </div> <!-- row -->
                                            </form>
                                        </div> <!-- reviews form -->
                                    </div>
                                </div> <!-- row -->
                            </div> <!-- tab-content -->
                        </div> <!-- shop reviews -->
                    </div>
                </div> <!-- row -->
            </div> <!-- shop-destails -->
            <div class="releted-item pt-110">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="title pb-10">
                            <h3>Releted products</h3>
                        </div>
                    </div>
                </div> <!-- row -->
                <div class="row justify-content-center">
                    <div class="col-lg-3 col-md-6 col-sm-8">
                        <div class="singel-publication mt-30">
                            <div class="image">
                                <img src="images/publication/p-1.jpg" alt="Publication">
                                <div class="add-cart">
                                    <ul>
                                        <li><a href="#"><i class="fa fa-shopping-cart"></i></a></li>
                                        <li><a href="#"><i class="fa fa-heart-o"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="cont">
                                <div class="name">
                                    <a href="shop-singel.html"><h6>Set for life </h6></a>
                                    <span>$50.00</span>
                                </div>
                                <div class="button text-right">
                                    <a href="#" class="main-btn">Buy Now</a>
                                </div>
                            </div>
                        </div> <!-- singel publication -->
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-8">
                        <div class="singel-publication mt-30">
                            <div class="image">
                                <img src="images/publication/p-2.jpg" alt="Publication">
                                <div class="add-cart">
                                    <ul>
                                        <li><a href="#"><i class="fa fa-shopping-cart"></i></a></li>
                                        <li><a href="#"><i class="fa fa-heart-o"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="cont">
                                <div class="name">
                                    <a href="shop-singel.html"><h6>Set for life </h6></a>
                                    <span>$50.00</span>
                                </div>
                                <div class="button text-right">
                                    <a href="#" class="main-btn">Buy Now</a>
                                </div>
                            </div>
                        </div> <!-- singel publication -->
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-8">
                        <div class="singel-publication mt-30">
                            <div class="image">
                                <img src="images/publication/p-3.jpg" alt="Publication">
                                <div class="add-cart">
                                    <ul>
                                        <li><a href="#"><i class="fa fa-shopping-cart"></i></a></li>
                                        <li><a href="#"><i class="fa fa-heart-o"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="cont">
                                <div class="name">
                                    <a href="shop-singel.html"><h6>Set for life </h6></a>
                                    <span>$50.00</span>
                                </div>
                                <div class="button text-right">
                                    <a href="#" class="main-btn">Buy Now</a>
                                </div>
                            </div>
                        </div> <!-- singel publication -->
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-8">
                        <div class="singel-publication mt-30">
                            <div class="image">
                                <img src="images/publication/p-4.jpg" alt="Publication">
                                <div class="add-cart">
                                    <ul>
                                        <li><a href="#"><i class="fa fa-shopping-cart"></i></a></li>
                                        <li><a href="#"><i class="fa fa-heart-o"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="cont">
                                <div class="name">
                                    <a href="shop-singel.html"><h6>Set for life </h6></a>
                                    <span>$50.00</span>
                                </div>
                                <div class="button text-right">
                                    <a href="#" class="main-btn">Buy Now</a>
                                </div>
                            </div>
                        </div> <!-- singel publication -->
                    </div>
                </div>  <!-- row -->
            </div> <!-- releted item -->
        </div> <!-- container -->
    </section>
    
    <!--====== COURSES PART ENDS ======-->
   
   
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
   
    <script src="js/map-script.js"></script>

</body>
</v-container>
</template>
<script>

// import {countries} from 'countries-list';

export default {

  data: () => ({
    visible: false,
    loading :false,
    selectedCountry: null,
    don: { nom:'', prenom:'', email: '', pays:'', ville: '', service:'', depensecible:'', district:'', preuve:'', 
          datetrans:'',  montant:'', devise:'', telephone:'', type:'' },
    // countries: Object.values(countries),
   districts:[],
    dons: [],
    info: { nom: '' },
     emailRules: [
              (v) => !!v || 'E-mail obligatoire',
              (v) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail doit être valide'
            ],
  }),

  mounted (){
    this.getDistricts()
  },

  methods: {
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
    async sendDon() {
      this.visible = true
      this.loading = true
      if (this.don.montant ==='' || this.don.nom  ===''|| this.don.email ==='') {
        this.$notifier.showMessage({ content: 'Veuillez saisir les champs obligatoires', color: 'error' })
        return false
      }

      this.$axios.defaults.headers.common.Authorization = 'Bearer ' + localStorage.authToken
      await this.$axios.post('don/', this.don).then((res) => {
        if (res.status === 201) {
          this.dons.push(res.data)
          this.$notifier.showMessage({ content: 'Message envoyé avec succès', color: 'success' })
          this.don.montant =''
          this.don.nom  =''
          this.don.email =''
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

