

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
  onLoad() {
    let self = this;
   wx.getLocation({
     success(res){
       console.log(res);
       self.setData({
        longitude:res.longitude,
        latitude:res.latitude,
        "markers[0].longitude":res.longitude,
        "markers[0].latitude":res.latitude,
       })
     }
   })
  },
  onReady(){
    // this.audioCtx = wx.createAudioContext('myAudio')
    var context = wx.createCanvasContext('canvas');
    context.setStrokeStyle("#f00");
    context.setLineWidth(2);
    context.moveTo(160,100);
    context.arc(100,100,60,0,2*Math.PI,true);//脸
    context.moveTo(140,100)
    context.arc(100,100,40,0,Math.PI,false);//嘴
    context.moveTo(85,80);
    context.arc(80,80,5,0,2*Math.PI,true);//左眼睛
    context.moveTo(125,80);
    context.arc(120,80,5,0,2*Math.PI,true);//右眼睛
    context.stroke();
    context.draw();
  }
})
