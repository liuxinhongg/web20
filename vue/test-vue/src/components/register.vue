<template>
  <div>
    <el-form label-width="80px" :model="regFrom" style="width: 40%;margin: 100px auto;">
      <el-form-item label="用户名">
        <el-input v-model="regFrom.username"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="regFrom.password"></el-input>
      </el-form-item>
      <el-form-item label="年龄">
        <el-input v-model="regFrom.age"></el-input>
      </el-form-item>
      <el-form-item label="昵称">
        <el-input v-model="regFrom.nick"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button @click="zhuce">注册</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        regFrom:{
          username:'',
          password:'',
          age:'',
          nick:''
        }
      }
    },
    methods:{
      zhuce(){
        this.$http.post('/nodeuser/page/register',this.regFrom).then(res=>{
          console.log(res)
          if(res.data.code===0){
            this.$router.push("/login")
          }
        })
      }
    }
  }
</script>

<style>
</style>
