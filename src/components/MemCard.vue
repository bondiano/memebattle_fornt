<template>
  <div>
     <b-card no-body
            style="max-width: 20rem;"
            :img-src="image.url"
            img-alt="Image"
            img-top>
            <p v-if="text" class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <b-button href="#" variant="primary">Test button</b-button>
        </b-card>
  </div>
</template>


<script>
  export default {
    name: 'UserChooseModal',
    props: ['position'],
    data() {
      return {
//        image: ''
      }
    },
    computed: {
      image() {
      console.log(this.position);
        if(this.position == 'left'){
          return this.$store.getters.currentLeft 
        }else if(this.position == 'right'){
          return this.$store.getters.currentRight;
        }
      }
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
  .wrapper{

  }
</style>
