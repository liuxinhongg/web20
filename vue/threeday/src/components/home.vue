<template>
  <div>
    <h1>我是h1标签</h1>
    <h1>{{aa}}</h1>
    <h1>{{bb}}</h1>
  </div>
</template>

<script>
  export default {
    data(){
      return {
          aa:'',
          bb:''
      }
    },
    mounted() {
      console.log(this.$route);
      this.aa = this.$route.params.name
      this.bb = this.$route.params.age
    }
  }
</script>

<style>
</style>
