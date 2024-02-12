<template>
    <div class="body" >
<div class="card-body " >
  <div class="header" >
      <!-- <div>
        <center><img src='img/LOGO_EBJFL.png' width="80" class="imag"></center>
    </div> -->
      <div  class="entete"> <h4><img src='img/LOGO_EBJFL.png' width="60" class="imag d-inline-block"> EGLISE BAPTISTE JERUSALEM DE FORT-LIBERTE</h4>
        
      </div>     
      
    </div>
    <center> <h5 class="ecole">Liste des contributions en ligne -  Moisson 2024</h5> </center>
     <h5 style="text-align:right; padding-right:20%"  >Date : {{new Date() | moment(" Do/MM/YYYY")}}</h5>
    <!-- <center ><h5 class="ecole">{{texte}}</h5></center>
    -->
   <v-simple-table >
                <thead>
                  <tr>                   
                    <th>Nom</th>
                    <th>Prenom</th>                   
                    <th>District</th>                    
                    <th>Montant</th>
                    <th>Devise</th>
                    <th>Service</th>
                    <th>Pays</th>                    
                    <th>Date</th>                    
                </tr>
               </thead>
                <tbody>                                   
                  <tr v-for="lf in offrandes" :key="lf.id"  style="page-break-inside: avoid">
                   
                    <td>{{lf.nom}}</td>
                    <td>{{lf.prenom}}</td>                                               

                    <td>{{lf.district}}</td>
                    <td>{{lf.montant}}</td>                   
                    <td>{{lf.devise}}</td>                   
                    <td>{{lf.service}}</td>                  
                    <td>{{lf.pays}}</td>                  
                     <!-- <td>{{ (lf.datetrans)}}</td>                   -->
                     <td>{{ lf.datetrans | moment(" Do-MM-YYYY") }}</td>                  
                  </tr>                                                                                       
                </tbody>
                <tr></tr>
                <br>
                <tr v-for="lf in result" :key="lf.district"  style="page-break-inside: avoid">                
                <td>{{ lf.district }}</td>
                <!-- <td>Total</td> -->
                <td>{{ lf.totalAmount }}</td>
              </tr>
              </v-simple-table>
          </div>
      </div>  
</template>
<script>
export default {
    props : {offrandes: { type: Array, default: () => []}, 
             result: { type: Array, default: () => []}
             },
      data (){
          return{
          n:0,
 
        }
      },
      methods : {

         convertirDateEnFrancais(date) {
    // Tableau des noms des mois en français
    const moisEnFrancais = [
        "janvier", "février", "mars", "avril", "mai", "juin",
        "juillet", "août", "septembre", "octobre", "novembre", "décembre"
    ];
    
    // Obtenir le jour, le mois et l'année de la date
    const jour = date.getDate()
    const mois = moisEnFrancais[date.getMonth()];
    const annee = date.getFullYear();

    // Construire la chaîne de date en français
    const dateEnFrancais = jour + " " + mois + " " + annee;
    return dateEnFrancais;
}

// Exemple d'utilisation
// const date = new Date();
// const dateFrancaise = convertirDateEnFrancais(date);
// console.log(dateFrancaise); // Affichera la date actuelle en français
// Exemple d'utilisation


// const result = statistic(data);
// console.log(result);
         
          
      } 
}
</script>
<style scoped>
table{
  border-collapse: collapse; 
  width: 100%;
  margin-top: 20px;
 
  }
  th,td{
     border:1px solid #ddd;
     padding: 8px;
   }
   .entete{
       text-align: center;  
       border-bottom: 1px solid gray;
        margin-top: 5px;
   }
   .imag{
       margin-bottom: 0%;
   }
   .body{
       margin: 30px;
   }
   .ecole{
       margin-top: 20px ;
   }
  
  
</style>