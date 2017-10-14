import Vuex from 'vuex';
import Vue from "vue";


Vue.use(Vuex);

const userModule = {
  state: {
    username: '',
    coins: 0,
    avatar: '',
  },

  actions: {
    setUsername({commit}, username) {
      commit('SET_USERNAME', username)
    }
  },
  mutations: {
    SET_USERNAME(state, username) {
      state.username = username;
    },
    SET_AVATAR(state, avatarUrl) {
      state.avatar = avatarUrl;
    }
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
