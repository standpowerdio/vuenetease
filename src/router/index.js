import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import NF from '../views/404.vue'
import hot from '../views/hot.vue'
import search from '../views/search.vue'
import detail from '../views/detail.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect:'/home'
  },
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/hot',
    name: 'hot',
    component: hot
  },
  {
    path: '/search',
    name: 'search',
    component: search
  },
  {
    path: '/detail',
    name: 'detail',
    component: detail
  },
  {
    path: '*',
    name:'404',
    component: NF
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
