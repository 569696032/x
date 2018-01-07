import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import Page1 from '@/components/Page1'
import Page2 from '@/components/Page2'
import Page3 from '@/components/Page3'
import Page4 from '@/components/Page4'
import Page5 from '@/components/Page5'
import Page6 from '@/components/Page6'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
        path:'/Page1',
        component:Page1
    },
    {
        path:'/Page2',
        component:Page2
    },
    {
        path:'/Page3',
        component:Page3
    },
    {
        path:'/Page4',
        component:Page4
    },
    {
        path:'/Page5',
        component:Page5
    },
    {
        path:'/Page6',
        component:Page6
    }
  ]
})
