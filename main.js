import Vue from 'vue'
import App from './App'

import store from './store'
import http from './utils/index.js'
import storage from './utils/index.js'

Vue.config.productionTip = false

Vue.prototype.$http = http
Vue.prototype.$storage = storage
Vue.prototype.$store = store

App.mpType = 'app'

const app = new Vue({
	store,
	...App
})
app.$mount()
