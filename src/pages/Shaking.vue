<template>
  <div class="shaking">
    <img src="../assets/shaking.png" alt="">
    <p class="shakingWord">摇红包开始啦，使劲摇！不要停！</p>
  </div>
</template>

<script>
  export default {
    name: 'shaking'
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
  }
</style>
