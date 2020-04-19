import Vue from 'vue'
import Router from 'vue-router'

import Cart from '../pages/Cart.vue'
import Address from '../pages/Address.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/cart'
    },
    {
      path: '/cart',
      name: 'cart',
      component: Cart
    },
    {
      path: '/address',
      name: 'address',
      component: Address
    }
  ]
})
