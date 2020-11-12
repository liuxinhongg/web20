const configApi = 'https://www.wumeili.top';
// let $ = {
//   ajax: function (options) {
    
//   }
// }
let ajax = {
  get(url,data,success){
    wx.request({
      url: configApi+url,
      data,
      success
    })
  },
  promget(url,data,success){
    return new Promise((resolve,reject)=>{
      wx.request({
        url: configApi+url,
        data,
        success:resolve,
        fail:reject
      })
    })
  }
}
module.exports=ajax;
