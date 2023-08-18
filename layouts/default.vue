<template>
  <v-app dark>
    <!-- <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer> -->
    <!-- Navbar & Carousel Start -->
    <div v-if="!user" class="container-fluid bg-dark px-5 d-none d-lg-block">
        <div  class="row gx-0">
           
            <div class="col-lg-4 text-center text-lg-start mb-2 mb-lg-0">
                <div class="d-inline-flex align-items-center" style="height: 45px;">
                    <a class="btn btn-sm  btn-sm-square rounded-circle me-2" target="blank" href=""><i class="fab fa-facebook-f fw-normal"></i></a>
                    <a class="btn btn-sm  btn-sm-square rounded-circle me-2" target="blank" href=""><i class="fab fa-instagram fw-normal"></i></a>
                    <a class="btn btn-sm  btn-sm-square rounded-circle" href="https://www.youtube.com/results?search_query=ebjfl"><i class="fab fa-youtube fw-normal"></i></a>
                </div>
            </div>
             <div class="col-lg-8 text-center text-lg-end mb-2 mb-lg-0">
                <div class="d-inline-flex align-items-center" style="height: 45px;">
                    <small class="me-3 text-light"><i class="fa fa-map-marker-alt me-2"></i>75, Rue St-Charles, Fort-Liberté, Haiti</small>
                    <small class="me-3 text-light"><i class="fa fa-phone-alt me-2"></i>+509 3783-5081</small>
                    <small class="text-light"><i class="fa fa-envelope-open me-2"></i>info@ebjfl.org</small>
                </div>
            </div>
        </div>
    </div>
    <!-- Topbar End -->

    <nav  class="navbar navbar-expand-lg bg-white navbar-light shadow sticky-top p-0 fixed">
         <!-- <v-app-bar-nav-icon  v-if="user" class="ml-4 mr-0" @click.stop="drawer = !drawer" />
          <v-btn   v-if="user"  icon  @click.stop="miniVariant = !miniVariant"  >
        <v-icon>mdi-{{ `chevron-${miniVariant ? 'right' : 'left'}` }}</v-icon>
      </v-btn> -->
        <a href="/" class="navbar-brand d-flex align-items-center px-4 px-lg-5">
          <h2 class="m-0 text-dark">  <img src="img/logo.jpeg" class="d-inline-block imgLogo mb-4">EBJFL</h2>
        </a>
        <button type="button" class="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
             <span class="navbar-toggler-icon" />
        </button>
        <div id="navbarCollapse" class="collapse navbar-collapse">
          <div class="navbar-nav ms-auto p-4 p-lg-0">
            <a href="/" class="nav-item nav-link active"><b>Accueil</b></a>          
            <a href="/about" class="nav-item nav-link"><b>A Propos</b></a>          
            <!-- <div class="nav-item dropdown">
              <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown"><b>EBJFL</b></a>
              <div class="dropdown-menu fade-down m-0">
                <a href="/about" class="dropdown-item"><b>A Propos</b></a>
                <a href="#" class="dropdown-item"><b>Institution</b></a>
                <a href="#" class="dropdown-item"><b>Staff</b></a>               
              </div>
            </div>           -->
            <a href="/videos" class="nav-item nav-link"><b>Vidéos</b></a>
            <a href="/contact" class="nav-item nav-link"><b>Contact</b></a>
            <!-- <a   href="/register" class="nav-item nav-link"><b>Enregistrer</b></a> -->
            <a   href="/login" class="nav-item nav-link"><b><v-icon color="dark">mdi-login</v-icon></b></a>
            <!-- <a   class="nav-item nav-link"    @click="logout"> {{privileges[user.user_level]}}, <i>{{ get_initial(user.name) }}</i></a>
                 -->

          </div>
          <a href="#" class=" py-4 px-lg-5 d-none d-lg-block" />
        </div> 
      </nav>
    <!-- Navbar & Carousel Start -->
   
    <!-- <v-app-bar
      :clipped-left="clipped"
      fixed
      app
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-btn
        icon
        @click.stop="miniVariant = !miniVariant"
      >
        <v-icon>mdi-{{ `chevron-${miniVariant ? 'right' : 'left'}` }}</v-icon>
      </v-btn>
      <v-btn
        icon
        @click.stop="clipped = !clipped"
      >
        <v-icon>mdi-application</v-icon>
      </v-btn>
      <v-btn
        icon
        @click.stop="fixed = !fixed"
      >
        <v-icon>mdi-minus</v-icon>
      </v-btn>
      <v-toolbar-title v-text="title" />
      <v-spacer />
      <v-btn
        icon
        @click.stop="rightDrawer = !rightDrawer"
      >
        <v-icon>mdi-menu</v-icon>
      </v-btn>
    </v-app-bar> -->
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
   <footerOne />
    <!-- <v-footer
      :absolute="!fixed"
      app
    >
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer> -->
    
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js'
    }
  }
}
</script>
<style scoped>
.ecole{
  font-size: 11px;
}
.imgLogo{
  width: 50px;
 

}
</style>
