<template>
  <div class="home">
    <home-header></home-header>
    <home-swiper></home-swiper>
    <home-icons></home-icons>
  </div>
</template>

<script>
import HomeHeader from './component/homeHeader'
import homeSwiper from './component/homeSwiper'
import homeIcons from './component/homeIcons'

export default {
  name: 'home',
  components: {
    HomeHeader,
    homeSwiper,
    homeIcons
  }
}
</script>