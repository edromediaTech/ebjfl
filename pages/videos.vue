<template>
<div>

<head>
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
    <v-container>
      <youtube
        :video-id="currentVideoId"
        :api-key="apiKey"
        @ready="onPlayerReady"
        @state-change="onPlayerStateChange"
      ></youtube>
      <v-btn @click="changeVideo">Changer la vidéo</v-btn>
    </v-container>

    <!-- Blog Start -->
    <!-- <div v-for="actualite in show.actualites" :key="actualite._id">   -->
                
         <!-- <iframe src="https://youtube.googleapis.com/youtube/v3/playlists?part=snippet%2CcontentDetails&channelId=UCHKMPdWk5nuFPC_Gr0ACXhw&maxResults=25&key=AIzaSyCGxMLEIeiA4fbJ03ZPmHfQ1q84zHpEhA8" ></iframe> -->
    <!-- </div> -->
    <!-- Blog End -->
   
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
export default {
  
  data() {
    return {
        apiKey: 'https://youtube.googleapis.com/youtube/v3/playlists?part=snippet%2CcontentDetails&channelId=UCHKMPdWk5nuFPC_Gr0ACXhw&maxResults=25&key=AIzaSyCGxMLEIeiA4fbJ03ZPmHfQ1q84zHpEhA8',
      currentVideoId: 'VIDEO_ID',
       commentaire:{ nom:'', email:'', body:''},
      content: '',  
      commentaires:[], 
      actualites:[],   
      visible:false,
      nbComment :[],
       emailRules: [
              (v) => !!v || 'E-mail obligatoire',
              (v) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail doit être valide'
            ],
      show:{titre:'', slug:'', body:'', image:'', created_at:'', editeur:'', comments:[], actualiteId:'', nocomment:false},
    }
  },
  mounted (){
    this.getVideos()
    
  },
  methods: {
    lire(post){
        this.show.titre = post.titre
        this.show.slug = post.slug
        this.show.body = post.body
        this.show.image = post.image
        this.show.created_at = post.created_at
        this.show.editeur = post.editeur
        this.show.comments = post.comments
        this.show.actualiteId = post._id

    },
    async  getVideos () {  
          this.visible = true       
        //  this.$axios.defaults.headers.common.Authorization = 'Bearer ' + localStorage.getItem('authToken')                  
            await this.$axios.get('https://youtube.googleapis.com/youtube/v3/playlists?part=snippet%2CcontentDetails&channelId=UCHKMPdWk5nuFPC_Gr0ACXhw&maxResults=25&key=AIzaSyCGxMLEIeiA4fbJ03ZPmHfQ1q84zHpEhA8/').then( response => { 
                                                      
               
                       
                        this.actualites = response.data;
                        this.lire(this.actualites[0])
                        this.nbComment = this.show.comments.length
                                 
                //  this.$notifier.showMessage({ content: 'Aucune actualité récente', color: 'error' })                                
                 })
            this.visible = false
        },
    async  getComments () {  
          this.visible = true       
          this.$axios.defaults.headers.common.Authorization = 'Bearer ' + localStorage.getItem('authToken')                  
            await this.$axios.get('comment/all/').then( response => {                                         
                if(response.status === 200)
                    if(response.data.length === 0)
                          this.commentaires = []                
                    else {
                    this.commentaires = response.data;
                        this.nbComment = response.data.length
                    }
                else                 
                  this.$notifier.showMessage({ content: 'commentaire introuvable', color: 'error' })                                
                 })
            this.visible = false
        },

    async storeComment () {
      this.visible = true    
      if (this.commentaire.nom ==='' || this.commentaire.email  ===''|| this.commentaire.body ==='') {
        this.$notifier.showMessage({ content: 'Veuillez saisir les champs obligatoires', color: 'error' })
        return false
      }

      this.$axios.defaults.headers.common.Authorization = 'Bearer ' + localStorage.authToken
      this.commentaire.actualite = this.show.actualiteId
      
      await this.$axios.post('comment/', this.commentaire).then((res) => {
        if (res.status === 201) {
          this.commentaires.push(res.data)
          this.$notifier.showMessage({ content: 'Commentaire envoyé avec succès', color: 'success' })
         this.commentaire.nom =''
         this.commentaire.email =''
         this.commentaire.body =''
        } 
        else {
          this.$notifier.showMessage({ content: 'Echec:', color: 'error' })
        }
      })
    
      this.visible = false
    }

    // purify(text) {
    //   return DOMPurify.sanitize(text);
    // },
  },
}
</script>