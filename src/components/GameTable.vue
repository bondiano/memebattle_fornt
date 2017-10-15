<template>
  <div v-if='checked'>
    <b-container class="bv-example-row">
      <b-row class="text-center">
         <b-col>

         </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
  export default {
    name: 'GameTable',
    data:{
        memes(){
            return this.$store.getters.memes;
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
