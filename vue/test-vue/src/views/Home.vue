<template>
  <div class="home">
    <div class="box">
      <div class="leftBox">
        <el-menu default-active="2" class="el-menu-vertical-demo"
          background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>导航一</span>
            </template>
            <el-menu-item-group>
              <router-link to="/home/plan" tag="p"><el-menu-item index="1-1">物资总计划</el-menu-item></router-link>
              <el-menu-item index="1-2">选项2</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </div>
      <div class="rightBox">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
  export default {}
</script>
<style lang="scss">
  .box {
    width: 100%;
    display: flex;
    justify-content: flex-start;

    .leftBox {
      width: 300px;
      height: 100vh;
      background-color: #999;
      // height: calc(100vh - 50px);
    }

    .rightBox {
      flex: 1;
      height: 100vh;
      background-color: yellowgreen;
    }
  }
</style>
