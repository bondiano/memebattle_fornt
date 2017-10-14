<template>
  <div id="app">
    <b-navbar toggleable="md" type="dark" variant="info" class="navbar">
      <b-nav-toggle target="nav_collapse"></b-nav-toggle>
      <b-collapse is-nav id="nav_collapse">
        <b-nav>
          <b-nav-item href="#/rules">Правила</b-nav-item>
          <b-nav-item href="#/about">О нас</b-nav-item>
        </b-nav>
      </b-collapse>
      <b-nav-text class="user_name">{{ username }} </b-nav-text>
      <b-nav-text class="user_name"><img src="./assets/coin.png" alt="coin" srcset="" class="coin"></b-nav-text>
      <b-nav-text class="user_name">{{ coins }}</b-nav-text>
        <b-nav>
          <b-nav-item href="#/" class="sm"><img :src= "avatar" alt="Avatar" class="avatar"></b-nav-item>
        </b-nav>
</b-navbar>
    <router-view/>
    <a href="#/">На главную</a>
    <footer>
      <img src="" alt="logo">
      <ul>
        <li><a href="#/about"></a>О нас</li>
        <li><a href="#/rules"></a>Правила</li>
      </ul>
      <div>
        <p>Следи за нами в соц сетях:</p>
        <a href="http://vk.com/" target="__blank"><i class="fa fa-vk" aria-hidden="true"></i></a>
        <a href="http://facebook.com/" target="__blank"><i class="fa fa-facebook" aria-hidden="true"></i></a>
        <a href="http://twitter.com" target="__blank"><i class="fa fa-twitter" aria-hidden="true"></i></a>
      </div>
      <p>Сделанно специально для FunTech Hackaton</p></footer>
  </div>
</template>

<script>
export default {
  name: 'app',
  computed: {
    avatar(){
      return this.$store.getters.avatar;
    },
    username(){
      return this.$store.getters.username;
    },
    coins(){
      return this.$store.getters.coins;
    }
  }
}
</script>

<style>
#app {
  font-family: 'Roboto', Helvetica;
}
.avatar{
  height: 65px;
  border-radius: 100%;
}
#contaner-warp{
}
.navbar{
  padding: 4px !important;
}
.nav{
  padding: 0px !important;
}

.navbar{
  background-color: #000000 !important;
}
a.nav-link {
    padding: 3px 16px 3px 16px !important;
}
.user_name{
  color: #3d60e3;
  padding-left: 5px;
}
.coin{
  height: 20px;
}
</style>
