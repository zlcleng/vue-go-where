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
    height: 3.4rem;
    line-height: 3.4rem;
    color: #fff;
    text-align: center;
    background-color: #0ac4dd;
    .header-left {
      width: 3.4rem;
      float: left;
    }
    .header-search{
      flex: 1;
      i {
        position: absolute;
        top: 0;
        left: 4rem;
        color: #000;
        font-size: 1rem;
      }
      input{
        height: 2rem;
        width: 90%;
        border-radius: 0.3rem;
        border: 1px;
        padding-left: 2rem;
        outline: none;
      }
    }
    .header-right {
      width: 4rem;
      float: right;
      i{
        font-size: 1.8rem;
        vertical-align: middle;
      }
    }
  }
  
</style>
