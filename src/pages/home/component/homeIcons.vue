<template>
  <div class="icons-container">
    <swiper class="swiper-container" :option="swiperOption">
      <!-- slides -->
      <swiper-slide class="swiper-item" v-for="(swiperData,index) of swiperPage" :key="index">
        <div class="icon-container" v-for='icon of swiperData' :key='icon.id'>
          <img :src="icon.imgUrl" alt="">
          <p>{{icon.title}}</p>
        </div>  
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name:'homeIcons',
  data() {
    return {
      swiperOption:{
        // 参数选项,显示小点
        pagination:'.swiper-pagination',
        //循环
        loop:true,
        //每张播放时长3秒，自动播放
        autoplay:2000,
        //滑动速度
        speed:1000,
        // delay:1000
      },
      iconsList: [
        {
          id: '001',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
          title: '景点门票'
        },
        {
          id: '002',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/50/26ffa31b56646402.png',
          title: '亲子游'
        },
        {
          id: '003',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png',
          title: '厦门必游'
        },
        {
          id: '004',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png',
          title: '一日游'
        },
        {
          id: '005',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/47/c2b659e048b11602.png',
          title: '主题公园'
        },{
          id: '006',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/50/26ffa31b56646402.png',
          title: '亲子游'
        },
        {
          id: '007',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png',
          title: '厦门必游'
        },
        {
          id: '008',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png',
          title: '厦门必游'
        },
        {
          id: '009',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png',
          title: '一日游'
        },
        {
          id: '010',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/47/c2b659e048b11602.png',
          title: '主题公园'
        },
      ],
    }
  },
  mounted(){
    this.getIcons()
  },
  methods: {
    getIcons ()  {
      axios.get('/api/icons.json').then(res => {
        console.log(res)
      })
    }
  },
  computed: {
    swiperPage () {
      let swiperPageList = []
      this.iconsList.forEach((icon,index) => {
        let page = Math.floor(index / 8)
        if (!swiperPageList[page]) {
          swiperPageList[page] =[]
        }
        swiperPageList[page].push(icon)
      });
      return swiperPageList
    }
  }
}
</script>

<style lang="less" scoped>
  .icons-container {
    overflow: hidden;
    height: 280px;
    width: 100%;
    background: #fff;
    .swiper-container {
      height: 100%;
    }
    .icon-container {
      height: 50%;
      width: 25%;
      float:left;
      text-align: center;
      padding-top: 10px;
      box-sizing: border-box;
      img {
        width: 88px;
        height: 88px;
      }
      p {
        font-size: 28px;
      }
    }
  }
</style>
