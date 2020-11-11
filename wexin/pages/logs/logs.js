
const app = getApp()
Page({
  data: {
    logs: [],
    item: {
      index: 0,
      msg: '这是一个模板',
      time: '2016-09-15'
    },
  
    longitude:0,
    latitude:0,
    markers:[
      {
        width:50,
        height:50,
        id:1,
        latitude:0,
        longitude:0,
        iconPath:"../../images/index.png"
      }
    ]
  },
  savaImg(){
    wx.downloadFile({
      url: 'https://example.com/audio/123', //仅为示例，并非真实的资源
      success (res) {
        // 只要服务器有响应数据，就会把响应内容写入文件并进入 success 回调，业务需要自行判断是否下载到了想要的内容
        // if (res.statusCode === 200) {
        //   wx.playVoice({
        //     filePath: res.tempFilePath
        //   })
        // }
      }
    })
  },
  chooseImg(){
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success (res) {
        console.log(res);
        // tempFilePath可以作为img标签的src属性显示图片
        // const tempFilePaths = res.tempFilePaths
      }
    })
  },
  onLoad(options) {
    wx.setTabBarBadge({
      index: 1,
      text: '1123'
    })
    wx.setTabBarItem({
      index: 1,
      text: 'logs'
    })
    
    // 支付
    /*
    wx.request({
      url: '支付的接口',
      method:'GET',
      data:{
        openId:app.globalData.openId
      },
      success:res=>{
        wx.requestPayment({
          nonceStr: res.nonceStr,
          package: res.package,
          paySign: res.paySign,
          timeStamp: res.timeStamp,
          success(res){
            console.log("success")
          },
          fail(res){}
        })
      }
    })
  */
    // 收获地址
    wx.chooseAddress({
      success:(res)=>{
        console.log(res);
      }
    })

    console.log(options)
    wx.getStorage({
      key: 'name',
      success(res){
        console.log(res.data);
      }
    })
    // let self = this;
  //  wx.getLocation({
  //    success(res){
  //      console.log(res);
  //      self.setData({
  //       longitude:res.longitude,
  //       latitude:res.latitude,
  //       "markers[0].longitude":res.longitude,
  //       "markers[0].latitude":res.latitude,
  //      })
  //    }
  //  })
  },
  onReady(){
    // this.audioCtx = wx.createAudioContext('myAudio')
    // var context = wx.createCanvasContext('canvas');
    // context.setStrokeStyle("#f00");
    // context.setLineWidth(2);
    // context.moveTo(160,100);
    // context.arc(100,100,60,0,2*Math.PI,true);//脸
    // context.moveTo(140,100)
    // context.arc(100,100,40,0,Math.PI,false);//嘴
    // context.moveTo(85,80);
    // context.arc(80,80,5,0,2*Math.PI,true);//左眼睛
    // context.moveTo(125,80);
    // context.arc(120,80,5,0,2*Math.PI,true);//右眼睛
    // context.stroke();
    // context.draw();
  }
})
