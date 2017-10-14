<template>
    <h1 v-if='checked'>До следующего раунда: <img src="../assets/Pacman.svg"></svg></h1>
</template>

<script>
    export default {
        name: 'Timer',
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

</style>
