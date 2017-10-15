import Vuex from 'vuex';
import Vue from "vue";

import socketActions from './socketActions';

Vue.use(Vuex);

const ws = new WebSocket("ws://192.168.0.142:8000/ws");


const userModule = {
  state: {
    username: window.localStorage.getItem('username') || 'Meow',
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
      // state.avatar = avatarURL;
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
  state: {
    currentLeft: {
      id: 1,
      likeCount: undefined,
      url: 'https://pp.userapi.com/c840629/v840629396/148cf/nJpQWyUnmf4.jpg',
      text: 'some text',
    },
    currentRight: {
      id: 2,
      likeCount: undefined,
      url: 'https://sun9-18.userapi.com/c540100/v540100047/37563/dcL97mV6KoM.jpg',
      text: '',
    },
    raund: undefined, /* 1=1/16, 2=1/8, 3=1/4, 4=1/2, 5=final */
    timer: true, /* 1 - mozhem, 0 - ne mozhem */
    stage: 1,
    winners_id: [],
    memes_img: [],
  },
  actions: {
    socket_chooseMem: (context, id) => {
      ws.send(socketActions.chooseMem(id));
    }
  },
  mutations: {
    MEMES_LIKES(state, {data}) {
      if (state.currentLeft.id = data[0].memes)
        state.currentLeft.likeCount = data[0].likes;
      if (state.currentRight.id = data[1].memes)
        state.currentRight.likeCount = data[1].likes;
    },
    START_TIMER(state, {left, right}) {

    },
    END_TIMER(state) {

    },
  },
  getters: {
    currentLeft(state) {
      return state.currentLeft;
    },
    currentRight(state) {
      return state.currentRight;
    },
    timer(state) {
      return state.timer;
    },
    raund(state) {
      return state.raund;
    },
    winners_id(state) {
      return state.winners_id;
    },
    winners_img(state) {
      return state.winners_img;
    },
    stage(state){
      return state.winners_img;
    },
  },
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


ws.onmessage = async function ({data: msg}) {
  const action = JSON.parse(msg);
  const {type, ...data} = action;

  await store.commit(type, data);
};

export default store;
