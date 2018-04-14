import Vue from 'vue'
import Router from 'vue-router'
import Ready from '@/pages/Ready'
import Shaking from '@/pages/Shaking'
import Prize from '@/pages/Prize'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ready',
      component: Ready
    }, {
      path: '/shaking',
      name: 'shaking',
      component: Shaking
    }, {
      path: '/prize',
      name: 'prize',
      component: Prize
    }
  ]
})
