import axios from 'axios'
axios.defaults.headers.common.Authorization = 'Bearer ' + localStorage.getItem('authToken')
export default {
  namespaced: true,

  state: {
    userData: null,
  },

  getters: {
    user: state => state.userData,
  },

  mutations: {
    setUserData (state, user) {
      state.userData = user
    },
  },

  actions: {
  async getUserData ({ commit }) {
     await axios
        .get( 'user')
        .then(response => {
          commit('setUserData', response.data)
        })
        .catch(() => {
          localStorage.removeItem('authToken')
        })
    },

   setUser ({ commit }, data) {   
          commit('setUserData', data)     
    },

    async sendLoginRequest ({ commit }, data) {
       return await this.$axios.post('auth/login', data)
        .then(response => {          
          commit('setUserData', response.data)
          localStorage.setItem('authToken', response.data.token)          
          localStorage.setItem('user_level', response.data.user_level)
          localStorage.setItem('userId', response.data.userId)
          localStorage.setItem('name', response.data.name)
          localStorage.setItem('anac', response.data.anac)
          localStorage.setItem('checkInsc', response.data.checkInsc)
          localStorage.setItem('email', response.data.email)
          
                  
          // if(response.data.responsable !== 0 || response.data.responsable !== -1){
          //    localStorage.removeItem('responsable')
          //    localStorage.setItem('responsable', response.data.responsable)
          // }

          // if(response.data.user.user_level === 5){
          //   localStorage.removeItem('id')
          //    localStorage.setItem('ip', response.data.ip)
          
          //    localStorage.setItem('type', response.data.type)
          // }
         
          // console.log( localStorage.getItem('responsable'))
         })
       },
         
    async sendRegisterRequest ({ commit }, data) {
     // commit('setErrors', {}, { root: true })
      // axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*'
      return await this.$axios
        .post( 'auth/signup/', data)
        .then(response => {
          commit('setUserData', response.data.user)
          localStorage.setItem('authToken', response.data.token)
        })
    },
    
   async sendLogoutRequest ({ commit }) {
    // this.$axios.defaults.headers.common.Authorization = 'Bearer ' + localStorage.getItem('authToken')
      await this.$axios.delete( 'auth/logout/').then((res) => {
        console.log(res.message)
        commit('setUserData', null)
        localStorage.removeItem('authToken')
        localStorage.removeItem('user_level')        
      //  localStorage.removeItem('anac')
        
        
      })
    },
    
    sendVerifyResendRequest () {
      return this.$axios.get( 'email/resend')
    },
    sendVerifyRequest ({ dispatch }, hash) {
      return this.$axios
        .get( 'email/verify/' + hash)
        .then(() => {
          dispatch('getUserData')
        })
    },
  },
}
