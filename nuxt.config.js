import colors from 'vuetify/es5/util/colors'
// import { getRoutes } from './helpers/sitemap'
export default {
  // mode:'universal',
    
  env: {        
     baseURL: process.env.BASE_URL  || 'https://backend.ebjfl.org/api/' ,
     youtubeApiKey:'AIzaSyACGhdEH-5a94q_r6dTSnlCgp9loQKb7b0'
   // baseURL: process.env.API_URL  || 'http://192.168.43.4:3000/api/' 
    
  },
  // server:{
  //   port:3000
  // },

  
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - Eglise Baptiste Jérusalem de Fort-Liberté',
    title: 'EBJFL',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      {name:'description', content:'Eglise Baptiste Jérusalem de Fort-Liberté, https://ebjfl.org'},
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/./static/css/bootstrap.min.css',
    '~/./static/css/style.css'
  ],

  script: [
    {
     scr: '/./static/js/main.js',
    //  src: '/./static/ckeditor'
    }
  ],
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~plugins/jsonExcel.js',
    '~plugins/moment.js',
    '~plugins/apex.js',
    '~plugins/notifier.js',
    '~plugins/helpers.js',
      { src: '@/plugins/vue-html2pdf', mode: 'client' },    
     
  ],
  
  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
    '@nuxtjs/moment',
    ['@nuxtjs/moment',{}],    
  ],
  
  moment : {
    locales : ['fr'],

  },

  // Modules: https://go.nuxtjs.dev/config-modules
 
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
     '@nuxtjs/sitemap', 
   // '@nuxtjs/proxy'
  ],

  sitemap :{
    // path: '/sitemap.xml', // L'emplacement de votre fichier sitemap.
    hostname: 'https://ebjfl.org', // L'adresse de votre site, que vous pouvez placer comme ici dans une variable d'environnement.
   // cacheTime: 1000 * 60 * 15, // La durée avant que le sitemap soit regénéré. Ici 15mn.
   // gzip: true,
   // generate: false, // Génère une version statique du sitemap quand activé. À utiliser avec nuxt generate.
    // exclude: [ // Les pages qu'on a pas trop envie de voir atterrir sur Google.
     // '/login',
     // '/admin/**'
    // ],
   // routes() {
      // Nous allons utiliser une fonction personnalisée pour charger nos routes dynamiques dans le sitemap.
     // return getRoutes(); 
   // }
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
 
  axios: {
    // univ_id upga : 63fa995f10a11be85bee30d5
     //  baseUrl: 'https://backend.ebjfl.org/api/',
        baseUrl : 'http://192.168.0.104:3000/api/',
    //  baseUrl : 'http://172.20.10.2:3000/api/',
    //  baseUrl : 'http://localhost:3001/api/',
   //   credentials: true,
    //  proxy: true
           
  },
//   proxy: {
//    "/api/":{
//   target: "http://base.suped-ddne.com/",    
//    pathRewrite: {"^/api/": ""}
//    }  
// },
   
   // '/api/': { target: 'https://base.suped-ddne.com/', pathRewrite: {'^/api/': ''}, changeOrigin: true }
  
  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extend(config, { isDev, isClient }) {
      config.module.rules.push({
        test: /\.json$/,
        loader: 'json-loader',
        type: 'javascript/auto',
      });
      // Ajoutez des chargeurs ou configurations webpack ici
    }
  }
}
