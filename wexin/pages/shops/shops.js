Page({

  /**
   * 页面的初始数据
   */
  data: {
    news:"今天周一",
    date:"2020-11-09",
    isNUm:12,
    datalist:["周一","周二","周三","周四"],
    arr:[
      { title:"周一" },
      { title:"周2" },
      { title:"周3" },
      { title:"周4" },
      { title:"周5" }
    ],
    num:6,
    isSeen:false,
    item: {
      index: 0,
      msg: '这是一个模板',
      time: '2016-09-15'
    },
    x:0,
    y:0,
    imglist:["../../images/tu.jpg","../../images/tu1.jpg","../../images/tu2.jpg"],
    htmlSnip:`<div><h1 style="color:red"> <i color="red">hello world</i> </h1></div>`
  },
  tap(){
    // this.data.x = 30;
    // this.data.y = 30
    // console.log(this.data.x);
    // console.log(this.data.y);
    this.setData({
      x:30,
      y:30
    })
  },
  blur(e){
    console.log(e.detail.value)
  },
  wancheng(){
    console.log("ending")
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})