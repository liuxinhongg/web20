<template>
  <div>
    <top/>
    <div class="box">
      <i class="el-icon-grape ziti"></i>
      <i class="el-icon-sugar sugar"></i>
      <el-row>
        <el-button>默认按钮</el-button>
        <el-button type="primary">主要按钮</el-button>
        <el-button type="success">成功按钮</el-button>
        <el-button type="info" plain>信息按钮</el-button>
        <el-button type="warning" round>警告按钮</el-button>
        <el-button type="danger">危险按钮</el-button>
      </el-row>

      <el-row>
        <el-button icon="el-icon-search" circle></el-button>
        <el-button type="primary" icon="el-icon-edit" circle></el-button>
        <el-button type="success" icon="el-icon-check" circle></el-button>
        <el-button type="info" icon="el-icon-message" circle></el-button>
        <el-button type="warning" icon="el-icon-star-off" circle></el-button>
        <el-button type="danger" icon="el-icon-delete" circle></el-button>
      </el-row>
      <div class="content">
        <el-scrollbar style="height: 100%;overflow-x: hidden;">
          <el-row>
            <el-col :span="6" v-for="(o, index) in 12" :key="o" offset="2">
              <el-card :body-style="{ padding: '0px' }"style="margin: 10px;">
                <img src="../assets/001.png" width="200">
                <div style="padding: 14px;">
                  <span>好吃的汉堡</span>
                  <div class="bottom clearfix">
                    <time class="time">2020-11-20</time>
                    <el-button type="text" class="button">操作按钮</el-button>
                  </div>
                </div>
              </el-card>
            </el-col>
          </el-row>
        </el-scrollbar>
      </div>
    </div>
    <bot/>
  </div>
</template>

<script>
  import top from "../components/top"
  import bot from "../components/bottom"
  export default {
    components:{
      top,
      bot
    }
  }
</script>

<style scoped lang="scss">
 
  .box{
    width: 100%;
    height: 900px;
    text-align: center;
    background-color: red;
    .ziti{
      font-size: 120px;
      color: purple;
      font-style: italic;
    }
    .sugar{
      font-size: 200px;
    }
    .content{
      width: 70%;
      height: 500px;
      margin: auto;
      background-color: black;
    }
     .time {
        font-size: 13px;
        color: #999;
      }

      .bottom {
        margin-top: 13px;
        line-height: 12px;
      }

      .button {
        padding: 0;
        float: right;
      }

      .image {
        width: 100%;
        display: block;
      }

      .clearfix:before,
      .clearfix:after {
          display: table;
          content: "";
      }

      .clearfix:after {
          clear: both
      }
  }
</style>
