import Vuex from 'vuex';
import Vue from "vue";


Vue.use(Vuex);

const userModule = {
  state: {
    username: '',
    coins: 0,
    avatar: '',
  },

  actions: {},
  mutations: {},
  getters: {},
  modules: {}
};

const gameModule = {
  state: {},
  actions: {},
  mutations: {},
  getters: {},
  modules: {}
};

const appModule = {
  state: {
    lastWinner: {}
  },
  actions: {},
  mutations: {},
  getters: {},
  modules: {}
};

const store = new Vuex.Store({
  state: {},
  actions: {},
  mutations: {},
  getters: {},
  modules: {
    app: appModule,
    game: gameModule,
    user: userModule
  }
});

export default store;
