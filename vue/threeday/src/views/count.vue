<template>
  <div>
    <div class="box">
       <el-button type="success" @click="add(3)">加</el-button>
       <span>{{num}}</span>
       <el-button type="danger" @click="jian(2)">减</el-button>
       <!-- {{num2}} -->
       <h1>{{name}}</h1>
       <h1>{{age}}</h1>
       <h1>{{count}}</h1>
    </div>
  </div>
</template>

<script>
  import { mapState,mapGetters,mapMutations,mapActions} from 'vuex'
  export default {
    // data(){
    //   return {
    //     num:this.$store.state.num
    //   }
    // },
    // computed:用来监听自己定义的变量,该变量不在data里面定义声明,里面的变量是一个方法
    computed:{
      ...mapState({
        num(){
          return this.$store.state.num
        },
        name(){
          return this.$store.state.name
        },
        age(){
          return this.$store.state.age
        },
      }),
      ...mapGetters({
        count:'count'
      })
      /* num(){
        return this.$store.state.num
      },
      num2(){
        return this.$store.getters.count;
      } */
    },
    methods:{
      ...mapActions({
        aa:'AddAction'
      }),
      ...mapMutations({
        reduce:'mincrement'
      }),
      add(num){
        this.aa()
        // this.num +=5;
        // this.$store.commit提交vuex里面的store的mutations的方法
        /* this.$store.commit('increment',{
          n:num,
          name:'张三'
        }); */
       /* this.$store.commit({
          type:'increment',
          n:num,
          name:'张三'
        }); */
        // this.$store.dispatch提交的是actions里面的方法
       /* this.$store.dispatch("AddAction") */
      },
      jian(num){
        this.reduce()
        // this.num -=5;
        /* this.$store.commit('mincrement',{
          n:num,
          name:'lisi'
          }); */
      }
    }
  }
</script>

<style lang="scss">
  .box{
    width: 300px;
    margin: 100px auto;
  }
</style>
