import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/Home/Home.vue'
import Order from '../pages/Order/Order.vue'
import Person from '../pages/Person/Person.vue'
import Search from '../pages/Search/Search.vue' 
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:  '/home'   //重定向到首页
    },
    {
      path: '/home',
      component: Home,     //首页路由
    },
    {
      path: '/order',
      component: Order,     //订单路由
    },
    {
      path: '/search',
      component: Search,    //搜索路由
    },
    {
      path: '/person',
      component: Person,   //个人路由
    },
  ]
})
