<template>
  <div id="app1">
    <h3>App 1</h3>
    <div class="list">List 1</div>
    <div class="list">List 2</div>
    <div class="list">List 3</div>
    <div class="list">List 4</div>
  </div>
</template>

<script>

export default {
  name: 'app1',
}
</script>

<style>
#app1 {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 25%;
  float: left;
}
.list {
  height: 50px;
  line-height: 3em;
  border-bottom: 1px solid #e6e6e6;
}
.list:hover {
  background-color: #e7e7e7;
}
</style>
