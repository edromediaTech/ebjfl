<template>
  <v-container>
    <v-select
      v-model="selectedCountry"
      :items="sortedCountries"
      label="Choisissez un pays"
    ></v-select>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      countries: [],
      selectedCountry: null,
    };
  },
  computed: {
    sortedCountries() {
      return this.countries.slice().sort((a, b) => a.text.localeCompare(b.text));
    },
  },
  mounted() {
    this.fetchCountries();
  },
  methods: {
    async fetchCountries() {
      try {
        const response = await this.$axios.get("https://restcountries.com/v3.1/all");
        const data = response.data;
        this.countries = data.map((country) => ({
          text: country.name.common,
          value: country.name.common,
        }));
      } catch (error) {
        console.error("Erreur lors de la récupération des pays :", error);
      }
    },
  },
};
</script>
