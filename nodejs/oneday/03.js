let http = require("http");
let server = http.createServer(function(req,res){
	res.setHeader("Content-Type","text/html; charset=UTF-8");
	var random = parseInt(Math.random()*10000); 
	var ips = req.connection.remoteAddress;
	// console.log(ips);
	if(random == 6666){
		console.log("恭喜你，中奖了",ips);
		throw new Error("错误");
	}
	res.end(random.toString()+"ip地址"+ips);
})
server.listen(3000);
console.log("服务已启动~")