import Vue from 'vue'
import Router from 'vue-router'
import MainContainer from '@/components/MainContainer'
import Classify from '@/components/Classify'
import Shoppingcart from '@/components/Shoppingcart'
import Personal from '@/components/Personal'

Vue.use(Router)

export default new Router({
	mode: 'history',
  routes: [
    {
      path: '/',
      name: 'mainContainer',
      component: MainContainer
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
