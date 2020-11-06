let db=require("./db.js");
db.query("select * from user",[],function(result){
	console.log(result)
})