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
      <el-table-column type="index" label="序号" width="180"></el-table-column>
      <el-table-column prop="icon" label="头像" width="180">
        <template slot-scope="scope">
          <div>
            <img :src="scope.row.icon" width="80"/>
          </div>
        </template>
      </el-table-column>
      <el-table-column prop="name" label="姓名" width="180"></el-table-column>
      <el-table-column prop="createDate" label="日期">
        <template slot-scope="scope">
          <div>
            <h3 class="text"> {{scope.row.createDate}}</h3>
          </div>
        </template>
      </el-table-column>
      <el-table-column prop="sort" label="分类" width="180"></el-table-column>
      <el-table-column label="操作" width="180">
        <template slot-scope="scope">
          <div>
            <el-button type="success" @click="goodsSort(scope.row.name)">分类</el-button>
          </div>
        </template>
      </el-table-column>
    </el-table>
     <div class="block">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page.sync="currentPage"
          :page-size="pagesize"
          layout="total, prev, pager, next"
          :total="totalNum">
        </el-pagination>
      </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        bannerList:[],
        imgurl: require('../../static/001.png'),
        tableData: [],
        currentPage:1,
        pagesize:20,
        totalNum:0
      }
    },
    mounted() {
      // ?showapi_appid=46452&page=1&maxResult=20&showapi_sign=c3bc2247155b4219bffb60cac4fd315c
     this.getdata();
    },
    methods:{
      goodsSort(val){
        console.log(val);
        this.$router.push({
          name:'fenye',
          params:{
            name:val
          }
        })
      },
      getdata(){
        this.$http.get("/api/w/website/findGoodsTypeList").then(res=>{
          console.log(res);
          this.tableData = res.data.data
          // this.tableData = res.data.showapi_res_body.contentlist;
          // this.totalNum = res.data.showapi_res_body.allNum
        })
      },
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
        this.currentPage = val;
        if(this.currentPage){
          this.getdata()
        }
      }
    }
  }
</script>

<style>
  .text{
    color: red;
  }
</style>
