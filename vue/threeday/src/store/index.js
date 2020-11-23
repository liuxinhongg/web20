import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const store = new Vuex.Store({
  state:{
    num:100,
    name:"张三",
    age:18,
    Authorization:localStorage.getItem('userToken') ? localStorage.getItem('userToken') :''
  },
  getters:{
    count:state=>{
      return state.num > 120 ? 120 : state.num
    }
  },
  mutations:{
    changLogin(state,user){
      state.Authorization=user.logintoken
    },
    increment(state,pload){
      // setTimeout(()=>{
        state.num +=pload.n
      // },1000)
    },
    mincrement(state,pload){
      // state.num -=pload.n
      state.num -=3
    }
  },
  actions:{
    AddAction(context){
      // console.log(context)
      setTimeout(()=>{
        context.commit('increment',{n:5})
      },1000)
      // context.dispatch('textAction')
    },
    textAction(){
      console.log("我是actions里面的函数")
    }
  }
})
export default store
