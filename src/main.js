import 'babel-polyfill'
import 'common/js/hack'

import Vue from 'vue'
import App from './App'
import router from './router'
import 'common/stylus/index.styl'
import fastclick from 'fastclick'
import vueLazyLoad from 'vue-lazyload'
import store from './store'
/* eslint-disable no-unused-vars */
import VConsole from 'vconsole'

const vConsole = new VConsole()
// console.log('text')

fastclick.attach(document.body)

Vue.use(vueLazyLoad, {
  loading: require('common/image/default.png')
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
