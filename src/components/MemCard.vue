<template>
  <div>
    <div @click="choose">
     <b-card no-body
            style="max-width: 20rem;"
            :img-src="image"
            img-alt="Image"
            img-top>
        <p v-if="text" class="card-text">{{ text }}</p>
        <b-button href="#" variant="primary">Test button</b-button>
     </b-card>
    </div>
  </div>
</template>


<script>
  export default {
    name: 'UserChooseModal',
    props: ['position'],
    data() {
      return {}
    },
    computed: {
      image() {
        if (this.position === 'left') {
          return this.$store.getters.currentLeft.url
        } else if (this.position === 'right') {
          return this.$store.getters.currentRight.url;
        }
      },
      text() {
        if(this.position === 'left'){
          return this.$store.getters.currentLeft.text
        }else if(this.position === 'right'){
          return this.$store.getters.currentRight.text;
        }
      },
      id() {
        if (this.position === 'left') {
          return this.$store.getters.currentLeft.id
        } else if (this.position === 'right') {
          return this.$store.getters.currentRight.id;
        }
      }
    },
    methods: {
      choose() {
        this.$store.dispatch('socket_chooseMem', this.id);
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
