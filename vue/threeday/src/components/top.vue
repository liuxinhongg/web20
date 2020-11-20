<template>
  <div>
    <div class="topbox">
      <img src="../assets/001.png" />
      <ul class="topUl">
      	<li>导航一</li>
      	<li>导航二</li>
      	<li>导航三</li>
      	<li>导航四</li>
      	<li>导航五</li>
      </ul>
    </div>
  </div>
</template>

<script>
</script>

<style lang="scss">
  $kuandu:80%;
  $color:yellowgreen;
  @mixin  many {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .topbox{
    width: $kuandu;
    height: 80px;
    @include many;
    margin: 30px auto;
    background-color: $color;
    img{
      width: 80px;
      height: 80px;
      border-radius: 50%;
    }
    .topUl{
      // display: flex;
      // justify-content: flex-start;
      // align-items: center;
      @include many;
      list-style: none;
      li{
        width: 100px;
        height: 60px;
        border-radius: 5px;
        margin-left: 20px;
        background-color: red;
        color: white;
        text-align: center;
        line-height: 60px;
        font-size: 15px;
        &:hover{
          background-color: green;
          cursor: no-drop;
        }
      }
    }
  }
/* .topbox{
  width: 80%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 30px auto;
  background-color: yellowgreen;
}
.topUl{
  display: flex;
  justify-content: flex-start;
  align-items: center;
  list-style: none;
}
.topUl li{
  width: 100px;
  height: 60px;
  border-radius: 5px;
  margin-left: 20px;
  background-color: red;
  color: white;
  text-align: center;
  line-height: 60px;
  font-size: 15px;
} */
</style>
