<!--html模板-->
<template>
  <div class="app">  
    <img class="logo" src="./logo.png" alt="">  
    <h1>{{msg}}</h1>
    <ul>
      <li><a href="#" target="_blank">vue-router</a></li>
      <li><a href="#" target="_blank">vuex</a></li>
      <li><a href="#" target="_blank">vue-loader</a></li>
      <li><a href="#" target="_blank">awesome-vue</a></li>
    </ul>
  </div>
</template>

<!--Javascript-->
<script>
export default {
  // data() {
  //   return {
  //     msg: ' vue - step - 000 '
  //   }
  // }
  
  data: function(){
    return { msg:'vue - step - 000' }
  }
  
}
</script>

<!--Style-->
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
  word-spacing: 10px;
  /*letter-spacing: 1px;*/
}

ul {
  list-style-type: none;
  padding: 0;
  margin-top: 25px
}

li {
  display: inline-block;
  margin: 0 8px;
}

a {
  color: #42b983;
}
</style>
