<template>
  <script type="text/x-template" id="modal-template">
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">

          <div class="modal-header">
            <slot name="header">
              default header
            </slot>
          </div>

          <div class="modal-body">
            <slot name="body">
              <h4>{{ username }}</h4>
              <img :src="avatar" alt="Avatar"/>
              <input v-model=newUsername type="text">
              <input v-model=avatarURL type="text">
              <button @click="submit">Submit</button>
            </slot>
          </div>

          <div class="modal-footer">
            <slot name="footer">
              default footer
              <button class="modal-default-button" @click="$emit('close')">
                OK
              </button>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
</script>
</template>

<script>
  export default {
    name: 'UserChooseModal',
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
