<template>
  <v-container>
    <v-card>
      <v-card-title>Calcul du Montant Total par Membre et District</v-card-title>
      <v-card-text>
        <v-row v-for="(district, districtIndex) in districts" :key="districtIndex">
          <v-col>
            <h3>District {{ districtIndex + 1 }}</h3>
            <v-row v-for="(member, memberIndex) in district.members" :key="memberIndex">
              <v-col>
                <v-text-field
                  v-model="district.members[memberIndex].amount"
                  label="Montant"
                  type="number"
                  outlined
                ></v-text-field>
              </v-col>
            </v-row>
            <v-subheader>Total par district: {{ calculateTotalByMember(district.members) }}</v-subheader>
          </v-col>
        </v-row>
        <v-divider></v-divider>
        <v-subheader>Total : {{ calculateTotalByDistrict(districts) }}</v-subheader>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      districts: [
        { members: [{ amount: 10 }, { amount: 20 }, { amount: 30 }] },
        { members: [{ amount: 5 }, { amount: 10 }, { amount: 15 }] },
        // ... Ajoutez d'autres districts selon vos besoins
      ],
    };
  },
  methods: {
    calculateTotalByMember(members) {
      return members.reduce((total, member) => total + parseInt(member.amount), 0);
    },
    calculateTotalByDistrict(districts) {
      return districts.reduce((total, district) => total + this.calculateTotalByMember(district.members), 0);
    },
  },
};
</script>

<style scoped>
/* Styles spécifiques à votre composant */
</style>
