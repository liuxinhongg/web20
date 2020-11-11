Component({
  data:{
    // imglist:[],
    // url:'',
    // bannerHeight:''
  },
  properties:{
    imglist:{
      type:Array,
      value:[],
      observers:{
        imglist:res=>{
          this.setData({
            imglist:res
          })
        }
      }
    },
    url:{
      type:String,
      value:''
    },
    bannerHeight:{
      type:String,
      value:""
    }
  }
})