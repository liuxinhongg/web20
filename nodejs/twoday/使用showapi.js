'use strict';

var showapiSdk = require('showapi-sdk');
var http = require("http");
var datalist = {}
var server = http.createServer(function(req,res){
	res.setHeader("Content-Type","text/html; charset=UTF-8");
	res.end(JSON.stringify(datalist))
})
server.listen(3000);
console.log("服务已启动~");
getshouwapi();
function getshouwapi(){
	//设置你测试用的appId和secret,img
	var appId='46452';
	var secret='c3bc2247155b4219bffb60cac4fd315c';
	//开启debug
	//showapiSdk.debug(true);
	if(!(appId&&secret)){
	  console.error('请先设置appId等测试参数,详见样例代码内注释!')
	  return;
	}
	//全局默认设置
	showapiSdk.setting({
	  url:"http://route.showapi.com/1211-1",//你要调用的API对应接入点的地址,注意需要先订购了相关套餐才能调
	  appId:appId,//你的应用id
	  secret:secret,//你的密钥
	  timeout:5000,//http超时设置
	  options:{//默认请求参数,极少用到
	    testParam:'test'
	  }
	})
	
	var request=showapiSdk.request();
	request.appendText('count','10');
	request.post(function(data){
	  // console.info(data)
	  datalist=data;
	})
}
