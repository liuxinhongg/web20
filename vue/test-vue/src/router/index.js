import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import register from '../components/register.vue'
import login from '../components/login.vue'
import page from '../views/page.vue'
import totalPlan from '../views/totalPlan.vue'
import store from "../store/index.js"
import Cookie from "js-cookie"
Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home,
    children:[
      {
        path:'plan',
        name:'plan',
        component:totalPlan
      }
    ]
  },
  {
    path: '/zhuce',
    name: 'register',
    component: register
  },
  {
    path: '/page',
    name: 'page',
    component: page,
    meta:{
      requireAuth:true//true表示为页面添加登录权限
    }
  },
  {
    path: '/login',
    name: 'login',
    component: login
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
router.beforeEach((to,from,next)=>{
  store.commit("setToken",Cookie.get("token"));
  if(store.state.token){
    store.commit("changIsSignIn",1)
  }
  if(to.meta.requireAuth){
    if(store.state.token){
      next()
    }else{
      next({path:'/login'})
    }
  }else{
    next()
  }
})
export default router
