import Vue from 'ecored-base-pkg/src/vue.js'
import App from './App.vue'
import router from './router'
import store from 'ecored-base-pkg/src/store/index.js'

import './styles/_styles.sass'

import config from './config/global'
Vue.prototype.$config = config

const packageJson = require('../package.json')
Vue.prototype.$package = packageJson

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
