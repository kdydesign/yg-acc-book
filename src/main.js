import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import Quasar from 'quasar'

import 'quasar/dist/quasar.min.css'
import '@quasar/extras/material-icons/material-icons.css'
import '@quasar/extras/fontawesome-v5/fontawesome-v5.css'
import '@quasar/extras/mdi-v3/mdi-v3.css'
import '@quasar/extras/ionicons-v4/ionicons-v4.css'
import '@quasar/extras/eva-icons/eva-icons.css'
import '@quasar/extras/themify/themify.css'
import '@quasar/extras/animate/fadeIn.css'
import '@quasar/extras/animate/fadeOut.css'

import './assets/css/style.styl'

Vue.config.productionTip = false

Vue.use(Quasar, {
  config: {
    framework: 'all'
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
