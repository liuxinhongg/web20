<template>
  <div>
    <h1>表格</h1>
    <img :src="imgurl" alt="" width="50px"/>
    <el-carousel height="250px">
      <el-carousel-item v-for="(item,index) in bannerList" :key="index">
        <img :src="item.img" alt="" width="100%" height="100%">
      </el-carousel-item>
    </el-carousel>
    <el-table :data="tableData" style="width: 80%;margin: 20px auto;" border>
      <el-table-column type="index" label="日期" width="180"></el-table-column>
      <el-table-column prop="picture" label="头像" width="180">
        <template slot-scope="scope">
          <div>
            <img :src="scope.row.picture" width="80"/>
          </div>
        </template>
      </el-table-column>
      <el-table-column prop="name" label="姓名" width="180"></el-table-column>
      <el-table-column prop="date" label="日期">
        <template slot-scope="scope">
          <div>
            <h3 class="text"> {{scope.row.date}}</h3>
          </div>
        </template>
      </el-table-column>
      <el-table-column prop="address" label="地址"></el-table-column>
    </el-table>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        bannerList:[],
        imgurl: require('../../static/001.png'),
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          picture:require('../../static/002.png')
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄',
          picture:require('../../static/003.png')
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄',
          picture:require('../../static/004.png')
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄',
          picture:require('../../static/002.png')
        }]
      }
    },
    mounted() {
      this.$http.get("/api/w/website/bannerList").then(res=>{
        console.log(res)
        this.bannerList = res.data.data
      })
    },
  }
</script>

<style>
  .text{
    color: red;
  }
</style>
