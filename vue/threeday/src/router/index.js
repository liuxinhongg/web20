import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import home from '@/components/home'
import work from '@/components/work'
import userlogin from '@/components/login'
import page from '@/views/page'
import login from '@/views/login'
import data from '@/views/data'
import fenye from '@/views/fenye'
import count from '@/views/count'
const User = {
  template:`<div><h1>我是父组件</h1><router-view/></div>`
}
const oneSon = {
  template:`<div><h2><font color="red">我是User的第一个儿子</font></h2></div>`
}
const twoSon = {
  template:`<div><h2><font color="yellowgreen">我是User的第二个儿子</font></h2></div>`
}
const NotFount = {
  template:`<div> <h1> <i>404,您访问的页面不存在</i> </h1>  </div>`
}
Vue.use(Router)
let router = new Router({
    mode: "history",
    linkExactActiveClass: "nav",
    routes: [{
            path: '/',
            redirect:'/data'
        }, {
            path: '/home',
            name: 'home',
            component: home
        },
        {
          path:"/fenye",
          name:"fenye",
          component:fenye
        },
        {
          path:"/ulog",
          name:"ulog",
          component:userlogin
        },
        {
          path:"/count",
          name:"count",
          component:count
        },
        {
          path:"/page",
          name:"page",
          component:page
        },
        {
          path:"/data",
          name:"data",
          component:data
        },
        {
          path:"/login",
          name:"login",
          component:login
        },
        {
            path: '/work/:id',
            name: 'work',
            component: work
        },
        /* {
          path:'/user/:id',
          name:"user",
          component:User,
          children:[
            {
              path:"oneson",
              name:"oneson",
              component:oneSon
            },
            {
              path:"twoson",
              name:"twoson",
              component:twoSon
            }
          ]
        } */
        {
          path:'/user/:id',
          name:"user",
          component:User,
          children:[
            {
              path:"oneson",
              name:"oneson",
              component:oneSon,
            },
            {
              path:"twoson",
              name:"twoson",
              component:twoSon
            }
          ]
        },
        {
          path:"*",
          // component:NotFount
          redirect:(to)=>{
            console.log(to);
            if(to.path==="/aaa"){
              return '/home'
            }else if(to.path==="/bbb"){
              return "/work/111"
            }else {
              return '/'
            }
          }
        }
    ]
})
router.beforeEach((to,from,next)=>{
  console.log(to)
  if(to.path==='/ulog'){
    next()
  }else{
    let token = localStorage.getItem('userToken');
    if(token==null||token==""){
      next("/ulog")
    }else{
      next()
    }
  }
})
export default router
