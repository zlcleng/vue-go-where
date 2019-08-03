<template>
  <div class="recommend">
    <div class="recommend-title">
      <i class="iconfont iconhuo"></i>
      <span>本周热门榜单</span>
      <a href="javascript:void(0);">全部榜单<i class="iconfont iconyou"></i></a>
    </div>
    <div class="recommendlist-container">
        <div class="item-contain" v-for="item of recommendList" :key="item.id">
          <img class="item-tag" src="http://img1.qunarzz.com/piao/fusion/1710/ab/159673b63e6ca702.png" />
          <img class="item-img" :src="item.imgUrl">
          <div class="item-info">
            <p class="item-title">{{item.title}}</p>
            <p class="item-price"><em>￥{{item.price}}</em>起</p>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'guestLike',
  data () {
    return {
      recommendList: [
        {
          id: '123',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1506/f6/f6b727f036fe5d6d.water.jpg_250x250_d22ecf6b.jpg',
          title: '鼓浪屿',
          price: '40'
        },
        {
          id: '124',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1506/f6/f6b727f036fe5d6d.water.jpg_250x250_d22ecf6b.jpg',
          title: '鼓浪屿',
          price: '40'
        },
        {
          id: '125',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1506/f6/f6b727f036fe5d6d.water.jpg_250x250_d22ecf6b.jpg',
          title: '鼓浪屿',
          price: '40'
        },
        {
          id: '126',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1506/f6/f6b727f036fe5d6d.water.jpg_250x250_d22ecf6b.jpg',
          title: '鼓浪屿',
          price: '40'
        }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
  .recommend {
    vertical-align: middle;
    padding: 10px 0;
    background: #fff;
    margin-top: 20px;
    .recommend-title {
      padding: 12px 30px 24px;
      >i{
        color:#ff8366;
      }
      span{
        font-size: 32px;
      }
      a{
        color: #999;
        float: right;
      }
    }
    .recommendlist-container{
      overflow-y: scroll;
      padding: 20px 30px;
      display: flex;
        .item-contain {
          width: 200px;
          padding-right: 20px;
          position: relative;
          .item-tag {
            position: absolute;
            width: 84px;
            top: -10px;
          }
          .item-img {
            width: 200px;
            height: 200px;
          }
          .item-info {
            text-align: center;
            line-height: 36px;
            .item-price {
              em{
                color: #ff8366;
              }
            }
          }
        }
    }
  }
</style>
