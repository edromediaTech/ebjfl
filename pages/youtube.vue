<template>  
    <v-container>
      <v-row>
        <v-col>
          <v-text-field v-model="searchQuery" label="Recherche" @input="searchVideos" />
        </v-col>
      </v-row>
      <youtube-video :videos="filteredVideos" />
    </v-container>
  
</template>

<script>
export default {
  async asyncData({ $axios, env }) {
    // Récupérer les vidéos de votre chaîne YouTube
    // const channelId = 'UCHKMPdWk5nuFPC_Gr0ACXhw'
    const response = await $axios.get(
      `https://youtube.googleapis.com/youtube/v3/playlists?part=snippet%2CcontentDetails&channelId=UCHKMPdWk5nuFPC_Gr0ACXhw&maxResults=25&key=AIzaSyCGxMLEIeiA4fbJ03ZPmHfQ1q84zHpEhA8`
     // `https://www.googleapis.com/youtube/v3/search?key=${env.youtubeApiKey}&channelId=${channelId}&part=snippet,id&order=date&maxResults=10`
    );

    return {
      videos: response.data.items,
    };
  },
  data() {
    return {
      searchQuery: '',
      videos: [], // Toutes les vidéos
    };
  },
  computed: {
    filteredVideos() {
      // Filtrer les vidéos en fonction de la recherche
      return this.videos.filter(video =>
        video.snippet.title.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    },
  },
  methods: {
    searchVideos() {
      // Mettez à jour les vidéos filtrées lors de la recherche
      this.$forceUpdate();
    },
  },
};
</script>