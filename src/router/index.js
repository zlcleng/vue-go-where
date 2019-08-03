import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/home/home'
import demo from '../pages/demo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/demo',
      name: 'demo',
      component: demo
    }
  ]
})
