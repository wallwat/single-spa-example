<template>
  <div id="app3">
    <img alt="Vue logo" src="./assets/logo.png">
    <img class="picture" src="https://sellsuki-picture.s3-ap-southeast-1.amazonaws.com/20170424144115ptfZdMAKab_1">
    <p>url src</p>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app3',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app3 {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 25%;
  float: left;
}
.picture {
  width: 200px;
  border-radius: 50%;
}
</style>
