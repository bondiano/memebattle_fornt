import Vuex from 'vuex';
import Vue from "vue";
import {loginFetch, registerFetch} from './request';

import socketActions from './socketActions';

Vue.use(Vuex);

const ws = new WebSocket("ws://192.168.0.142:8000/ws");


const userModule = {
  state: {
    username: 'Meow',
    coins: 0,
    isLogin: false,
    avatar: 'https://avatars2.githubusercontent.com/u/22221382?s=460&v=4',
  },

  actions: {
    // setUser({commit}, userData) {
    //   commit('SET_USER_DATA', userData)
    // },
    async login({commit}, userData) {
      try {
        const {data} = await loginFetch(userData);
        commit('SUC_LOGIN', data)
      } catch (err) {
        commit('ERR_LOGIN')
      }
    },
    async register({commit, dispatch}, userData) {
      try {
        const {data} = await registerFetch(userData);
        dispatch('login', userData)
      } catch (err) {
        commit('ERR_REGISTER', data)
      }

    }
  },
  mutations: {
    SUC_LOGIN(state, {username, coins}) {
      state.isLogin = true;
      state.username = username;
      state.coins = coins;
    },
    ERR_LOGIN(state) {
      window.localStorage.removeItem('username');
      window.localStorage.removeItem('password');
      state.isLogin = false;
    },
  },
  getters: {
    username(state) {
      return state.username
    },
    isLogin(state) {
      return state.isLogin
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
      url: 'https://pp.userapi.com/c840733/v840733952/13e8b/C_aOIq5vv9U.jpg',
      text: '',
    },
    raund: undefined, /* 1=1/16, 2=1/8, 3=1/4, 4=1/2, 5=final */
    timer: true, /* 1 - mozhem, 0 - ne mozhem */
    stage: 1, /* 1-raund, 2-after-raund(table) 3-winner-time */
    meme: {
      memes_id: 0,
      memes_img: '',
    },
    winners_memes: [
      {
        memes_id:0,
        memes_img:'https://pp.userapi.com/c840733/v840733952/13e8b/C_aOIq5vv9U.jpg'
      },
      {
        memes_id:1,memes_img:'https://pp.userapi.com/c840629/v840629396/148cf/nJpQWyUnmf4.jpg'
      }
    ] ,
  },
  actions: {
    socket_chooseMem: (context, id) => {
      ws.send(socketActions.chooseMem(id));
    }
  },
  mutations: {
    MEMES_LIKES(state, data) {
      if (state.currentLeft.id = data[0].id)
        // state.currentLeft.likeCount = data[0].likes;
        state.currentLeft.likeCount = 100;
      if (state.currentRight.id = data[1].id)
        state.currentRight.likeCount = data[1].likes;
      console.log(state)
    },
    START_TIMER(state, data) {
      state.currentLeft.id = data[0].id;
      state.currentLeft.url = data[0].url;
      state.currentRight.id = data[1].id;
      state.currentRight.url = data[1].url;
      state.timer = true;
    },
    END_TIMER(state, {winner_id, coins, winner_img}) {
      state.timer = false;
      state.coins = coins;
      state.winners_memes.push({memes_id: winner_id,memes_img:winner_img});
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
    stage(state){
      return state.stage;
    },
    winners_memes(state){
      return state.winners_memes;
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
  console.log(action)
  const {type, data} = action;
  await store.commit(type, data);
};

export default store;
