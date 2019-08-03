<template>
  <div class="guestLike">
    <div class="guestLike-title">
      <i class="iconfont iconzan1"></i>
      <span>猜你喜欢</span>
    </div>
    <div class="guestLikelist-container">
        <div class="item-contain" v-for="item of recommendList" :key="item.id">
          <div class="item-img-contain">
            <span class="item-tag">随买随用</span>
            <img class="item-img" :src="item.imgUrl">
          </div>
          <div class="item-info">
            <p class="item-title">{{item.title}}</p>
            <p><span>{{item.discussNum}}条评论</span></p>
            <p class="item-price">
              <span><em>￥{{item.price}}</em>起</span>
              <span>{{item.area}}</span>
            </p>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'recommend',
  data () {
    return {
      recommendList: [
        {
          id: '123',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1506/f6/f6b727f036fe5d6d.water.jpg_250x250_d22ecf6b.jpg',
          title: '鼓浪屿',
          price: '40',
          discussNum: '74829',
          area: '思明区'
        },
        {
          id: '124',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1506/f6/f6b727f036fe5d6d.water.jpg_250x250_d22ecf6b.jpg',
          title: '鼓浪屿',
          price: '40',
          discussNum: '74829',
          area: '思明区'
        },
        {
          id: '125',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1506/f6/f6b727f036fe5d6d.water.jpg_250x250_d22ecf6b.jpg',
          title: '鼓浪屿',
          price: '40',
          discussNum: '74829',
          area: '思明区'
        },
        {
          id: '126',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1506/f6/f6b727f036fe5d6d.water.jpg_250x250_d22ecf6b.jpg',
          title: '鼓浪屿',
          price: '40',
          discussNum: '74829',
          area: '思明区'
        }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
  .guestLike {
    vertical-align: middle;
    padding: 20px 0 10px;
    background: #fff;
    margin-top: 20px;
    .guestLike-title {
      padding: 0px 15px 0px;
      >i{
        color:#ff8366;
      }
      span{
        font-size: 32px;
      }
    }
    .guestLikelist-container{
      padding: 20px 10px;
      .item-contain {
        padding: 20px;
        display: flex;
        position: relative;
        .item-tag {
          position: absolute;
          background: #ffbb6e;
          color: #fff;
          border-bottom-right-radius: 20px;
          padding: 5px 10px 8px 5px;
        }
        .item-img {
          width: 200px;
          height: 200px;
        }
        .item-info {
          padding: 0 20px;
          line-height: 70px;
          font-size: 28px;
          width: 100%;
          .item-title{
            font-size: 34px;
          }
          .item-price {
            em{
              color: #ff8366;
              font-size: 40px;
            }
            span:last-child{
              float: right;
            }
          }
        }
      }
    }
  }
</style>
