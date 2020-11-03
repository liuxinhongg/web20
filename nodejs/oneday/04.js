let http = require("http");
let fs = require("fs");
// console.log(fs)
var server = http.createServer(function(req,res){
	res.setHeader("Content-Type","text/html; charset=UTF-8");
	res.setHeader("access-control-allow-origin","*");//解决跨域
	/* fs.readFile("./test.txt",function(err,data){
		if(err){
			console.log("文件读取失败");
			return;
		}
		res.end(data)
	}) */
	fs.readFile("./data.json",function(err,data){
		if(err){
			console.log("文件读取失败");
			return;
		}
		res.end(data)
	})
}) 
server.listen(3000);
console.log("服务已启动")