<template>
  <div>
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
