<template>
  <div id="app">
    <router-view>
      <img src="./assets/logo.png">
      <HelloWorld/>
    </router-view>
    <ul>
      <router-link to = '/discover'><li>发现</li></router-link>
      <router-link to = '/bookshelf'> <li>书架</li></router-link>
      <router-link to = '/idea'> <li>想法</li></router-link>
      <router-link to = '/my'><li>我</li></router-link>
    </ul>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
  html,body,#app{
    width: 100%;
    height: 100%;
  }
  body{
    margin: 0;
  }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  color: #2c3e50;
}
  ul{
    width: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
    height: 50px;
    display: flex;
    padding-left: 0;
    margin: 0;
    border-top: 1px solid #eee;
    background: deepskyblue;
  }
  ul a{
    list-style: none;
    flex: 1;
    display: inline-block;
    height: 50px;
    line-height: 50px;
    border-right: 1px solid #eee;
    text-decoration: none;
    text-align: center;
  }
  li:nth-of-type(3){
    border-right: none;
  }
  .router-link-active{
    color:#5889f6;
  }
</style>
