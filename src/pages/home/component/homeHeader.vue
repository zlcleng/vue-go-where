<template>
  <div class="home-header">
    <div class="header-left"><i class="iconfont iconzuo_s"></i></div>
    <div class="header-search">
      <i class="iconfont iconss"></i>
      <input type="text" placeholder="请输入城市/景点/主题">
    </div>
    <div class="header-right">城市<i class="iconfont iconxiala1"></i></div>
  </div>
</template>

<script>
export default {
  name: 'homeHeader'
}
</script>

<style lang="less" scoped>
  .home-header {
    display: flex;
    height: 88px;
    line-height: 88px;
    color: #fff;
    text-align: center;
    background-color: #0ac4dd;
    .header-left {
      width: 80px;
      float: left;
    }
    .header-search{
      flex: 1;
      i {
        position: absolute;
        top: 0;
        left: 100px;
        color: #000;
        font-size: 32px;
      }
      input{
        height: 60px;
        width: 90%;
        border-radius: 4px;
        border: 1px;
        padding-left: 60px;
        outline: none;
      }
    }
    .header-right {
      width: 128px;
      float: right;
      font-size: 28px;
      i{
        font-size: 34px;
        vertical-align: middle;
      }
    }
  }
  
</style>
