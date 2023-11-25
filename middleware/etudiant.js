// import notifier from "~/plugins/notifier"
export  default function etudiant({redirect, res, req,next}){
    const userl = localStorage.getItem('user_level')
    if (!localStorage.getItem('authToken')) {
      alert('Vous devez vous connecter')        
        next({ name: 'login' })
    } else if (parseInt(userl) < 0) {
      alert('Vous devez êtes etudiant')             
             next({ name: 'index' })
                } else {
            // next()
    }
}