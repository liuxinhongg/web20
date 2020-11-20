const configApi = 'https://www.wumeili.top';
const APICONFLG  = 'https://baxian.soft-shop.cn'
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
  },
  post(url,cb) {
      wx.request({
        method:"POST",
           url:APICONFLG + url,
           header:{
             "Content-Type": "application/x-www-from-urlencoded"
           },
           success:cb
      })
    }
}
module.exports=ajax;
