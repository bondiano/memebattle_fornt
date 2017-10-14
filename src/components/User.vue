<template>
  <div class="user">
    <h4>{{ newUsername }}</h4>
    <input v-model=newUsername type="text">
    <button @click="setUsername">Submit</button>
  </div>
</template>

<script>
  export default {
    name: 'User',
    data() {
      return {
        newUsername: 'Unknown'
      }
    },
    computed: {
      username() {
        return this.$store.getters.username;
      }
    },
    methods: {
      setUsername() {
        this.$store.dispatch('setUsername', this.data.newUsername)
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
