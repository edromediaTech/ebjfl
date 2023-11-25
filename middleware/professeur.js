// import notifier from "~/plugins/notifier"
export  default function professeur({redirect, res, req,next}){
    const userl = localStorage.getItem('user_level')
    if (!localStorage.getItem('authToken')) {
      alert('Vous devez vous connecter')        
        next({ name: 'login' })
    } else if (parseInt(userl) < 1) {
      alert('Vous devez êtes professeur')             
             next({ name: 'index' })
                } else {
            // next()
    }
}