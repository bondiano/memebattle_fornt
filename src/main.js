// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
//import VueSocketio from 'vue-socket.io';
//import socketio from 'socket.io';

import BootstrapVue from 'bootstrap-vue';
import App from './App';
import router from './router';
import store from './store';
import '../css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.use(BootstrapVue);
Vue.config.productionTip = false;

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
});
