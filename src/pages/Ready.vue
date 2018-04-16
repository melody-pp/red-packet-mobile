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
    <img src="../assets/rulesBG.png">
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
        timeList: ['11:00', '13:00', '15:00'],
        status: 1,
        nextTime: '11:00'
      }
    },
    mounted () {
      this.animate()
      this.getTimeList()
      this.mobileStart()
    },
    methods: {
      animate () {
        aniLoop(this, 'purse', 4, 200)
      },
      mobileStart () {
        this.axios.post('/get_status').then(({data: {data: [data]}}) => {
          this.status = +data.status  // 1未开始 2活动中 3已结束 4准备开始
          this.nextTime = data.nextTime
          if (+this.status === 2) {
            this.$router.push('/shaking')
          } else {
            this.mobileStart()
          }
        })
      },
      getTimeList () {
        this.axios.post('/get_timeList').then(({data: {data}}) => {
          this.timeList = data
        })
      }
    },
  }
</script>

<style scoped lang="scss">
  .ready {
    img {
      position: absolute;
      top: 0;
      left: 0;
    }
    .purse {
      img {
        top: -3vh;
      }
    }
    .startTime {
      position: absolute;
      left: 44vw;
      top: 40.5vh;
      padding: 0.3vw;
      background-color: #fff;
      transform: rotateZ(13deg);
      font-size: 3.8vw;
      font-weight: 800;
      color: #f13c3c;
      text-shadow: 1px 1px rgba(0, 0, 0, 0.6);

    }
    .content {
      font-size: 3vw;
      color: #f3ea80;
      opacity: 0.8;
      position: absolute;
      bottom: 1vh;
      padding: 0 6vw;
      p {
        margin: 0;
        padding: 0;
        text-align: left;
        text-shadow: 2px 2px rgba(0, 0, 0, 0.6);
      }
    }
  }
</style>
