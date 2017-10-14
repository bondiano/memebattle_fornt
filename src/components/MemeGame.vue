<template>
  <div>
    <b-container class="bv-example-row">
      <timer>

      </timer>
    </b-container>
    <b-container class="bv-example-row" center>
      <b-row class="text-center">
    <b-card-group deck>
      <mem-card position="left">
        
      </mem-card>

      <mem-card position="right">

      </mem-card>
    </b-card-group>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import MemCard from './MemCard';

export default {
  name: 'MemeGame',
  components: {
    MemCard
  },
  data () {
    return {}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
