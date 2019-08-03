<template>
  <div class="home">
    <home-header></home-header>
    <home-swiper></home-swiper>
    <home-icons></home-icons>
    <home-recommend></home-recommend>
    <home-guest-like></home-guest-like>
  </div>
</template>

<script>
import HomeHeader from './component/homeHeader'
import homeSwiper from './component/homeSwiper'
import homeIcons from './component/homeIcons'
import homeRecommend from './component/homeRecommend'
import homeGuestLike from './component/homeGuestLike'

export default {
  name: 'home',
  components: {
    HomeHeader,
    homeSwiper,
    homeIcons,
    homeRecommend,
    homeGuestLike
  }
}
</script>