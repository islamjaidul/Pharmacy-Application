// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from './store'
import router from './router'
import jquery from 'jquery'

// window library start
window.jQuery = window.$ = jquery;
require('bootstrap');
import axios from 'axios'
window.axios = axios;
import bootstrap_css from 'bootstrap/dist/css/bootstrap.min.css'
//window library end

import config from './config'
window.config = config;

window.router = router;
require('./karnel');

Vue.config.productionTip = false;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
});
