<template>
  <div>
    <div class="bottom">
      <el-button type="warning" @click="changeaa()">我是子组件的按钮</el-button>
    </div>

  </div>
</template>

<script>
  export default {
    data(){
      return {
        aa:'今天周二，冷得很'
      }
    },
    methods:{
      changeaa(){
        this.$emit("titlechange",this.aa);
      }
    }
  }
</script>

<style scoped>
  .bottom{
    width: 100%;
    height: 400px;
    background-color: green;
    margin-top: 20px;
    text-align: center;
  }
</style>
