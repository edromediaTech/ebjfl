
export  default function econome({redirect, res, req,next}){
    const userl = localStorage.getItem('user_level')
    if (!localStorage.getItem('authToken')) {
        alert('Vous devez vous connecter')        
        next({ name: 'login' })
    } else if (parseInt(userl) < 12) {
        alert('Vous devez êtes doyen')            
             next({ name: 'home' })
                } else {
            // next()
    }
}