<template>
  <div>
    <div v-if="sortList!=''">
      <el-table :data="sortList" border style="width: 80%;margin:30px auto">
        <el-table-column type="index" label="序号" width="180"></el-table-column>
        <el-table-column prop="pict_url" label="图片">
          <template slot-scope="scope">
            <div>
              <img :src="scope.row.pict_url" style="width: 50px;height: 50px;border-radius: 50%;" />
            </div>
          </template>
        </el-table-column>
        <el-table-column prop="category_name" label="分类名称" width="180">
        </el-table-column>
        <el-table-column prop="nick" label="昵称">
        </el-table-column>
        <el-table-column prop="coupon_info" label="优惠卷">
          <template slot-scope="scope">
            <div>
              <h3>
                <font color="red">{{scope.row.coupon_info ? scope.row.coupon_info :"暂无优惠卷"}}</font>
              </h3>
            </div>
          </template>
        </el-table-column>
        <el-table-column prop="provcity" label="地区">
        </el-table-column>
        <el-table-column prop="reserve_price" label="价格">
        </el-table-column>
        <el-table-column prop="reserve_price" label="操作">
          <template slot-scope="scope">
            <div>
              <a :href="scope.row.coupon_share_url">领取优惠卷</a>
              <a :href="scope.row.url">详情</a>
            </div>
          </template>
        </el-table-column>
      </el-table>
      <div class="block">
        <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page.sync="currentPage"
          :page-size="20" layout="total, prev, pager, next" :total="totleNum">
        </el-pagination>
      </div>
    </div>
    <div v-else>
      <h1>暂无数据</h1>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        currentPage: 1,
        totleNum: 0,
        canshu: '',
        sortList: []
      }
    },
    created() {

    },
    mounted() {
      console.log(this.$route.params.name);
      this.canshu = this.$route.params.name;

      if (this.canshu) {

        this.getdata(this.canshu, this.currentPage)
      }
    },
    methods: {
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
        this.currentPage = val
        this.getdata(this.canshu, this.currentPage)
      },
      getdata(val, page) {
        console.log(this.canshu)
        this.$http.get("/api/w/website/findGoodsList", {
          params: {
            info: val,
            pageNo: page || 1
          }

        }).then(res => {
          console.log(res);
          this.sortList = res.data.data.tbk_dg_material_optional_response.result_list.map_data;
          this.totleNum = res.data.data.tbk_dg_material_optional_response.total_results
        })
      }
    }
  }
</script>

<style>
</style>
