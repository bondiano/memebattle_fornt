// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueSocketio from 'vue-socket.io';
import App from './App';
import router from './router';
import store from './store';

Vue.config.productionTip = false;
Vue.use(VueSocketio, 'http://192.168.0.142:8000', store);

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
});
