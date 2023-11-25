<template>
  <v-app dark >
    
    <Snackbar/>
     <autoLogout v-if="user" />
    <!-- <v-navigation-drawer
     v-if="user && user.user_level > 0"
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      class="mt-4 py-4"
      fixed
      app
      
      > -->
            
    <!-- <v-list
      dense
      nav
    >
      <v-list-item>
        <v-list-item-avatar
          class="align-self-center"
          color="white"
          contain
        >
          <v-img
            src='favicon.png'
            max-height="20"
          />
        </v-list-item-avatar>        
        </v-list-item>
    </v-list> -->

    <!-- <v-divider class="mb-4 mt4" /> -->
   
      <!-- <v-list  dense class="mt-4"
      nav>     
         <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          class="mt-4"
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{item.title}} </v-list-item-title>           
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer> -->
     <!-- Topbar Start -->
       <!--====== HEADER PART START ======-->
    
    <header id="header-part">
       
       <div class="header-top d-none d-lg-block">
           <div class="container">
               <div class="row">
                   <div class="col-lg-8">
                       <div class="header-contact text-lg-left text-center">
                           <ul>
                               <li><img src="images/all-icon/map.png" alt="icon"><span>Ave Christ-Roi #17, zone la Rivière Canarie, Ouanaminthe, Nord-Est, Haiti WI</span></li>
                              
                           </ul>
                       </div>
                   </div>
                   <div class="col-lg-4">
                       <!-- <div class="header-opening-time text-lg-right text-center"> -->
                        <div class="header-contact text-lg-right text-center">
                        <ul>
                        <li><img src="images/all-icon/email.png" alt="icon"><span>dorvenicauniversity@gmail.com</span></li>
                      </ul>
                           <!-- <p>Horaire d'Ouverture : Lundi-Samedi - 8 AM à 5 PM</p> -->
                       </div>
                   </div>
               </div> <!-- row -->
           </div> <!-- container -->
       </div> <!-- header top -->
       
       <div class="header-logo-support pt-1 pb-1">
           <div class="container">
               <div class="row">
                   <div class="col-lg-4 col-md-4">
                       <div class="logo">
                           <a href="/">
                               <img src="img/logo .png" width="90"  alt="Logo">
                           </a>
                       </div>
                   </div>
                   <div class="col-lg-8 col-md-8">
                       <div class="support-button float-right d-none d-md-block">
                           <!-- <div class="support float-left">
                            
                               <div class="icon">
                                <i class="fa fa-phone"></i>
                               </div>
                              
                           </div> -->
                           <div class="button float-left">
                               <a href="/inscription" class="main-btn">S'inscrire</a>
                           </div>
                       </div>
                   </div>
               </div> <!-- row -->
           </div> <!-- container -->
       </div> <!-- header logo support -->
       
       <div class="navigation">
           <div class="container">
               <div class="row">
                   <div class="col-lg-10 col-md-10 col-sm-9 col-8">
                      
                       <nav class="navbar navbar-expand-lg fixed">
                           <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                               <span class="icon-bar"></span>
                               <span class="icon-bar"></span>
                               <span class="icon-bar"></span>
                           </button>

                           <div id="navbarSupportedContent" class="collapse navbar-collapse sub-menu-bar">
                               <ul class="navbar-nav mr-auto">
                                   <li class="nav-item">
                                       <a class="active" href="/">Home</a>
                                      
                                   </li>
                                   <li class="nav-item">
                                        <a href="/aboutUs">Dorvenica</a>
                                        <ul class="sub-menu">
                                            <li><a href="/aboutUs">A Propos</a></li>
                                            <li><a href="#">Facultés</a></li>
                                        </ul>
                                    </li>
                                   <li class="nav-item">
                                       <a href="#">Actualités</a>
                                   </li>                                        
                                  
                                 
                                   <li class="nav-item">
                                       <a href="/contact">Contact</a>
                                       
                                   </li>
                               </ul>
                           </div>
                       </nav> <!-- nav -->
                   </div>
                   <div class="col-lg-2 col-md-2 col-sm-3 col-4">
                       <div class="right-icon text-right">
                           <ul>
                              
                               <li class="nav-item"><a  href="#"><i class="fa fa-sign-in" title="Enregistrer"></i></a></li>
                               <li class="nav-item"><a   href="#" ><i class="fa fa-lock" title="Connecter"></i></a>  
                                   <!-- <a  v-else class="nav-item"    @click="logout">
                                 {{privileges[user.user_level]}}, <i>{{ get_initial(user.name) }}</i></a> -->
                                </li> 
                

                           </ul>
                       </div> <!-- right icon -->
                   </div>
               </div> <!-- row -->
           </div> <!-- container -->
       </div>
       
   </header>
   
   
   <!--====== HEADER PART ENDS ======-->
    <!-- <div v-if="!user" class="container-fluid bg-dark px-5 d-none d-lg-block">
        <div  class="row gx-0">
            <div class="col-lg-8 text-center text-lg-start mb-2 mb-lg-0">
                <div class="d-inline-flex align-items-center" style="height: 45px;">
                    <small class="me-3 text-light"><i class="fa fa-map-marker-alt me-2"></i>Balan Habitation Baudin, Cap-Haïtien</small>
                    <small class="me-3 text-light"><i class="fa fa-phone-alt me-2"></i>+509 44 97 58 57</small>
                    <small class="text-light"><i class="fa fa-envelope-open me-2"></i>info@dorvenica.univ.ht</small>
                </div>
            </div>
            <div class="col-lg-4 text-center text-lg-end">
                <div class="d-inline-flex align-items-center" style="height: 45px;">
                    <a class="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href=""><i class="fab fa-twitter fw-normal"></i></a>
                    <a class="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" target="blank" href="https://www.facebook.com/people/Universit%C3%A9-Publique-du-Nord-au-Cap-Ha%C3%AFtien-UPNCH/100063404032463/"><i class="fab fa-facebook-f fw-normal"></i></a>
                    <a class="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href=""><i class="fab fa-linkedin-in fw-normal"></i></a>
                    <a class="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" target="blank" href="https://www.instagram.com/explore/tags/universitepubliquedunordaucaphaitien/"><i class="fab fa-instagram fw-normal"></i></a>
                    <a class="btn btn-sm btn-outline-light btn-sm-square rounded-circle" href=""><i class="fab fa-youtube fw-normal"></i></a>
                </div>
            </div>
        </div>
    </div> -->
    <!-- Topbar End -->


    <!-- Navbar & Carousel Start -->
    <!-- <nav  class="navbar navbar-expand-lg bg-white navbar-light shadow sticky-top p-0 fixed">
         <v-app-bar-nav-icon  v-if="user" class="ml-4 mr-0" @click.stop="drawer = !drawer" />
          <v-btn   v-if="user"  icon  @click.stop="miniVariant = !miniVariant"  >
        <v-icon>mdi-{{ `chevron-${miniVariant ? 'right' : 'left'}` }}</v-icon>
      </v-btn>
        <a href="/" class="navbar-brand d-flex align-items-center px-4 px-lg-5">
          <h2 class="m-0 text-primary">  <img src="img/logo.png" class="d-inline-block imgLogo">DORVENICA</h2>
        </a>
        <button type="button" class="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
          <span class="navbar-toggler-icon" />
        </button>
        <div id="navbarCollapse" class="collapse navbar-collapse">
          <div class="navbar-nav ms-auto p-4 p-lg-0">
            <a href="/" class="nav-item nav-link active"><b>Accueil</b></a>          
            <div class="nav-item dropdown">
              <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown"><b>DORVENICA</b></a>
              <div class="dropdown-menu fade-down m-0">
                <a href="/aboutUs" class="dropdown-item"><b>A Propos</b></a>
                <a href="/facultes" class="dropdown-item"><b>Facultés</b></a>
                <a href="/staff" class="dropdown-item"><b>Staff</b></a>
               
              </div>
            </div>
          
            <a href="/actualites" class="nav-item nav-link"><b>Actualités</b></a>
            <a href="/contact" class="nav-item nav-link"><b>Contact</b></a>
            <a  v-if="!user" href="/register" class="nav-item nav-link"><b>Enregistrer</b></a>
            <a  v-if="!user" href="/login" class="nav-item nav-link"><b>Connexion</b></a>
            <a  v-else class="nav-item nav-link"    @click="logout"> {{privileges[user.user_level]}}, <i>{{ get_initial(user.name) }}</i></a>
                

          </div>
          <a href="#" class=" py-4 px-lg-5 d-none d-lg-block" />
        </div> 
      </nav> -->
    <!-- Navbar & Carousel Start -->
   
    
    
    <!-- Navbar End -->

    <!-- <v-app-bar
      v-if="user"
      :clipped-left="clipped"
      fixed
      app
      color="blue darken-4"
    >
     <v-app-bar-nav-icon  v-if="user" style="color:white" @click.stop="drawer = !drawer" />
      <v-btn
       v-if="user"
       style="color:white"
        icon
        @click.stop="miniVariant = !miniVariant"
      >
        <v-icon>mdi-{{ `chevron-${miniVariant ? 'right' : 'left'}` }}</v-icon>
      </v-btn>
      
         <img src="img/logo.png"  class="d-inline-block imgLogo mx-1">
         <v-toolbar-title > <a href="/" style="color:white">{{title}} </a> </v-toolbar-title>
     
      <v-spacer />
     
     <v-btn
      v-if="!user"
      style="color:white"
      class="ml-0"
      min-width="0"
      text
      title="Enregistrer"
      to="/register"
    >
      <v-icon>mdi-account</v-icon>
    </v-btn>
    <v-btn
      v-if="!user"
      style="color:white"
      class="ml-0"
      min-width="0"
      text
      title="Connecter"
      to="/login"
    >
      <v-icon>mdi-login</v-icon>
    </v-btn>
    <v-btn
      v-else
      class="ml-0"
      min-width="0"
      title="Déconnecter"
      text
      color="white"
      @click="logout"
    >
      {{privileges[user.user_level]}}, {{ get_initial(user.name) }}
    </v-btn>
    </v-app-bar>  -->
    
    <v-main  class="gray-bg">     
      <v-container fluid >        
        <Nuxt/>
      </v-container>
    </v-main>
    <footerOne />
      <!-- <v-footer
       v-if="user"
      :absolute="!fixed"
      app
    >
      <span  class="ecole">&copy; {{ new Date().getFullYear() }} Design by EDROMEDIA</span>
    </v-footer>-->
  </v-app> 
</template>
<script>
// import axios from 'axios'
//  import {mapActions, mapGetters } from 'vuex'
//  import autoLogout from '../components/base/autoLogout.vue'
//  import Snackbar from '../components/Snackbar.vue'
//  import {role} from '../middleware/role'
// export default {  
//    name: 'Default',
//    components : {autoLogout, Snackbar},
//     data () {
//     return {
//       clipped: false,
//       drawer: false,
//       fixed: false,     
//       miniVariant: false,
//       right: true,
//       rightDrawer: true,
//       showAnnee:'',
//       title: 'UPNCH',
//        ecole_name: '',
//        zone_name: '',
//       privileges:['User', 'Etudiant',  'Prof',
//                          'Bibliothecaire', 'Secretaire Fac','Vice doyen','Doyen', 'Secretaire',
//                          'Vice Recteur', 'Recteur', 'Adm',  'supadm'],
//     }
//   },
//   computed: {
    
//   ...mapGetters('auth', ['anac']),
//   ...mapGetters('auth', ['user']),
//   ...mapGetters('dataUtil', ['anac','ecolename', 'zonename', 'districtname']),
  
    
//   items () {
//   const  items = [
//         {
//           icon: 'mdi-home',
//           title: 'Accueil',
//           to: '/'
//         },      
                    
//       ];


      
//        if (this.user && parseInt(this.user.user_level) === role.Etudiant){          
           
//            items.push({  icon: 'mdi-apps',
//             title: 'Dashboard',
//             to: '/dashEtudiant' })

//               items.push({  icon: 'mdi-file',
//               title: 'Devoirs',
//               to: '/devoirsEtu' })

//               items.push({  icon: 'mdi-clipboard',
//               title: 'Ressources',
//               to: '/ressourcesEtu' })
          
//       }
//        if (this.user && parseInt(this.user.user_level) === role.professeur){          
           
//            items.push({  icon: 'mdi-apps',
//             title: 'Dashboard',
//             to: '/dashEtudiant' })

//               items.push({  icon: 'mdi-file',
//               title: 'Devoirs',
//               to: '/devoirsProf' })

//               items.push({  icon: 'mdi-clipboard',
//               title: 'Ressources',
//               to: '/resprof'})          
//       }


//         if (parseInt(this.user.user_level) === role.adm && this.user){
               
//             items.push({  icon: 'mdi-apps',
//             title: 'Dashboard',
//             to: '/statEtudiants' })

//                items.push({  icon: 'mdi-account',
//                title: 'Gestion Utilisateur',
//                to: '/gestionUser'})

                
//              items.push({  icon: 'mdi-bank',
//               title: 'Gestion Facultés',
//                to:'/saisieFac'
//              })  

//              items.push({  icon: 'mdi-account-school',
//               title: 'Gestion Cours',
//                to:'/addCours'
//              })  
             
//              items.push({  icon: 'mdi-file',
//               title: 'Liste Inscrits',
//                to:'/listeInscrits'
//              })   

//              items.push({  icon: 'mdi-comment',
//               title: 'Actualités',
//                to:'/edit-post'
//              })   
//              items.push({  icon: 'mdi-comment',
//               title: 'Gestion Actualités',
//                to:'/gestionActu'
//              })   

//              items.push({  icon: 'mdi-message',
//               title: 'Messages',
//                to:'/message'
//              }) 
             
//               items.push({  icon: 'mdi-at',
//               title: 'Mail',
//                to:'/mail'
//              })  
//         }
     
//        return items
//    },

   
 
//   }, 
//   mounted () {
//      if(window){
//         axios.defaults.headers.common.Authorization = 'Bearer ' + localStorage.getItem('authToken')
//      }
    
//      if (localStorage.authToken) {     
//          const data = {userId:localStorage.userId, token:localStorage.token, user_level:localStorage.user_level, name:localStorage.name, 
//          anac:localStorage.anac, checkInsc:localStorage.checkInsc}
//           this.setUser(data) 
          
//         }

// this.detectWakeup(this.logout)
      // const myWorker = new Worker("DetectWakeup.js");
      //   myWorker.onmessage = function (ev) {
      //     if (ev && ev.data === 'wakeup') {
      //       // wakeup here
      //       this.logout()
      //     }
      //   }
       
       
     // },
  
  // methods:{
  //    ...mapActions('auth', [ 'sendLogoutRequest', 'getUserData', 'setUser']),
    // ...mapActions('dataUtil', [ 'getAnacData','getDistrictnameData', 'getZonenameData', 'getAnacDataP']),
  
    
//  detectWakeup(callback){
//         const myWorker = new Worker("/DetectWakeup.js");
    
//      myWorker.onmessage = function (ev) {
//      if (ev && ev.data === 'wakeup') {
     // wakeup here        
      // this.logout()   
  //     callback()       
  //    }
  //   }
  // },

  //     get_initial (name) {
  //         const nom = name.split(' ')
  //         let initial = ''
  //       if (nom.length > 1 )
  //           initial = nom[0].substring(0,1) + nom[1].substring(0,1)
  //       else
  //           initial = nom[0].substring(0,2)
 
  //       return initial   

  //     },

    
    
    //  logout () {
    //     this.sendLogoutRequest()
    //     this.$router.push('/')
    //   },

    //   set_anac(){
    //      this.senLoginRequest()
    //   },
      // set_anacP(){
          //   this.getAnacDataP(localStorage.anac)
          // this.title = 'DDNE '+ this.anac
      // }
      
 // }
  // }
</script>
<style scoped>
.ecole{
  font-size: 11px;
}
.imgLogo{
  width: 50px;

}
</style>

