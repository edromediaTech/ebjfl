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
<section id="contact">
<body style=" background-color: rgb(241, 241, 241);">
   
    <!-- Contact Start -->
      <div class="container-xxl py-5">
        <div class="container">
          <!-- <div class="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h6 class="section-title bg-white text-center text-primary px-3">
              Contactez-nous
            </h6>
            <br><br>
            </div> -->
          <div class="row g-4">
            <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
              <h5>Veuillez nous laisser un message.</h5><br><br>
              <!-- <p class="mb-4">
                The contact form is currently inactive. Get a functional and working contact form with Ajax & PHP in a few minutes. Just copy and paste the files, add a little code and you're done. <a href="https://htmlcodex.com/contact-form">Download Now</a>.
              </p> -->
              <div class="d-flex align-items-center mb-3">
                <div class="d-flex align-items-center justify-content-center flex-shrink-0 bg-dark" style="width: 50px; height: 50px;">
                  <i class="fa fa-map-marker-alt text-white" />
                </div>
                <div class="ms-3">
                  <h5 class="text-dark">
                    Adresse
                  </h5>
                  <p class="mb-0">
                    Rue St-Charles, Fort-Liberté, Haiti
                  </p>
                </div>
              </div>
              <div class="d-flex align-items-center mb-3">
                <div class="d-flex align-items-center justify-content-center flex-shrink-0 bg-dark" style="width: 50px; height: 50px;">
                  <i class="fa fa-phone-alt text-white" />
                </div>
                <div class="ms-3">
                  <h5 class="text-dark">
                    Phone
                  </h5>
                  <p class="mb-0">
                    + 509 3229-5487
                  </p>
                </div>
              </div>
              <div class="d-flex align-items-center">
                <div class="d-flex align-items-center justify-content-center flex-shrink-0 bg-dark" style="width: 50px; height: 50px;">
                  <i class="fa fa-envelope-open text-white" />
                </div>
                <div class="ms-3">
                  <h5 class="text-dark">
                    Email
                  </h5>
                  <p class="mb-0">
                    info@ebjfl.org
                  </p>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
              <iframe
                class="position-relative rounded w-100 h-100"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15028.460229462591!2d-71.8375194!3d19.6650961!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8eb1314bdc7bc971%3A0x42c59f9891b1f46d!2sJerusalem%20Baptist%20Church!5e0!3m2!1sfr!2sht!4v1691781127728!5m2!1sfr!2sht"
                frameborder="0"
                style="min-height: 300px; border:0;"
                allowfullscreen=""
                aria-hidden="false"
                tabindex="0"
              />
             
            </div>
            <div class="col-lg-4 col-md-12 wow fadeInUp" data-wow-delay="0.5s">
              <form>
                <div class="row g-3">
                  <div class="col-md-12">
                    <div class="form-floating">
                      <v-text-field
                            v-model="contact.nom"                            
                            prepend-icon="mdi-account"
                            label="Nom"
                            required
                          ></v-text-field>                
                    
                    </div>
                  </div>
                  <div class="col-md-12">
                    <div class="form-floating">
                      <v-text-field
                          v-model="contact.email"
                           prepend-icon="mdi-account"
                          label="Entrer votre e-mail"
                          :rules="emailRules"
                          required
                        ></v-text-field>
                    </div>
                  </div>

                  <div class="col-12">
                    <div class="form-floating">
                      <v-textarea id="message" v-model="contact.message" class="form-control"  label="Message" style="height: 150px" />
                      <!-- <label for="message">Message</label> -->
                    </div>
                  </div>
                  <div class="col-12">
                    <v-btn class="btn-primary" @click="storeContact">Envoyer</v-btn>
                   
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <!-- Contact End -->

    <!-- Vendor Start -->
    <!-- <div class="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div class="container py-5 mb-5">
            <div class="bg-white">
                <div class="owl-carousel vendor-carousel">
                    <img src="img/vendor-1.jpg" alt="">
                    <img src="img/vendor-2.jpg" alt="">
                    <img src="img/vendor-3.jpg" alt="">
                    <img src="img/vendor-4.jpg" alt="">
                    <img src="img/vendor-5.jpg" alt="">
                    <img src="img/vendor-6.jpg" alt="">
                    <img src="img/vendor-7.jpg" alt="">
                    <img src="img/vendor-8.jpg" alt="">
                    <img src="img/vendor-9.jpg" alt="">
                </div>
            </div>
        </div>
    </div> -->
    <!-- Vendor End -->
    

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

</section>
  </div>
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
