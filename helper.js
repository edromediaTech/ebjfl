exports.checkChampVide = (tab) =>{
    let vide = false
    tab.forEach(function(e){
        if(e === '')
         vide = true
    })
    return vide
}


function getPrefix(zones, idZone, sexe){
  // Recherche de la zone par ID
  const zone = zones.find(zone => zone._id === idZone);

  // Vérification si la zone a été trouvée
  if (zone) {
    // Concaténation du code de zone et du sexe 40263569
    const prefix = zone.code+''+sexe;
    return prefix;
  } else {
    // Gestion du cas où la zone n'est pas trouvée
    console.error('Zone with ID '+ idZone+'not found.');
    return null; // Ou une valeur par défaut de votre choix
  }
}

function getCompteur(tableau, codePref){  
 let n =0
  for(const element in tableau)                     
       if(parseInt(element[0].code.substring(3)) === parseInt(codePref))
           n = n+1           
    return n
}

exports.createCode = (membres, zones, idZone, sexe)=>{
  const pref = getPrefix(zones, idZone, sexe)
  const compteur = getCompteur(membres, pref)
    return (pref + "-" + compteur) 
}


exports.getTwolastNumberOfYear = () => {
  const date = new  Date()
   return parseInt(date.getFullYear().toString().substring(2))
}
   // gestion date importer d'un fichier excel pour la saisie
exports.gestionDate = (date) =>{
  if(typeof date === "string"){
    
    const breakpoint = /-|\/–/
  const splitted = date.toString().split(breakpoint)
  const annee = splitted[2].trim()
  if(annee.length === 2 )
      if(parseInt(annee) > this.getTwolastNumberOfYear())
        splitted[2] = "19"+annee
      else
        splitted[2] = "20"+annee

  date =Date.parse(splitted[2]+'-'+splitted[1].trim()+'-'+splitted[0].trim())
  }

  return date
}


exports.filtreTab = (tab, stab, critere, critvalue)=> {
    const data = []
      let trouve = null
       tab.forEach(function(el){
          el[stab].forEach(function(e){ 
                 trouve = false                 
                  if(e[critere] === critvalue && e.annee === localStorage.anac)
                    trouve = true                         
        })
        if(trouve)
        data.push(el)
    })
    return data

  }

exports.NbEleveClasse = (classes, eleves) =>{
  
     const tabstat = []
     classes.forEach(cl =>{    
        let n=0
         eleves.forEach(el => {
           el.classe.forEach(clas =>{
              if(clas.annee === localStorage.anac && cl._id === clas.classe_id) n++ 
                   })
         })
         tabstat.push({nom:cl.nom, id:cl._id, eff:n})
       })
      
       return tabstat
   }

  exports.getEleveRenvoiBySalle = (eleves, classes, salle, tabfraisClasse, noRenvoi, prog)=>{
    const data = []
    let minMontant = 0
    if(noRenvoi === 0)
         minMontant = tabfraisClasse[noRenvoi]
    else
        for(let i =0; i<=noRenvoi; i++)
          minMontant = minMontant+tabfraisClasse[i]
    eleves.forEach(el =>{
      // ---------------------------
      let subv = '-' 
      if(el.subventions.length > 0)
          el.subventions.forEach(sub => {
           if(sub.annee === localStorage.anac){  
                               
                prog.forEach(pr =>{
                    if(pr._id === sub.programme_id)
                       subv = pr.sigle
                })
           }
        })
      // -----------------------------
      el.classe.forEach(cl =>{
        if(cl.salle_id === salle && cl.annee === localStorage.anac)
          {
            let sommePaie = 0
            el.paiements.forEach(pa => {
              sommePaie+= pa.montant
            })
              if(minMontant > sommePaie){
                el.minDette = minMontant - sommePaie
                el.subvention = subv
                data.push(el)
              }
           
          }
      })
    })
    return data
  }

 exports.fMoney = (value) =>{
    let symb = ' Gdes'
    if(value < 2)
      symb = ' Gde'
        return value.toLocaleString(undefined, {minimumFractionDigits:2}) +symb
}


exports.checkHaveChildren = (ob) => {
    const val = Object.values(ob)     
    for(const t of val){
       if(Array.isArray(t) === true && t.length > 0 && (typeof t[0].classe_id === 'undefined'))                   
          return true     
    }  
    return false
  }


 
exports.checkEleveClasse = (classes, classeId) => {
  for(const cl of classes){
    if(cl.annee === localStorage.anac && cl.classe_id === classeId)
      return cl
  }
  return false
}

exports.checkSubvention = (subventions) => {
  for(const sub of subventions){
    if(sub.annee === localStorage.anac)
      return sub
  }
  return false
}

exports.checkIfInProgramme = (subventions, progId) => {
  for(const sub of subventions){
    if(sub.annee === localStorage.anac && sub.programme_id === progId)
      return sub
  }
  return false
}

exports.getSubSigle = (progs, progId) => {
  let sigle = false
  for(const p of progs){
    if(p._id === progId)
      sigle = p.sigle
  }
  return sigle
}

function checkCodeExist(tab, code){
  let found = false
   for (const t of tab)
     if(t.code === code)
       found = true
 return found
 }
 
 exports.createCode1 = (tab) => {
  
   let rep = 0 
   let code = 0 
   while (rep === 0) {
     code = Math.floor(Math.random() * (999999 - 111111)) + 111111;
     if(checkCodeExist(tab,code)===false)
      rep = code    
   }  
  return rep
 }