<template>
  <div>
    <img style="z-index:6;" src="../assets/shaking.png" :class="{animated:true,shaking}">
    <p class="shakingWord">摇红包开始啦，使劲摇！不要停！</p>
  </div>
</template>

<script>
  const SHAKE_THRESHOLD = 4000
  let last_update = 0
  let last_x = 0, last_y = 0, last_z = 0

  export default {
    name: 'shaking',
    data () {
      return {
        shaking: false
      }
    },
    created () {
      this.shakeHandler = this.shakeHandler.bind(this)
    },
    mounted () {
      this.getEnd()
      window.addEventListener('devicemotion', this.shakeHandler)
    },
    methods: {
      getEnd () {
        this.axios.post('/get_status').then(data => {
          if (+data.data[0].status === 3) {
            this.$router.push('/prize')
          } else {
            this.getEnd()
          }
        })
      },
      shakeHandler (eventData) {
        const acceleration = eventData.accelerationIncludingGravity
        const curTime = new Date().getTime()

        if ((curTime - last_update) > 100) {
          const {x, y, z} = acceleration
          const diffTime = curTime - last_update
          const speed = Math.abs(x + y + z - last_x - last_y - last_z) / diffTime * 10000

          if (speed > SHAKE_THRESHOLD) {
            setTimeout(() => this.shakeAnimate(), 500)
          }

          last_x = x
          last_y = y
          last_z = z
          last_update = curTime
        }
      },
      shakeAnimate () {
        if (this.shaking) {
          return
        }

        this.shaking = true
        setTimeout(() => this.shaking = false, 900)
      }
    },
    beforeDestroy () {
      window.removeEventListener('devicemotion', this.shakeHandler)
    }
  }
</script>

<style scoped lang="scss">
  .shakingWord {
    color: #fff;
    font-size: 4vw;
    font-weight: 500;
    width: 100%;
    position: absolute;
    left: 50%;
    top: 80%;
    transform: translate(-50%, -50%);
    z-index: 6;
  }

  .animated {
    transform: rotateZ(0deg);
    animation-duration: 1.2s;
    animation-fill-mode: both;
  }

  @keyframes shaking {
    from {
      transform: rotateZ(0deg);
    }

    50% {
      transform: rotateZ(40deg);
    }

    100% {
      transform: rotateZ(0deg);
    }
  }

  .shaking {
    transform-origin: 45% 60%;
    animation-name: shaking;
  }

</style>
