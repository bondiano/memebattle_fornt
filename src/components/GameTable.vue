<template>
  <div v-if='checked'>
    <b-container class="bv-example-row">
      <b-row class="text-center">
          
      </b-row>
      </b-row>
    </b-container>
  </div>
</template>

<script>
  export default {
    name: 'GameTable',
    data() {
      return {
        //        image: ''
      }
    },
    computed: {
      checked() {
        return this.$store.getters.timer;
      },
    }
  }

</script>

<style>
img.memes-img{
    padding-bottom: 20px;
}
</style>
