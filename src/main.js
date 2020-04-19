import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import router from './router/router'

import './assets/css/base.css'
import './assets/css/index.css'

Vue.prototype.$http = axios

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
