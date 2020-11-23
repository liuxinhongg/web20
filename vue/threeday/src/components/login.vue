<template>
  <div>
    <el-form style="width: 30%;margin: 100px auto;" :mode="loginFrom" label-width="120px">
      <el-form-item label="用户名">
        <el-input v-model="loginFrom.username"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="loginFrom.password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="success" @click="login">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  import { mapMutations } from 'vuex'
  export default {
    data(){
      return {
        loginFrom:{
          username:'',
          password:''
        }
      }
    },
    methods:{
      ...mapMutations({
        changLogin:'changLogin'
      }),
      login(){
        this.$http.post('/nodeapi/users/login',this.loginFrom).then(res=>{
          console.log(res);
          if(res.data.state===0){
            this.$message.success("登录成功~");
            localStorage.setItem('userToken',res.data.token);
            this.changLogin({
              logintoken:res.data.token
            })
          }
        })
      }
    }
  }
</script>

<style>
</style>
