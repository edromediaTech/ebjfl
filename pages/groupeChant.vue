<template>
    <v-container>
      <h1>Groupechants</h1>
  
      <!-- Afficher la liste des éléments -->
      <v-data-table
         v-model="selected"
        :headers="headers"
        :items="groupechants"
        :search="search"
      >
        <template #items="props">
          <td>{{ props.item.nom }}</td>
          <td>{{ props.item.sigle }}</td>
          <td>{{ props.item.telephone }}</td>
          <td>{{ props.item.email }}</td>
          <td>{{ props.item.whatsapp }}</td>
          <td>{{ props.item.fondation }}</td>
          <td>{{ props.item.maestro }}</td>
          <td>{{ props.item.responsable }}</td>
          <td>
            <v-btn @click="editItem(props.item)">Modifier</v-btn>
            <v-btn @click="deleteItem(props.item)">Supprimer</v-btn>
          </td>
        </template>
      </v-data-table>
  
      <!-- Formulaire d'ajout et de modification -->
      <!-- <v-form ref="form" v-model="valid" lazy-validation>
        <v-text-field v-model="formData.nom" label="Nom"></v-text-field>
        <v-text-field v-model="formData.sigle" label="Sigle"></v-text-field>
        <v-text-field v-model="formData.telephone" label="Téléphone"></v-text-field>
        <v-text-field v-model="formData.email" label="Email"></v-text-field>
        <v-text-field v-model="formData.whatsapp" label="WhatsApp"></v-text-field>
        <v-text-field v-model="formData.fondation" label="Fondation"></v-text-field>
        <v-text-field v-model="formData.maestro" label="Maestro"></v-text-field>
        <v-text-field v-model="formData.responsable" label="Responsable"></v-text-field>
        <v-btn @click="saveItem">Enregistrer</v-btn>
      </v-form> -->
    </v-container>
  </template>
  
  <script>
  export default {
    // data() {
    //   return {
        data: () => ({
        selected: [],
        groupechants: [], // Les données seront récupérées depuis l'API
        search: '',
        valid: false,
        formData: {
          nom: '',
          sigle: '',
          telephone: '',
          email: '',
          whatsapp: '',
          fondation: '',
          maestro: '',
          responsable: '',
        },
        headers: [
          { text: 'Nom', value: 'nom' },
          { text: 'Sigle', value: 'sigle' },
          { text: 'Téléphone', value: 'telephone' },
          { text: 'Email', value: 'email' },
          { text: 'WhatsApp', value: 'whatsapp' },
          { text: 'Fondation', value: 'fondation' },
          { text: 'Maestro', value: 'maestro' },
          { text: 'Responsable', value: 'responsable' },
          { text: 'Actions', value: 'actions', sortable: false },
        ],
     // };
    }),

    async mounted() {
      // Récupérer la liste des Groupechants depuis l'API
      await this.fetchGroupechants();
    },
    methods: {
      async fetchGroupechants() {
        try {
          const response = await this.$axios.get('groupechant/all/');
          this.groupechants = response.data;
        } catch (error) {
          console.error('Erreur lors de la récupération des données :', error);
        }
      },
      editItem(item) {
        // Pré-remplir le formulaire avec les données de l'élément à modifier
        this.formData = { ...item };
      },
      async saveItem() {
        try {
          // Envoyer les données à l'API pour l'ajout ou la modification
          await this.$axios.post('https://backend.ebjfl.org/api/groupechant/', this.formData);
          // Actualiser la liste des Groupechants
          await this.fetchGroupechants();
          // Réinitialiser le formulaire
          this.formData = {
            nom: '',
            sigle: '',
            telephone: '',
            email: '',
            whatsapp: '',
            fondation: '',
            maestro: '',
            responsable: '',
          };
        } catch (error) {
          console.error('Erreur lors de l\'ajout ou de la modification :', error);
        }
      },
    //   async deleteItem(item) {
    //     try {
    //       // Envoyer la demande de suppression à l'API
    //       await this.$axios.delete('https://backend.ebjfl.org/api/groupechant/${item._id}/');
    //       // Actualiser la liste des Groupechants

},
    }