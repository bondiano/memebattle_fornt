<template>
  <b-modal v-model="show" hide-footer title="Введите свои данные">
    <h4>{{ username }}</h4>
    <img :src="avatar" alt="Avatar"/>
    <input v-model=newUsername type="text" placeholder="Username">
    <input v-model=avatarURL type="text" placeholder="Avatar URL">

    <b-btn class="mt-3" variant="outline-danger" block @click="submit">Submit</b-btn>
  </b-modal>
</template>


<script>
  export default {
    name: 'UserChooseModal',
    data() {
      return {
        newUsername: '',
        avatarURL: '',
        show: true
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
        this.$data.show = !this.$data.show;
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
