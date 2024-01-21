<template>
  <v-app style=" background-color: rgb(241, 241, 241);">
    <v-container >
      <v-row>
        <v-col v-for="(video, index) in videos" :key="index" cols="12" sm="6" md="4" lg="3">
          <v-card>
            <v-card-title  style="color: blue; font-size: 14px;">{{ limiterTexte(video.snippet.title, 32) }}</v-card-title>
         
            <v-img :src="getThumbnailUrl(video.snippet.thumbnails.medium.url)" height="200"></v-img>
          
            <v-card-actions>
              <v-btn :href="getVideoUrl(video.id.videoId)" target="blank" color="primary" text>Regarde</v-btn>
              <!-- <v-btn :href="getVideoUrl(video.id.videoId)" target="blank" color="primary" text>Regarde</v-btn> -->
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>
<script>
export default {
data() {
  return {
    apiKey: 'VOTRE_CLE_API',
    channelId: 'NOM_DE_VOTRE_CHAINE',
    videos: []
  };
},
created() {
  this.fetchData();
},
methods: {
  getThumbnailUrl(url) {
    return `${url}`;
    
   // return `https:${url}`;
  },
  getVideoUrl(videoId) {
    return `https://www.youtube.com/watch?v=${videoId}`;
  },
  fetchData() {
    const apiUrl = "https://www.googleapis.com/youtube/v3/search?key=AIzaSyACGhdEH-5a94q_r6dTSnlCgp9loQKb7b0&channelId=UCHKMPdWk5nuFPC_Gr0ACXhw&part=snippet,id&order=date&maxResults=24"

   
    // https://www.googleapis.com/youtube/v3/search?key=AIzaSyACGhdEH-5a94q_r6dTSnlCgp9loQKb7b0&channelId=UCHKMPdWk5nuFPC_Gr0ACXhw&part=snippet,id&order=date&maxResults=10`;

    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        this.videos = data.items;
      })
      .catch(error => console.error('Erreur lors de la récupération des données:', error));
  },
  limiterTexte(texte, limiteCaracteres) {
  if (texte.length > limiteCaracteres) {
    return texte.substring(0, limiteCaracteres) + '...';
  }
  return texte;
},
   
}
};
</script>
