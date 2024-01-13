<template>
    <div>
      <v-card v-for="video in videos" :key="video.id">
        <v-responsive>
          <iframe :src="getVideoUrl(video.id)" frameborder="0" allowfullscreen></iframe>
        </v-responsive>
        <v-card-title>{{ video.snippet.title }}</v-card-title>
        <v-card-subtitle>{{ video.snippet.publishedAt }}</v-card-subtitle>
      </v-card>
    </div>
  </template>

  <script>
  export default {
    props: {
      videos:  { type: Array, default: () => []} 
    },
    methods: {
      getVideoUrl(videoId) {
        return `https://www.youtube.com/embed/${videoId}`;
      },
    },
  };
  </script>