import Vue from 'vue'
import Router from 'vue-router'
import households from './views/Households.vue'
import Login from './views/Login.vue'

// import Boards from './views/Boards.vue'
// import Board from './views/Board.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'households',
      component: households
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
  ]
})
