let http = require("http");
let fs = require("fs");
let url = require("url");
let server = http.createServer(function(req,res){
	res.setHeader("Content-Type","text/html; charset=UTF-8");
	res.setHeader("access-control-allow-origin","*");//解决跨域
	if(req.url=="/favicon.ico"){
		return;
	}
	if(req.url=="/aa"){
		fs.readFile("./test.txt",function(err,data){
			if(err){
				console.log("文件错误~");
				return;
			}
			res.end(data)
		})
	}else if(req.url == "/bb"){
		fs.readFile("./data.json",function(err,data){
			if(err){
				console.log("文件错误~");
				return;
			}
			res.end(data)
		})
	}else{
		res.end("我是谁？我在哪？")
	}
})
server.listen(3000);
console.log("服务已启动~");
