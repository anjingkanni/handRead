import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Classify from '@/components/Classify'
import Shoppingcart from '@/components/Shoppingcart'
import Personal from '@/components/Personal'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/classify',
      name: 'classify',
      component: Classify
    },
    {
      path: '/shoppingcart',
      name: 'shoppingcart',
      component: Shoppingcart
    },
    {
      path: '/personal',
      name: 'personal',
      component: Personal
    }
  ]
})
