let http = require("http");
let db = require("./db.js");
const server = http.createServer(function(req,res){
	res.setHeader("Content-Type","text/html; charset=UTF-8");
	if(req.url=="/data"){
		db.query("select * from user",[],function(result){
			res.end(JSON.stringify(result))
		})
	}else{
		res.end("暂无数据")
	}
	
})
server.listen(3000);
console.log("服务已启动");