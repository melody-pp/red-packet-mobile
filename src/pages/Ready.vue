<template>
  <div class="ready">
    <img v-show="aniVar.purse === 0" src="../assets/laugh_01.png">
    <img v-show="aniVar.purse === 1" src="../assets/laugh_02.png">
    <img v-show="aniVar.purse === 2" src="../assets/laugh_03.png">
    <img v-show="aniVar.purse === 3" src="../assets/laugh_04.png">
    <img src="../assets/rules.png" alt="">
    <img src="../assets/readyWords.png" alt="">
  </div>

</template>

<script>
  import { aniLoop } from '../util'

  export default {
    name: 'ready',
    data () {
      return {
        aniVar: {
          purse: null,
        },
      }
    },
    mounted () {
      this.animate()
    },
    methods: {
      animate () {
        aniLoop(this, 'purse', 4, 200)
      },
    },
  }
</script>

<style scoped>
  .ready {
    /*position: absolute;*/
    /*top: 0;*/
    /*left: 0;*/

  }
</style>
