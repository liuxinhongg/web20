let mysql = require("mysql");
// console.log(mysql);
var connection = mysql.createConnection({
	host:"localhost",
	user:"root",
	password:"root",
	port:"3306",
	database:"web20"
})
connection.connect();
// 新增数据
/* var addsql="insert into user(username,password,email,phone) values (?,?,?,?)";
var addSqlParams=["李子辰","123456","2222@qq.com","1212121"]
connection.query(addsql,addSqlParams,function(err,result){
	if(err){
		console.log(err.message);
		return
	}
	console.log(result)
}) */
//删除
/* var delsql = "delete from user where username='zhangsan'";
connection.query(delsql,function(err,result){
	if(err){
		console.log(err.message);
		return
	}
	console.log(result);
}) */
//修改
/* var updateSql="update user set username = ? where id=?";
var upsqlParams=["王新杰",2];
connection.query(updateSql,upsqlParams,function(err,result){
	if(err){
		console.log(err.message);
		return
	}
	console.log(result)
}) */
// 查询
// 查询全部
/* var searchSql = "select * from user";
connection.query(searchSql,function(err,result){
	if(err){
		console.log(err.message);
		return
	}
	console.log(result)
}) */
// 按条件查询
var searchSql="select username,email,phone from user where id=?";
var searchParams = [3];
connection.query(searchSql,searchParams,function(err,result){
	if(err){
		console.log(err.message);
		return
	}
	console.log(result)
})
connection.end()