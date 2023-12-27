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
    <center ><h5 class="ecole">{{texte}}</h5></center>
   
   <v-simple-table >
                <thead>
                  <tr>
                    <th>Code</th>
                    <th>Nom</th>
                    <th>Prenom</th>                   
                    <th>Date Naissance</th>                    
                    <th>Sexe</th>
                    <th>Tél</th>
                    <th>Prénom de la mère</th>
                    <th>Baptisé</th>                    
                </tr>
               </thead>
                <tbody>                                   
                  <tr v-for="lf in membres" :key="lf.id"  style="page-break-inside: avoid">
                    <td>{{lf.code}}</td>
                    <td>{{lf.nom}}</td>
                    <td>{{lf.prenom}}</td>                   
                     <td>{{ lf.date_naissance | moment(" Do-MM-YYYY") }}</td>                                   
                    <td v-if="lf.sexe">M</td>
                    <td v-else>F</td>
                    <td>{{lf.numero}}</td>
                    <td>{{lf.prenom_mere}}</td>                   
                     <td v-if="lf.baptise">Oui</td>
                    <td v-else></td>                   
                  </tr>                                                                                       
                </tbody>
              </v-simple-table>
          </div>
      </div>  
</template>
<script>
export default {
    props : {membres: { type: Array, default: () => []} , 
             zone: { type: Array, default: () => []},
             texte:{ type:String, default: ''}},
      data (){
          return{
          n:0,
        }
      },
      methods : {
          check_n (){
              if(this.n % 14 === 0){                  
                  return true
              }
              else 
              {
                  this.n++
                  return false
              }
          }
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