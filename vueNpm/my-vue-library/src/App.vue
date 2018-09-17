<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <Banner>Fundebug：最专业的应用错误监控平台!</Banner>
    <Li left-text ='姓名' right-text = '张三'>

    </Li>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Banner from './components/Banner.vue'
import Li from './components/Li.vue'

export default {
  name: 'app',
  components: {
    HelloWorld,
    Banner,
    Li
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
