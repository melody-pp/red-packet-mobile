<template>
  <div class="ready">
    <div class="purse">
      <img v-show="aniVar.purse === 0" src="../assets/laugh_01.png">
      <img v-show="aniVar.purse === 1" src="../assets/laugh_02.png">
      <img v-show="aniVar.purse === 2" src="../assets/laugh_03.png">
      <img v-show="aniVar.purse === 3" src="../assets/laugh_04.png">
    </div>
    <div v-show="status===1">
      <img src="../assets/yugao.png" alt="">
      <span class="startTime">{{nextTime}}</span>
    </div>

    <img v-show="status===4" src="../assets/readyWords.png" alt="">
    <img class="rulesBG" src="../assets/rulesBG.png">
    <div class="content">
      <p>1、每人每天可参加多场，每场有一次摇红包机会</p>
      <P>2、现场主持人口令开始后，派发红包的同时，未进入用户不可进入本场活动</P>
      <p>3、一切规则及活动安排，以现场主持人的口令为准</p>
      <p>4、活动时间每日{{timeList.join('、')}}</p>
      <p>5、*本活动最终解释权归中国·众泰集团有限公司所有</p>
    </div>

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
        timeList: [],
        status: 1,
        nextTime: '11:00'
      }
    },
    mounted () {
      this.animate()
      this.mobileStart()
      this.axios.post('/get_nexttime').then(data => {
          this.nextTime = data.data[0].timed
        }
      )
      this.axios.post('/get_status').then(data => {
          this.timeList.push(data.data[0].time1)
          this.timeList.push(data.data[0].time2)
          this.timeList.push(data.data[0].time3)
          this.timeList.push(data.data[0].time4)
          this.timeList.push(data.data[0].time5)
        }
      )
    },
    methods: {
      animate () {
        aniLoop(this, 'purse', 4, 200)
      }
      ,
      mobileStart () {
        this.axios.post('/get_status').then(data => {
          console.log(+data.data[0].status)
          this.status = +data.data[0].status  // 1未开始 2活动中 3已结束 4准备开始

          if (+this.status === 2) {
            this.$router.push('/shaking')
          } else {
            this.mobileStart()
          }
        })
      }

    }
    ,
  }
</script>

<style scoped lang="scss">
  .ready {

    img {
      position: absolute;
      top: -3vh;
      left: 0;
      z-index: 10 !important;
    }
    .purse {
      img {
        top: -4.5vh;
        z-index: 10 !important;

      }
    }
    .rulesBG {
      height: 120%;
      top: -19vh;
      z-index: 10 !important;
    }
    .startTime {
      position: absolute;
      left: 44vw;
      top: 37.5vh;
      padding: 0.3vw;
      background-color: #fff;
      transform: rotateZ(13deg);
      font-size: 3.8vw;
      font-weight: 800;
      color: #f13c3c;
      text-shadow: 1px 1px rgba(0, 0, 0, 0.6);
      z-index: 10 !important;

    }
    .content {
      font-size: 2.6vw;
      color: #f3ea80;
      opacity: 0.8;
      position: absolute;
      bottom: 2.2vh;
      padding: 0 5.2vw;
      z-index: 10 !important;
      p {
        margin: 0;
        padding: 0;
        text-align: left;
        text-shadow: 2px 2px rgba(0, 0, 0, 0.6);
      }
    }
  }
</style>
