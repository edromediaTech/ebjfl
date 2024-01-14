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
   

         <v-card>              
                  
                <v-card-text>
                  <v-container>
                    <p class="text-justify-center">  <b style="color: blue; font-size: 14px;" >Nous tenons à vous informer que notre site web ne gère pas les transactions financières directes. Ce formulaire vise simplement à recueillir des détails sur la transaction déjà effectuée, afin de compléter le processus et assurer une communication plus personnalisée.</b></p>
                    <v-row>
                          <v-col 
                        cols="12"
                        sm="6"
                        md="6"
                      >
                      <v-select
                          v-model="don.type"
                          :items="[{text:'Dime', value:Dime}, {text:'Offrande', value:Offrande},  {text:'offrande Moisson', value:Moisson},
                                  {text:'Don Particulier', value:Don}]"
                          label="Veuillez choisir votre Type de contribution*"                          
                        />
                      </v-col>
                      </v-row>

                     <span >
                      <v-row v-if="don.type !==''">
                        <v-col  
                        cols="12"
                        sm="6"
                        md="6"
                      >
                        <v-text-field
                          v-model="don.nom"
                          label="Nom*"
                           :rules="[v => !!v || 'Champ obligatoire']"
                           maxlength="25"
                           required
                        />
                      </v-col>
                        <v-col  v-if="don.type !==''"
                        cols="12"
                        sm="6"
                        md="6"
                      >
                        <v-text-field
                          v-model="don.prenom"
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
                      <v-text-field
                            v-model="don.pays"                       
                            label="Pays"
                            required
                          ></v-text-field>
                      </v-col>
                    
                     <v-col
                        cols="12"
                        sm="6"
                        md="6"
                      >
                      <v-text-field
                            v-model="don.ville"                            
                           
                            label="Ville"
                            required
                          ></v-text-field>  
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="6"
                      >
                      <v-text-field
                            v-model="don.telephone"                            
                            
                            label="Tél"
                            required
                          ></v-text-field> 
                      </v-col>
                        <v-col
                        cols="12"
                        sm="6"
                        md="6"
                      >
                      <v-text-field
                          v-model="don.email"
                          
                          label="Entrer votre e-mail"
                          
                          required
                        ></v-text-field>
                      </v-col>
                        <v-col
                        v-if="don.type !== 'Offrande' && don.type !=='Don' && don.type !=='Dime'"
                        cols="12"
                        sm="6"
                        md="6"
                      >
                      <v-select                            
                      v-model="district"
                      :items="districts"
                      :rules="[v => !!v || 'Choisir district']"
                      label="district"
                      required                       
                      ></v-select>
                      </v-col>
                        <v-col
                        cols="12"
                        sm="6"
                        md="6"
                      >
                      <v-select
                          v-model="don.service"
                          :items="[{text:'Banque', value:Banque}, {text:'Zelle', value:Zelle},  {text:'CashApp', value:CashApp},
                                  {text:'Paypal', value:Paypal},  {text:'Moncash', value:MonCash},  {text:'Natcash', value:Natcash}]"
                          label="Service*"                          
                        />
                      </v-col> 
                        <v-col
                        cols="12"
                        sm="6"
                        md="6"
                      >
                      <v-text-field
                            v-model="don.montant"                            
                           
                            label="montant"
                            type="number"
                            required
                          ></v-text-field>                    
                   
                      </v-col> 
                        <v-col
                        cols="12"
                        sm="6"
                        md="6"
                      >
                      <v-select
                          v-model="don.devise"
                          :items="[{text:'Gourdes', value:Gourdes}, {text:'Dollars', value:Dollars}]"
                          label="Devise*"                          
                        />                   
                   
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="6"
                      >
                      <v-text-field
                            v-model="don.datetrans"                            
                            label="Date Transaction"
                            type="date"
                            required
                          ></v-text-field>                    
                   
                      </v-col>  
                      <v-col
                        cols="12"
                        sm="6"
                        md="6"
                      >
                      <v-text-field
                            v-model="don.preuve"                  
                            label="Veuillez saisir une preuve de votre transaction"
                            required
                          ></v-text-field>                    
                   
                      </v-col> 
                      
                      <v-col v-if="don.type !== 'Offrande' &&don.type !=='Moisson'&& don.type !=='Dime'"
                        cols="12"
                        sm="6"
                        md="6"
                      >
                      <v-text-field
                            v-model="don.depensecible"                  
                            label="Souhaitez-vous guider l'impact de votre contribution? Dans quel domaine vous préférez voir votre soutien investi."
                            required
                          ></v-text-field>                    
                   
                      </v-col> 
                   
                    <div class="col-12">
                         <v-btn class="btn-primary text" @click="sendDon" >Envoyer</v-btn>   
                                   
                    </div> 
                  </v-row> 
                  </span>                                          
                    
                  </v-container>
                </v-card-text>
</v-card>
  

   
  
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
      if (this.don.montant ==='' || this.don.nom  ===''|| this.don.prenom ==='' || this.don.service ==='') {
        this.$notifier.showMessage({ content: 'Veuillez saisir les champs obligatoires', color: 'error' })
        return false
      }

      this.$axios.defaults.headers.common.Authorization = 'Bearer ' + localStorage.authToken
      await this.$axios.post('don/', this.don).then((res) => {
        if (res.status === 201) {
          this.dons.push(res.data)
          this.$notifier.showMessage({ content: 'Message envoyé avec succès', color: 'success' })
          this.$router.push({ name: 'thanks'}) 
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
<style>
.backimage {
  background-image: url('/images/offrande.jpg'); /* Chemin vers votre image */
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  height: 100vh; /* Ajustez la hauteur selon vos besoins */
  /* Ajoutez d'autres styles au besoin */
}
</style>