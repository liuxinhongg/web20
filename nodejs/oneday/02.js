let http = require("http");
var a = 0;
let server = http.createServer(function(req,res){
	res.setHeader("Content-Type","text/html; charset=UTF-8");
	a++;
	res.end(a.toString());
})
server.listen(3000);
console.log("服务已启动")