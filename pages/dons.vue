<template>
    <v-container >       

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

<body  style=" background-color: rgb(241, 241, 241);">
 
   
<h3 style="color: rgb(106, 106, 247); background-color: rgb(241, 241, 241);" class="mt-4" ><center>Formulaire de Suivi des transactions</center></h3>
<p class="text-justify-center px-4 mx-4 mt-0"  style="color: gray; background-color: rgb(241, 241, 241); font-size: 14px;">  Nous tenons à vous informer que notre site web 
  ne gère pas les transactions financières directes. Ce formulaire vise simplement à recueillir des détails sur la 
  transaction déjà effectuée, afin de compléter le processus et assurer une communication plus personnalisée.</p>
               
         <v-card class="px-4 mx-4 pb-4"> 
                  
                <v-card-text>
                  <v-container>
                   
                    <v-row>
                          <v-col 
                        cols="12"
                        sm="6"
                        md="4"
                      >
                      <v-select
                          v-model="don.type"
                          :items="[{text:'Dime', value:Dime}, {text:'Offrande', value:Offrande},  {text:'Offrande Moisson', value:Moisson},
                                  {text:'Don Particulier', value:Don}]"
                          label="Veuillez choisir votre Type de contribution*"                          
                        />
                      </v-col>
                      </v-row>

                     <span >
                   
                      <v-row v-if="don.type !==''">
                        <p class="mt-4" style="color: blue;">Tous les champs avec un astérisque (*) sont obligatoires</p>
                        <v-col  
                        cols="12"
                        sm="6"
                        md="4"
                      >
                        <v-text-field
                          v-model="don.nom"
                          label="Nom*"
                           :rules="[v => !!v || 'Champ obligatoire']"
                           maxlength="25"
                           prepend-icon="mdi-account"
                           required
                        />
                      </v-col>
                      
                        <v-col  v-if="don.type !==''"
                        cols="12"
                        sm="6"
                        md="4"
                      >
                        <v-text-field
                          v-model="don.prenom"
                          label="Prénom*"
                           maxlength="55"
                           :rules="[v => !!v || 'Champ obligatoire']"
                           prepend-icon="mdi-account-outline"
                           required
                        />
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="4"
                      >
                      <v-select                            
                      v-model="don.pays"
                      :items="[{text:'USA', value:USA}, {text:'Canada', value:Canada}, {text:'Chili', value:Chili},
                                {text:'Bresil', value:Bresil}, {text:'Guyanne', value:Guyanne}, 
                                {text:'Rep. Dominicaine', value:Dominicanie}, {text:'Mexique', value:Mexique},
                                {text:'Turquie', value:Turquie},  {text:'Autre', value:Autre}]"                    
                      :rules="[v => !!v || 'Choisir Pays']"
                      label="Pays*"
                      prepend-icon="mdi-alt-marker"
                      required                       
                      ></v-select>
                      </v-col>
                                         
                     <v-col
                        v-if="don.pays === 'Autre'"
                        cols="12"
                        sm="6"
                        md="4"
                      >
                      <v-text-field
                            v-model="don.pays"                          
                            prepend-icon="mdi-alt-marker"
                            label="Pays*"
                            required
                          ></v-text-field>  
                      </v-col>
                     <v-col
                        cols="12"
                        sm="6"
                        md="4"
                      >
                      <v-text-field
                            v-model="don.ville"                          
                            prepend-icon="mdi-city"
                            label="Ville*"
                            required
                          ></v-text-field>  
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="4"
                      >
                      <v-text-field
                        v-model="don.telephone"                            
                        prepend-icon="mdi-phone"
                        label="Téléphone"
                        required
                      ></v-text-field> 
                      </v-col>
                        <v-col
                        cols="12"
                        sm="6"
                        md="4"
                      >
                      <v-text-field
                          v-model="don.email"
                          prepend-icon="mdi-mail"
                          label="Email"
                          
                          required
                        ></v-text-field>
                      </v-col>
                        <v-col
                        v-if="don.type === 'Offrande Moisson'"
                        cols="12"
                        sm="6"
                        md="4"
                      >
                      <v-select                            
                      v-model="district"
                      :items="[{text:'Bethleem', value:Bethleem}, {text:'Canaan', value:Canaan}, {text:'Nazareth', value:Nazareth},
                                {text:'Salem', value:Salem}, {text:'Samarie', value:Samarie}, {text:'Sarepta', value:Sarepta}]"
                      :rules="[v => !!v || 'Choisir district']"
                      label="District"
                      prepend-icon="mdi-account-multiple"
                      required                       
                      ></v-select>
                      </v-col>
                        <v-col
                        cols="12"
                        sm="6"
                        md="4"
                      >
                    
                      <v-select
                        v-model="don.service"
                        :items="items"
                        label="Service*"
                        prepend-icon="mdi-bank-transfer"                        
                      >
            <template #selection="{ item }">
              <v-row >
                <v-col class="pr-2">
                  {{ item.text }}</v-col>
                <v-col> <v-img :src="item.logo" max-width="50" max-height="50"></v-img>               
                </v-col>            
              </v-row>
            </template>
           
            <template #item="{ item }">
              <v-row >
                <v-col class="pr-2">
                  {{ item.text }}</v-col>
                  <v-col><v-img :src="item.logo" max-width="50" max-height="50"></v-img>                
                </v-col>               
              </v-row>
            </template>
          </v-select>
                      </v-col>
                        <v-col
                        cols="12"
                        sm="6"
                        md="4"
                      >
                      <v-text-field
                            v-model="don.montant"                           
                            label="montant*"
                            type="number"
                            prepend-icon="mdi-cash-multiple"
                            required
                          ></v-text-field>                    
                   
                      </v-col> 
                        <v-col
                        cols="12"
                        sm="6"
                        md="4"
                      >
                      <v-select
                          v-model="don.devise"
                          :items="[{text:'Gourde', value:Gourde}, {text:'Dollar', value:Dollar}]"
                          label="Devise" 
                          prepend-icon="mdi-currency-usd"
                          required                         
                        />                   
                   
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="6"
                      >  
                      <h6>Upload Preuve de transaction</h6>                 
                        <form @submit.prevent="uploadImage">
                          <input
                           ref="fileInput" 
                           type="file" 
                           accept="image/*"   
                            label="Upload Preuve de transaction"/>
                            <v-progress-circular
                              v-show="visible"
                              :size="10"
                              :width="3"
                              color="info"
                              indeterminate
                              class="ma-auto"
                            />
                          <!-- <v-progress-linear
                          v-show="visible"                     
                            v-model="knowledge"
                            height="20"
                          >                          
                            <strong>{{ Math.ceil(knowledge) }}%</strong>
                         </v-progress-linear> -->
                          <v-btn type="submit" color="success" small><v-icon>mdi-upload </v-icon>Upload</v-btn>
                        </form>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="4"
                      >
                      <v-text-field
                            v-model="don.datetrans"                            
                            label="Date Transaction"
                            type="date"
                            prepend-icon="mdi-calendar"
                            required
                          ></v-text-field>                    
                   
                      </v-col>  
                     
                      <v-col v-if="don.type ==='Don Particulier'"
                        cols="12"
                        sm="6"
                        md="4"
                      >
                      <v-text-field
                            v-model="don.depensecible"                  
                            label="Dans quel domaine vous préférez voir votre soutien investi ?"
                            prepend-icon="mdi-heart"
                            required
                          ></v-text-field>                   
                         </v-col>
                         <v-col
                        cols="12"
                        sm="6"
                        md="4"
                      >
                      <v-text-field
                            v-model="don.idtrans"                  
                            label="Numéro de la transaction"
                            prepend-icon="mdi-identifier"
                            required
                          ></v-text-field>                    
                   
                      </v-col>
                     
             
                      
                     
                          <!-- <v-file-input
                           ref="fileInput" 
                           v-model="image" 
                           type="file"
                           accept="image/*"
                          class="mr-4"                       
                          label="Upload Preuve de transaction"                         
                          title="Upload Image"
                          
                          prepend-icon="mdi-attachment"
                          required
                            @change="handleFileUpload"     
                        ></v-file-input>
                        <v-progress-linear
                        v-if="image !==''"
                            v-model="knowledge"
                            height="20"
                          >                          
                            <strong>{{ Math.ceil(knowledge) }}%</strong>
                        </v-progress-linear>
                        <v-btn   
                                v-if="image !==''"     
                                :loading="loading"          
                                color="success"
                                size="medium"          
                                variant="elevated"
                                @click="uploadImage"
                              >
                                Upload
                              </v-btn> 
                                           -->                     
             
                    <div class="col-12">
                         <v-btn type="submit" color="primary" @click="sendDon" >Envoyer</v-btn>   
                                  
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
// import capture from '~/components/capture';

export default {
// components :{capture},
  data: () => ({
    dialogP : false,
    dialog : false,
    visible: false,
    loading :false,
    knowledge:0,
    image:'',
    selectedCountry: null,
    pays:[],
    items: [
        { text: 'BNC', value: 'BNC', logo: '/img/bnc1.jpeg' },
        { text:'Zelle', value: 'Zelle', logo: '/img/zelle.png' },
        { text:'PayPal', value: 'PayPal', logo: '/img/paypal.jpg' },
        { text:'Cash App', value: 'CashApp', logo: '/img/cashapp.png' },
        { text:'MonCash', value: 'MonCash', logo: '/img/moncash.png' },
        { text:'NatCash', value: 'NatCash', logo: '/img/natcash.png' },
        // Ajoute lòt antrepriz si nesesè
      ],
    don: { nom:'', prenom:'', email: '', pays:'', ville: '', service:'', depensecible:'', district:'', 
          datetrans:'',  montant:'', devise:'', telephone:'', type:'', idtrans:'', preuve:'' },
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

        checkImageSize(file) {
    const maxSizeInBytes = 1024 * 1024; // Taille maximale en octets (1 Mo dans cet exemple)

    if (file.size > maxSizeInBytes) {
      alert("L'image est trop grande. Veuillez choisir une image plus petite.");
      // Vous pouvez également réinitialiser l'élément d'entrée de fichier pour permettre à l'utilisateur de choisir à nouveau
      // this.$refs.fileInput.value = '';
    } else {
      alert("L'image est de taille acceptable.");
      // Vous pouvez téléverser l'image ou effectuer d'autres opérations ici
    }
  },

    async uploadImage() {
      this.visible = true   
      const fileInput = this.$refs.fileInput;
      const file = fileInput.files[0];

      if (file) {
        if (file.size > 100 * 1024) {
              this.$notifier.showMessage({ content: 'La taille du Fichier depasse 1 mb'})
                return false
          }
        // if (!checkTypeFile(this.path_src, ['mp4', 'mp3', 'jpg'])) {
        //   this.$notifier.showMessage('set_snackbar', { showing: true, text: ' Le type du fichier est incorrect (mp4, mp3, jpg) ' })
        //   return false
        // }
         const formData = new FormData();
         formData.append('image', file);

      try {
        // if(this.checkImageSize(file.size)){
        //   this.$notifier.showMessage({ content: 'image est trop grande. Veuillez choisir une image plus petite.' , color: 'success'});
        // }
         const data = await this.$axios.post('preuvedon/', formData, {
            headers: {  'Content-Type': 'multipart/form-data' },
                        
          });
          
           this.$notifier.showMessage({ content: 'Fichier upload avec succès!' , color: 'success'});
                this.don.preuve = data.data._id
                
        } catch (error) {
          console.error(error);
          this.$notifier.showMessage({ content: 'Upload echoué!' , color: 'error'});
        }
      } else {
        this.$notifier.showMessage({ content: 'S\'il vous plait selectionnez une image!' , color: 'info'});
      }
      this.visible = false   
    },
          
    async getPays(){ 
        this.visible = true                
            // this.$axios.defaults.headers.common.Authorization = 'Bearer ' + localStorage.getItem('authToken')
                 await this.$axios.get('https://restcountries.com/v3.1/all').then(response => { 
                 this.pays = response                
                          
               this.visible = false              
            })
             
        },

      preuve (){
        this.dialogP = true
      },
      capture (){
        this.dialog = true
      },

      handleFileUpload (e) {     
        // this.file = e.target.valuefile        
     //  console.log(e)
        
      },
        async submitFile () { 
     this.visible = true      
        const formData = new FormData()      
        formData.append('imgfile', this.image)
      
        this.$axios.defaults.headers.common.Authorization = 'Bearer ' + localStorage.getItem('authToken')
        
        await this.$axios.post('preuvedon/preuvedons/', formData, {
          headers: { 'Content-Type': 'multipart/form-data' },
          onUploadProgress: function (progressEvent) {
            this.knowledge = parseInt(Math.round((progressEvent.loaded / progressEvent.total) * 100))
          }.bind(this),
        },
        ).then(res => { 
          
           // this.don.preuve = res.data.path 
           // this.$emit('onDevoirUpload', this.path); 
            
           this.$notifier.showMessage({ content: 'Fichier upload avec succès!' , color: 'success'}); 
           this.dialog = false })
          .catch(err => console.log(err))  
          
        this.visible = false
        this.loading = false
       },
      
        
       
    async sendDon() {
      this.visible = true
      this.loading = true
      if (this.don.montant ==='' || this.don.nom  ===''|| this.don.prenom ==='' || this.don.service ===''  || this.don.pays ===''  || this.don.ville ==='') {
        this.$notifier.showMessage({ content: 'Veuillez saisir les champs obligatoires', color: 'error' })
        return false
      }


     // this.$axios.defaults.headers.common.Authorization = 'Bearer ' + localStorage.authToken
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