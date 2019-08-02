<template>
  <div class="wrapper">
    <swiper :options="swiperOption" class="swiper-container" >
      <!-- slides -->
      <swiper-slide class="swiper-item" v-for='item of swiperList' :key='item.id'>
          <img class='swiper-img' :src='item.imgUrl'/>
      </swiper-slide>
      <!-- Optional controls ,显示小点-->
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
    name:'HomeSwiper',
    data(){
        return{
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
            //三张轮播，使用变量循环
            swiperList:[
                {
                    id:'001',
                    imgUrl:require("../../../assets/images/banner1.jpg")
                },
                {
                    id:'002',
                    imgUrl:require("../../../assets/images/banner2.jpg")
                },
                {
                    id:'003',
                    imgUrl:require("../../../assets/images/banner3.jpg")
                }
            ]
        }
    },
      
}
</script>
<style scoped>
  .swiper-img{
    width: 100%;
  }
</style>
