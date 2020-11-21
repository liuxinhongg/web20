import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import home from '@/components/home'
import work from '@/components/work'
import page from '@/views/page'
import login from '@/views/login'
import data from '@/views/data'
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
export default router
