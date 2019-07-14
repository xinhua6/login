import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login'
import Home from '@/components/home'




Vue.use(Router)
// export default router
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login,
      meta:{
        isLogin: false
      }
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta:{
        isLogin: false
      }
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      meta:{
        isLogin: true
      }
    }
  ],
})




