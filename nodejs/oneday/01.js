let http = require("http");
// console.log(11);
// console.log(http);
let server = http.createServer(function(req,res){
	// console.log(res);
	res.setHeader("Content-Type","text/html; charset=UTF-8")
	res.end("我是nodejs")
})
server.listen(3000);
console.log("服务已启动~");