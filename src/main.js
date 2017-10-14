// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueSocketio from 'vue-socket.io';
//import socketio from 'socket.io';

import BootstrapVue from 'bootstrap-vue'
import App from './App';
import router from './router';
import store from './store';
import '../css/font-awesome.min.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue);
const fs = require('fs');
Vue.config.productionTip = false;
//Vue.use(VueSocketio, socketio('http://192.168.0.142:8000'), store);

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
});
