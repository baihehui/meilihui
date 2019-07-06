import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/Index'
import Crossborder from '@/views/Crossborder'
import Women from '@/views/Women'
import Men from '@/views/Men'
import Cosmetics from '@/views/Cosmetics'
import Lifestyle from '@/views/Lifestyle'
import Kids from '@/views/Kids'
import denglu from '@/views/denglu/denglu'
import gouwuche from '@/views/gouwuche/gouwuche'
import liebiao from '@/views/liebiao/liebiaoye'
import pinpai from '@/views/pinpai/pinpai'
import sousuo from '@/views/sousuo/sousuo'
import xiangqingye from '@/views/xiangqingye/xiangqingye'
import xinpin from '@/views/xinpin/xinpin'
import brand from '@/views/brand/brand'
import brandlist from '@/views/brand/brandlist/brandlist'
import Upcoming from '@/views/Upcoming'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/index',
      component: Index,
      children: [
        {
          path: '/crossborder',
          component: Crossborder
        },
        {
          path: '/women',
          component: Women
        },
        {
          path: '/men',
          component: Men
        },
        {
          path: '/cosmetics',
          component: Cosmetics
        },
        {
          path: '/lifestyle',
          component: Lifestyle
        },
        {
          path: '/kids',
          component: Kids
        },
        {
          path: '/upcoming',
          component: Upcoming
        }

      ]

    },
    {
      path: '/gouwuche',
      component: gouwuche
    },
    {
      path: '/liebiao',
      component: liebiao
    },
    {
      path: '/pinpai',
      component: pinpai
    },
    {
      path: '/sousuo',
      component: sousuo
    },
    {
      path: '/xiangqingye',
      component: xiangqingye
    },
    {
      path: '/xinpin',
      component: xinpin
    },
    {
      path: '/denglu',
      component: denglu
    },
    {
      path: '/brand',
      component: brand,
      children: [
        {
          path: '/brandlist',
          component: brandlist
        }]
    }

  ]
})
