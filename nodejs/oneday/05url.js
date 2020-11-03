let http = require("http");
let url = require("url");
// console.log(url)
let server = http.createServer(function(req,res){
	// console.log(req);
	if(req.url==="/favicon.ico"){
		return;
	}
	// 路径:host 端口号 path 参数
	var pathname = url.parse(req.url);
	console.log(pathname)
	console.log(url.parse(req.url,true).query);
	var canshu = url.parse(req.url,true).query;
	console.log(canshu.name)
	res.end("121");
})
server.listen(3000);
console.log("服务已启动~")