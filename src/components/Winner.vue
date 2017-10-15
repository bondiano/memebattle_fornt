<template>
    <div v-if='checked'>
        <b-container class="bv-example-row">
            <b-row class="text-center">
              <h1>
                  Победил мем:
              </h1>
            <b-img :src="winner" alt="meme" rounded/>
        </b-row>
        </b-container>
    </div>
</template>

<script>
    export default {
        name: 'Winner',
         data() {
            return {
//        image: ''
            }
        },
        computed: {
            winner(){
                return this.$store.getters.winners_memes.url;
            }
        }
    }
</script>

<style>


</style>