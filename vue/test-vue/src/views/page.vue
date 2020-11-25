<template>
  <div class="page">
    <h1>我的项目{{isLogin}}</h1>
    <div class="topbox">
      <div v-if="isLogin===0">
        <el-button type="success">登录</el-button>
        <el-button type="danger">注册</el-button>
      </div>
      <div v-if="isLogin===1">
        <el-button type="success">用户昵称：{{nick}}</el-button>
        <el-button type="danger">退出登录</el-button>
      </div>
    </div>
    <div class="getuser">
      <img :src="useravatar" width="100"/>
      <el-input v-model="username" placeholder="请输入用户名"></el-input>
      <el-button type="primary" @click="getuserinfo()">获取用户信息</el-button>
    </div>
    <div class="userinfo">
      <el-input placeholder="昵称" v-model="nick"></el-input>
      <el-upload class="avatar-uploader" action="/nodeuser/page/upload" :show-file-list="false" name="head_img"
        :on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload">
        <img v-if="imageUrl" :src="imageUrl" class="avatar">
        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
      </el-upload>
      <el-button @click="tj">提交</el-button>
    </div>
  </div>
</template>

<script>
  import Cookie from "js-cookie"
  export default {
    data() {
      return {
        useravatar:'',
        username: '',
        nick: '',
        imageUrl:null
      }
    },
    computed: {
      isLogin() {
        return this.$store.state.isSignIn
      },
    },
    created() {
      this.getuserinfo()
    },
    methods: {
      tj(){
        this.$http.post("/nodeuser/page/updateuser",{
          nick:this.nick,
          username:this.username,
          head_img:this.imageUrl
        }).then(res=>{
          console.log(res)
          this.getuserinfo()
        })
      },
      getuserinfo() {
        this.$http.get("/nodeuser/page/userinfo", {
          params: {
            username: "aa"
          }
        }).then(res => {
          console.log(res);
          if (res.data.code === 0) {
            this.nick = res.data.data.nick
            if(res.data.data.head_img===''||res.data.data.head_img===null){
              this.imageUrl=null;
            }else{
              this.imageUrl = res.data.data.head_img
              // this.useravatar = res.data.data.head_img
            }
          }
        })
      },
      handleAvatarSuccess(res, file) {
        console.log(res)
        this.imageUrl = res.data;
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
      }
    }
  }
</script>

<style lang="scss" scoped>
  .page {
    width: 50%;
    margin: 100px auto;

    h1 {
      text-align: center;
    }

    .topbox {
      width: 60%;
      margin: auto;
    }

    .getuser {
      width: 60%;
      margin: 50px auto;
    }
  }
</style>
