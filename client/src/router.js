import Vue from 'vue'
import Router from 'vue-router'
import households from './views/Households.vue'
import Login from './views/Login.vue'
import household from './views/Household.vue'
import store from './store'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'households',
      component: households,
      beforeEnter(to, from, next) {
        // @ts-ignore
        if (store.state.user._id) {
          return next()
        }
        next('/login')
      }
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/household/:householdId',
      name: 'household',
      props: true,
      component: household
    },

  ]
})
