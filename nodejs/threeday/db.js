var mysql = require("mysql");
var pool  = mysql.createPool({
	host:"localhost",
	user:"root",
	password:"root",
	port:"3306",
	database:"web20"
})
exports.query=function(sql,arr,callback){
	// 建立连接
	pool.getConnection(function(err,connection){
		if(err){
			throw err;
			return
		}
		connection.query(sql,arr,function(error,result){
			connection.release();
			if(error) throw error;
			callback && callback(result)
		})
	})
}