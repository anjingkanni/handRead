import Vue from 'vue'
import Router from 'vue-router'
import Classification from '@/components/Classification'

import Bootstrap  from 'bootstrap/dist/css/bootstrap.css'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/classification',
      name: 'classification',
      component: Classification,
      // children:[
      //   {
      //     path: '/details',
      //     name: 'details',
      //     component: Details,
      //   }
      // ]
    }

  ]
})
