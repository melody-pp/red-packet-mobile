<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <img src="./assets/mobileTitle.png" class="mobileTitle">
    <img src="./assets/mobileBg.jpg" class="mobileBg">
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'App',
    mounted () {
      window.userId = (new URL(window.location.href)).searchParams.get('userid')
      // alert(userId)
    }
  }
</script>

<style>
  html, body {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
  }

  #app {
    font-family: Microsoft YaHei, 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: relative;
  }

  .mobileTitle {
    position: absolute;
    top: -5vh;
    left: 0;
    z-index: 3;
  }

  .mobileBg {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
  }

  img {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
  }
</style>
