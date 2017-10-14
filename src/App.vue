<template>
  <div id="app">
    <nav class="navbar">
      <a href="#/rulels">Правила</a>
      <a href="#/about">О нас</a>
      <img :src= "avatar" alt="Avatar" class="avatar">
    </nav>
    <router-view/>
    <footer></footer>
  </div>
</template>

<script>
export default {
  name: 'app',
  computed: {
    avatar(){
      return this.$store.getters.avatar;
    }
  }
}
</script>

<style>
#app {
  font-family: 'Roboto', Helvetica;
}
.avatar{
  height: 75px;
  border-radius: 100%;
}
</style>
