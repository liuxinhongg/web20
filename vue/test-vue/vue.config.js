module.exports = {
  devServer:{
    proxy:{
      '/api': {
          target: 'https://www.wumeili.top', //接口域名
          changeOrigin: true, //是否跨域
          secure:false,
          pathRewrite: { //需要rewrite
              '^/api': 'https://www.wumeili.top'
          }
      },
      '/nodeuser': {
          target: 'http://192.168.1.103:3030', //接口域名
          changeOrigin: true, //是否跨域
          secure:false,
          pathRewrite: { //需要rewrite
              '^/nodeuser': 'http://192.168.1.103:3030'
          }
      },
    }
  }
}
