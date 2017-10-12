<!--html模板-->
<template>
  <div class="app">  
    <img class="logo" src="./logo.png" alt="">  
    
    <ul>
      <li><a href="#" >vue</a></li>
      <li><a href="#" >vue-router</a></li>
      <li><a href="#" >vuex</a></li>
      <li><a href="#" >vue-ssr</a></li>
    </ul>
    <h3><span>{{msg}}</span></h3>
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
    return { msg:'Say hi to Vue' }
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
h3 span{
  display: inline-block;
  font-weight: normal;
  transform: rotate(90deg) translateX(56px);
}


ul {
  list-style-type: none;
  padding: 0;  
}

li {
  display: inline-block;
  margin: 0 8px;
}

a {
  color: #42b983;
}
</style>
