<template>
  <div>
    <el-form label-width="80px" :model="logFrom" style="width: 40%;margin: 100px auto;">
      <el-form-item label="用户名">
        <el-input v-model="logFrom.username"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="logFrom.password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button @click="login">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  import Cookie from "js-cookie"
  export default {
    data(){
      return {
        logFrom:{
          username:'',
          password:''
        }
      }
    },
    methods:{
      login(){
        this.$http.post('/nodeuser/page/login',this.logFrom).then(res=>{
          console.log(res)
          if(res.data.code===0){
            Cookie.set('token',res.data.token);
            this.$store.commit("changIsSignIn",1)
            this.$store.commit('setToken',res.data.token);
            this.$message.success("登录成功")
            this.$router.push("/page")
          }
        })
      }
    }
  }
</script>

<style>
</style>
