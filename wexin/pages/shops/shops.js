const aa = require("../../utils/config");
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
    htmlSnip:`<div><h1 style="color:red"> <i color="red">hello world</i> </h1></div>`,
    bannerlist:[],
    goodsSort:[],
    datalist:[],
    step:0,
    info:"",
    page:1
  },
  change(e){
    // console.log(e);
    this.setData({
      step:e.currentTarget.dataset.id,
      info:e.currentTarget.dataset.name,
    })
    wx.navigateTo({
      url: '../page/page?name='+this.data.info+'&id='+this.data.step,
    })
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
    // console.log(e.detail.value)
  },
  wancheng(){
    // console.log("ending")
  },


  jump(){
    wx.navigateTo({
      url: '../page/page?name=张三',
    })
  },
  jumplog(){
    wx.switchTab({
      url: '../logs/logs',
    })
    wx.setStorage({
      data: "马海龙",
      key: 'name',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showToast({
      title: '加载中...',
      icon: 'loading',
      duration: 5000
    })
    let self = this;
    aa.get("/w/website/bannerList",{},res=>{
      this.setData({
        bannerlist:res.data.data
      })
    })
    // wx.request({
    //   url: 'https://www.wumeili.top/w/website/bannerList',
    //   method:"GET",
    //   success:(res)=>{
    //     // console.log(res);
    //     this.setData({
    //       bannerlist:res.data.data
    //     })
    //   }
    // })
    aa.promget("/w/website/findGoodsTypeList",{}).then(res=>{
      this.setData({
        goodsSort:res.data.data
      })
    })
    /*
    wx.request({
      url: 'https://www.wumeili.top/w/website/findGoodsTypeList',
      method:'GET',
      success:res=>{
        // console.log(res);
        this.setData({
          goodsSort:res.data.data
        })
      }
    })*/
    this.shuju(this.data.page);
  },
  shuju(val){
   
    wx.request({
      url: 'https://www.wumeili.top/w/website/findGoodsList',
      method:'GET',
      data:{
        info:"特价",	
        pageNo: val
      },
      success:res=>{
        // console.log(res);
        wx.hideToast();
        this.setData({
          datalist:res.data.data.tbk_dg_material_optional_response.result_list.map_data
        })
      }
    })
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
  onPullDownRefresh () {
  },
  
  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    this.data.page++;
    this.shuju(this.data.page)
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})