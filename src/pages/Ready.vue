<template>
  <div>
    <img v-show="aniVar.purse === 0" src="../../assets/ready/laugh_01.png">
    <img v-show="aniVar.purse === 1" src="../../assets/ready/laugh_02.png">
    <img v-show="aniVar.purse === 2" src="../../assets/ready/laugh_03.png">
    <img v-show="aniVar.purse === 3" src="../../assets/ready/laugh_04.png">
  </div>

</template>

<script>
  import { aniLoop } from '../../util'

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

</style>
