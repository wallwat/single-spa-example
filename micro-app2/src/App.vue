<template>
  <div id="app2">
    <h3>App 2</h3>
    <textarea v-model="message" placeholder="add message"></textarea>
    <p>Message is: {{ message }}</p>
  </div>
</template>

<script>

export default {
  name: 'app2',
  data () {
    return {
      message: ''
    }
  },
}
</script>

<style>
#app2 {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 50%;
  float: left;
}
textarea {
  height: 60px;
  width: 70%;
}
</style>
