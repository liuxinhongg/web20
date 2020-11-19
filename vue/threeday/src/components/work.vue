<template>
  <div>
    <h1>
      <font color="red">我是work组件</font>
    </h1>
    <h2><font color="yellowgreen">参数是：{{road}}</font> </h2>
    <button @click="go()">我要去home组件</button>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        road:'',
        name:"zhangsan",
        age:19
      }
    },
    mounted() {
      console.log(this.$route);
      this.road = this.$route.params.id
    },
    methods:{
      go(){
        // this.$router.push("/home?name="+this.name+"&age="+this.age);
        /**/ 
        this.$router.push({
          path:"/home",
          query:{
            name:"张三",
            age:19
          }
        }); 
      }
    }
  }
</script>

<style>
</style>
