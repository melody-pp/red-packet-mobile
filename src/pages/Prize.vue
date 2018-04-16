<template>
  <div class="prize">
    <img v-show="isOpen===0" src="../assets/closeRedPacket.png" @click="isOpen=1">
    <div v-show="isOpen===1">
      <img src="../assets/openRedPacket.png" alt="">
      <div class="congratulations">
        <p>恭喜您</p>
        <p>获得<span>{{money}}</span>元现金红包</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Prize',
    data: () => ({
      money: 0,
      isOpen: 0
    }),
    mounted () {
      this.axios.get('/get_money', {
        params: {
          userid: userId
        }
      }).then(data => {
        this.money = data.data[0].money
      })
    }
  }
</script>

<style scoped lang="scss">
  .prize {
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    .congratulations {
      font-size: 5vw;
      color: #ffce18;
      width: 100%;
      position: absolute;
      left: 50%;
      top: 75%;
      transform: translate(-50%, -50%);
      letter-spacing: 4px;
      p {
        margin-bottom: -1.2vh;
      }
    }
  }
</style>
