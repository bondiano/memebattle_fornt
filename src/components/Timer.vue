<template>
    <div class="timer" v-if='checked'>
        <b-container class="bv-example-row">
            <b-row class="text-center">
                <b-col>
    <h1>До следующего раунда: </h1>
                </b-col>
                <b-col>
    <ol class="clock">
    <li class="sec">
        <div class="one">
            <span>5</span>
            <span>4</span>
            <span>3</span>
            <span>2</span>
            <span>1</span>
        </div>
      </li>
    </ol> 
       </b-col>
    <b-col>
    <img src="../assets/Pacman.svg"></svg>
    </b-col>
    </b-row>
        </b-container>
    </div>
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
.timer ol {
  list-style: none;
  text-align: center;
  margin: 0 auto;
  padding: 0 0.5em;
  height: 2.5rem;
  overflow: hidden;
}

.timer li {
  float: left;
  padding: 0 0.5em;
  background-color: #333;
  margin: 0 0.5em;
  font-family: Poiret One, monospace;
  color: #ddd;
}

div.timer {
  animation-timing-function: linear;
  animation-iteration-count: infinite;
}

.timer span {
  display: block;
  font-size: 2.5rem;
  line-height: 1em;
}
.sec .one {
  animation-name: one-step-sec;
  animation-duration: 5s;
}

@keyframes one-step-sec {
  from {
    top: 0rem;
  }
  to {
    top: -7.5rem; 
  }
}
</style>
