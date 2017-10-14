<template>
  <div>
    <a href="">
     <b-card no-body
            style="max-width: 20rem;"
            :img-src="image"
            img-alt="Image"
            img-top>
            <p v-if="text" class="card-text">{{ text }}</p>
            <b-button href="#" variant="primary">Test button</b-button>
        </b-card>
    </a>
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
        if(this.position == 'left'){
          return this.$store.getters.currentLeft.url
        }else if(this.position == 'right'){
          return this.$store.getters.currentRight.url;
        }
      },
      text() {
        if(this.position == 'left'){
          return this.$store.getters.currentLeft.text
        }else if(this.position == 'right'){
          return this.$store.getters.currentRight.text;
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
  a{
    text-decoration: none;
  }
</style>
