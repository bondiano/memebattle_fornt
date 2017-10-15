<template>
  <div>
    <b-container class="bv-example-row">
      <timer>
      </timer>
    </b-container>
    <b-container class="bv-example-row" center>
      <b-row align-h="center">
    <b-card-group deck>
      <b-col align-self="start">
      <mem-card position="left">
      </mem-card>
      </b-col>
      <b-col align-self="end">
      <mem-card position="right">
      </mem-card>
      </b-col>
    </b-card-group>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import MemCard from './MemCard';
import Timer from './Timer';

export default {
  name: 'MemeGame',
  components: {
    MemCard,
    Timer
  },
  data () {
    return {}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
