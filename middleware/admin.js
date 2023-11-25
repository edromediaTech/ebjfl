// import role from '../middleware/role.js'
export  default function admin({redirect, res, req,next}){
   
    const userl = localStorage.getItem('user_level')
    if (!localStorage.getItem('authToken')) {
        alert('Vous devez vous connecter')        
        next({ name: 'login' })
    } else if (parseInt(userl) < 8) {
        alert('Vous devez êtes admin')
            
             next({ name: 'home' })
                } else {
            // next()
    }
}