<template>
  <div class="user">
    <h4>{{ username }}</h4>
    <img :src="avatar" alt="Avatar"/>
    <input v-model=newUsername type="text">
    <input v-model=avatarURL type="text">
    <button @click="submit">Submit</button>
  </div>
</template>

<script>
  export default {
    name: 'User',
    data() {
      return {
        newUsername: 'Unknown',
        avatarURL: '',
      }
    },
    computed: {
      username() {
        return this.$store.getters.username;
      },
      avatar() {
        return this.$store.getters.avatar;
      }
    },
    methods: {
      submit() {
        const userData = {
          username: this.$data.newUsername,
          avatarURL: this.$data.avatarURL
        };
        this.$store.dispatch('setUser', userData);
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
