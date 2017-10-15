<template>
  <b-modal id="userModal"
           ref="userModalRef"
           hide-header
           :close-on-backdrop="false"
           :no-close-on-esc="false"
           hide-footer >

    <div class="d-block text-center">
      <div class="">
        <span v-if="!registered" v-on:click="registered = !registered">Sign in</span>
        <span v-if="registered" v-on:click="registered =!registered">Sign up</span>
      </div>
      <b-form v-if="registered">
        <b-form-group id="usernameGroup"
                      label-for="usernameInput">
          <b-form-input id="usernameInput"
                        :state="usernameState"
                        aria-describedby="input-help input-feeback"
                        type="email" v-model="username" required
                        placeholder="Enter username">
          </b-form-input>
          <b-form-feedback id="input-feedback">
            Enter at least 3 letters
          </b-form-feedback>
        </b-form-group>
        <b-form-group id="passwordGroup"
                      label-for="passwordInput">
          <b-form-input id="passwordInput"
                        type="password" v-model="password" required
                        :state="passwordState"
                        aria-describedby="input-help input-feeback"
                        placeholder="Enter password">
          </b-form-input>
          <b-form-feedback id="input-feedback">
            Enter at least 5 letters
          </b-form-feedback>

        </b-form-group>
      </b-form>

      <b-form v-if="!registered" @submit="">
        <b-form-group id="usernameGroup"
                      label-for="usernameInput">
          <b-form-input id="usernameInput"
                        :state="usernameState"
                        aria-describedby="input-help input-feeback"
                        type="email" v-model="username" required
                        placeholder="Enter username">
          </b-form-input>
          <b-form-feedback id="input-feedback">
            Enter at least 3 letters
          </b-form-feedback>
        </b-form-group>
        <b-form-group id="passwordGroup"
                      label-for="passwordInput">
          <b-form-input id="passwordInput"
                        type="password" v-model="password" required
                        :state="passwordState"
                        aria-describedby="input-help input-feeback"
                        placeholder="Enter password">
          </b-form-input>
          <b-form-feedback id="input-feedback">
            Enter at least 5 letters
          </b-form-feedback>

        </b-form-group>
        <b-form-group id="passwordAgainGroup"
                      label-for="passwordAgainInput">
          <b-form-input id="passwordAgainInput"
                        type="password" v-model="passwordAgain" required
                        :state="passwordAgainState"
                        aria-describedby="input-help input-feeback"
                        placeholder="Enter password again">
          </b-form-input>
          <b-form-feedback id="input-feedback">
            Enter at least 5 letters
          </b-form-feedback>

        </b-form-group>
      </b-form>
    </div>
    <b-btn class="mt-3" variant="outline-danger" block @click="setIsLogin" @keyup.enter="submit">
      <span v-if="registered">Login</span>
      <span v-if="!registered">Register and Login</span>
    </b-btn>
  </b-modal>
</template>


<script>
  export default {
    name: 'UserModal',
    data() {
      return {
        username: '',
        password: '',
        passwordAgain:'',
//        avatarURL: '',
        registered: true
      }
    },
    computed: {
      avatar() {
        return this.$store.getters.avatar;
      },
      usernameState() {
        return this.username.length > 2 ? null : false;
      },
      passwordState() {
        return this.password.length > 5 ? null : false;
      },
      passwordAgainState() {
        return this.passwordAgain.length > 5 ? null : false;
      },
      isLogin() {
//          return this.$store.getters.isLogin
//          return true
      }
    },
    methods: {
      setIsLogin() {
        const data = {
          username: this.$data.username,
          password: this.$data.password
        };
        if (this.$data.registered) {
          this.$store.dispatch('login', data);
        }
        else {
          this.$store.dispatch('register', data);
        }
        window.localStorage.setItem('username', data.username);
        window.localStorage.setItem('password', data.password);

        this.$refs.userModalRef.hide();
      }
    },
    mounted() {
      const username = window.localStorage.getItem('username');
      const password = window.localStorage.getItem('password');

      if (username && password)
        this.$store.dispatch('login', {
            username, password
        });
      else
        this.$refs.userModalRef.show()
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
