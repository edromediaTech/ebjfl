<template>
    <div>       

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
   

    <div class="container-xxl py-5">
        <div class="container">
         
          <div class="row g-4">
            </div>
            
          <div class="row g-4">
            <div class="col-lg-4 col-md-6 wow fadeInUp align-items-center justify-content-center" data-wow-delay="0.3s">
              <p class="text-justify">Nous souhaitons exprimer notre profonde gratitude à chacun d'entre vous qui fait partie de notre communauté 
                aimante et engagée. Votre soutien continu a été une bénédiction pour notre église et a joué un rôle 
                essentiel dans la réalisation de notre mission.</p>
             <p class="text-justify">"Chacun donne ce qu'il a décidé dans son cœur, sans tristesse ni contrainte, car Dieu aime celui qui donne avec joie." - 2 Corinthiens 9:7</p>
              <p>Votre contribution, quel que soit le montant, est une expression de votre amour pour Dieu et notre communauté. 
                Donnez avec joie et faites partie de notre engagement collectif envers le bien.</p>
            </div>
            <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
              
              <div class="d-flex align-items-center mb-3">
                <div class="d-flex align-items-center justify-content-center flex-shrink-0 bg-dark" style="width: 50px; height: 50px;">
                  <v-icon class="text-white ">mdi-bank</v-icon>
                  <!-- class="fa fa-bank text-white" /> -->
                </div>
                <div class="ms-3">
                  <h5 class="text-dark">
                    Gourdes
                  </h5>
                  <h6 class="mb-0">
                   0000000000 - BNC 
                  </h6>
                </div>
              </div>
              <div class="d-flex align-items-center mb-3">
                <div class="d-flex align-items-center justify-content-center flex-shrink-0 bg-dark" style="width: 50px; height: 50px;">
                  <v-icon class="text-white ">mdi-bank</v-icon>
                  <!-- class="fa fa-bank text-white" /> -->
                </div>
                <div class="ms-3">
                  <h5 class="text-dark">
                    Dollar
                  </h5>
                  <h6 class="mb-0">
                   0000000000 - BNC   
                  </h6>
                </div>
              </div>
              <div class="d-flex align-items-center mb-3">
                <div class="d-flex align-items-center justify-content-center flex-shrink-0 bg-dark" style="width: 50px; height: 50px;">
                  <v-icon class="text-white ">mdi-bank</v-icon>
                  <!-- class="fa fa-bank text-white" /> -->
                </div>
                <div class="ms-3">
                  <h5 class="text-dark">
                   Zelle
                  </h5>
                  <h6 class="mb-0">
                   0000000000 
                  </h6>
                </div>
              </div>
             
             
            </div>
            
            <div class="col-lg-5 col-md-12 wow fadeInUp" data-wow-delay="0.5s">
              <form>
                <div class="row g-3">
                  <div class="col-md-12">
                    <div class="form-floating">
                      <v-select
                          v-model="don.type"
                          :items="[{text:'Dime', value:Dime}, {text:'Offrande', value:Offrande},  {text:'offrande Moisson', value:Moisson},
                                  {text:'Don Particulier', value:Don}]"
                          label="Type*"
                          
                        />
                    </div>
                  </div>
                  <div class="col-md-12">
                    <div class="form-floating">
                      <v-text-field
                            v-model="don.nom"                            
                            prepend-icon="mdi-account"
                            label="Nom"
                            required
                          ></v-text-field>                    
                    </div>
                  </div>
                  <div class="col-md-12">
                    <div class="form-floating">
                      <v-text-field
                            v-model="don.prenom"                            
                            prepend-icon="mdi-account"
                            label="Prenom"
                            required
                          ></v-text-field>                    
                    </div>
                  </div>
                  <div class="col-md-12">
                    <div class="form-floating">
                      <v-select
                      v-model="selectedCountry"
                      :items="countries"
                      label="Pays"
                      prepend-icon="mdi-map-marker-alt"
                      required
                    ></v-select>
                    </div>
                  </div>
                  <div class="col-md-12">
                    <div class="form-floating">
                      <v-text-field
                            v-model="don.ville"                            
                            prepend-icon="mdi-account"
                            label="Ville"
                            required
                          ></v-text-field>                    
                    </div>
                  </div>
                  <div class="col-md-12">
                    <div class="form-floating">
                      <v-text-field
                            v-model="don.telephone"                            
                            prepend-icon="mdi-account"
                            label="Tél"
                            required
                          ></v-text-field>                    
                    </div>
                  </div>
                  <div class="col-md-12">
                    <div class="form-floating">
                      <v-text-field
                          v-model="don.email"
                           prepend-icon="mdi-account"
                          label="Entrer votre e-mail"
                          
                          required
                        ></v-text-field>
                    </div>
                  </div>
                  <div class="col-md-12">
                    <div class="form-floating">
                      <v-select                            
                      v-model="district"
                      :items="districts"
                      :rules="[v => !!v || 'Choisir district']"
                      label="district"
                      required                       
                      ></v-select>  
                    </div>
                  </div>
                  <div class="col-md-12">
                    <div class="form-floating">
                      <v-select
                          v-model="don.service"
                          :items="[{text:'Banque', value:Banque}, {text:'Zelle', value:Zelle},  {text:'CashApp', value:CashApp},
                                  {text:'Paypal', value:Paypal},  {text:'Moncash', value:MonCash},  {text:'Natcash', value:Natcash}]"
                          label="Service*"                          
                        />
                    </div>
                  </div>
                  <div class="col-md-12">
                    <div class="form-floating">
                      <v-text-field
                            v-model="don.montant"                            
                            prepend-icon="mdi-account"
                            label="montant"
                            type="number"
                            required
                          ></v-text-field>                    
                    </div>
                  </div>
                  <div class="col-md-12">
                    <div class="form-floating">
                      <v-select
                          v-model="don.devise"
                          :items="[{text:'Gourdes', value:Gourdes}, {text:'Dollars', value:Dollars}]"
                          label="Devise*"                          
                        />
                    </div>
                  </div>
                  <div class="col-12">
                    <v-btn class="btn-primary" @click="sendDon" >Envoyer</v-btn>
                   
                  </div>
                </div>
              </form>
            </div>
           
          </div>
        </div>
      </div>
      <!-- Contact End -->



  

   
  
    <!-- Back to Top -->
    <a href="#" class="btn btn-lg btn-primary btn-lg-square rounded back-to-top"><i class="bi bi-arrow-up"></i></a>


    <!-- JavaScript Libraries -->
    <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js"></script>
    <script src="lib/wow/wow.min.js"></script>
    <script src="lib/easing/easing.min.js"></script>
    <script src="lib/waypoints/waypoints.min.js"></script>
    <script src="lib/counterup/counterup.min.js"></script>
    <script src="lib/owlcarousel/owl.carousel.min.js"></script>

    <!-- Template Javascript -->
    <script src="js/main.js"></script>
</body>


    </div>
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
