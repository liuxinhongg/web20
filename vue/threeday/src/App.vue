<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <!-- <a href="#/">首页</a>
    <a href="#/home">回家</a> -->
    <!-- <a href="/">首页</a>
    <a href="/home">回家</a> -->
   <!-- <router-link to="/" tag="li">首页</router-link>
   <router-link to="/home" tag="h3">回家</router-link> -->
     <!-- <router-link to="/" exact>首页</router-link>
     <router-link to="/home" active-class="gohome">回家</router-link>
     <router-link to="/work/123">工作</router-link> -->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  *{
    padding: 0;
    margin: 0;
  }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
/*  text-align: center;
  color: #2c3e50;
  margin-top: 60px; */
}
 .el-scrollbar__wrap{
    overflow-x: hidden;
  }
/* .router-link-active{
    color: #f99;
 }
 .gohome{
   font-weight: bold;
   font-size: 28px;
   color: #ffcec8;
 } */
 .nav{
   background-color: red;
   color: #f99;
   font-weight: bold;
 }
</style>
