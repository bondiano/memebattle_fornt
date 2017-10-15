<template>
  <b-modal id="userModal" ref="userModalRef" hide-footer title="Введите свои данные">
    <div class="d-block text-center">
      <h3>You name: {{ username }}</h3>
      <img :src="avatar" alt="Avatar" class="img-fluid w-100 mb-2"/>
      <b-form-input v-model.trim="newUsername"
                    type="text"
                    :state="nameState"
                    aria-describedby="input-help input-feeback"
                    placeholder="Enter your name"
                    @keyup.space="submit"></b-form-input>
      <b-form-feedback id="input-feedback">
        <!-- This will only be shown if the preceeding input has an invalid state -->
        Enter at least 3 letters
      </b-form-feedback>
      <!--<input v-model=newUsername type="text" placeholder="Username">-->
    </div>
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
      }
    },
    computed: {
      username() {
        return this.$store.getters.username;
      },
      avatar() {
        return this.$store.getters.avatar;
      },
      nameState() {
        return this.newUsername.length > 2 ? null : false;
      }
    },
    methods: {
      submit() {
        const userData = {
          username: this.$data.newUsername,
          avatarURL: this.$data.avatarURL
        };
        this.$store.dispatch('setUser', userData);
        window.localStorage.setItem('username', this.$data.newUsername)
        this.$refs.userModalRef.hide();
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
