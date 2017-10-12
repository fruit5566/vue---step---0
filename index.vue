<template>
<div class="app">
  <img class="logo" src="./logo.png" alt="">
  <h1>{{msg}}</h1>
  <h2>Essential Link</h2>
  <ul>
    <li><a href="#" target="_blank">Hello</a></li>
    <li><a href="#" target="_blank">Hello</a></li>
    <li><a href="#" target="_blank">Hello</a></li>
    <li><a href="#" target="_blank">Hello</a></li>
  </ul>
  <h2>Ecosystem</h2>
  <ul>
    <li><a href="#" target="_blank">vue-router</a></li>
    <li><a href="#" target="_blank">vuex</a></li>
    <li><a href="#" target="_blank">vue-loader</a></li>
    <li><a href="#" target="_blank">awesome-vue</a></li>
  </ul>
</div>
</template>

<script>
export default {
  data() {
    return {
      msg: 'fruit vue -- vue'
    }
  }
}
</script>

<style>
.app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.logo{
  width: 200px;
  height: 200px;
}
h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
