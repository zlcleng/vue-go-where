<template>
  <div class="home">
    <home-header></home-header>
    <home-swiper></home-swiper>
  </div>
</template>

<script>
import HomeHeader from './component/homeHeader'
import homeSwiper from './component/homeSwiper'
export default {
  name: 'home',
  components: {
    HomeHeader,
    homeSwiper
  }
}
</script>