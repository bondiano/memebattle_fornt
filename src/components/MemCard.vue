<template>
  <div>
     <b-card bg-variant="dark"
                header="Dark"
                text-variant="white"
                class="text-center">
            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <b-button href="#" variant="primary">Test button</b-button>
        </b-card>
    <button @click="choose">Choose</button>
  </div>
</template>


<script>
  export default {
    name: 'UserChooseModal',
    data() {
      return {
//        image: ''
      }
    },
    computed: {

    },
    methods: {
      choose() {
        this.$store.dispatch('socket_chooseMem', {});
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
