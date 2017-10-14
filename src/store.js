import Vuex from 'vuex';
import Vue from "vue";


Vue.use(Vuex);

const userModule = {
  state: {
    username: 'Meow',
    coins: 500,
    avatar: 'https://avatars2.githubusercontent.com/u/22221382?s=460&v=4',
  },

  actions: {
    setUser({commit}, userData) {
      commit('SET_USER_DATA', userData)
    }
  },
  mutations: {
    SET_USER_DATA(state, {username, avatarURL}) {
      state.username = username;
      state.avatar = avatarURL;
    },
  },
  getters: {
    username(state) {
      return state.username
    },
    coins(state) {
      return state.coins
    },
    avatar(state) {
      return state.avatar
    },
  },
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
