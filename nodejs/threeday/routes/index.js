var express = require('express');
var router = express.Router();
var db = require("../db.js");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* router.get("/register",function(req,res,next){
	console.log(req.query)
	var user = req.query.username;
	var pass = req.query.password;
	var email = req.query.email;
	var phone = req.query.phone;
	db.query("insert into user (username,password,email,phone) values (?,?,?,?)",[user,pass,email,phone],function(result){
	  res.send({code:1,message:'注册成功~'})
	})
}) */
router.post("/register",function(req,res,next){
	// res.header("Access-Control-Allow-Origin", "*");
	console.log(req.body)
	var user = req.body.username;
	var pass = req.body.password;
	var email = req.body.email;
	var phone = req.body.phone;
	if(user==""||user==undefined){
		res.send({code:-1,message:"用户名不能为空"})
	}else{
		db.query("select * from user where username = ?",[user],function(result){
			if(result.length){
				res.send({message:"该用户已注册",code:1})
			}else{
				 db.query("insert into user (username,password,email,phone) values (?,?,?,?)",[user,pass,email,phone],function(result){
				  res.send({code:0,message:'注册成功~'})
				})
			}
		})
	}
}) 
router.post("/login",function(req,res,next){
	// res.header("Content-Type", "application/json;charset=utf-8");
	 // res.header("Access-Control-Allow-Origin", "*");
	var user=req.body.username;
	var pass=req.body.password;
	if(user==""||user==undefined){
		res.send({code:-1,message:"用户名不能为空"})
	}else{
		db.query("select * from user where username = ?",[user],function(result){
			if(result.length){
				if(result[0].password === pass){
					res.send({code:0,message:"登录成功"})
				}else{
					res.send({code:1,message:"密码错误"})
				}
			}else{
				res.send({code:2,message:"用户名不存在，请先注册"})
			}
		})
	}
})
// 查询用户信息
router.get("/userinfo",function(req,res,next){
	var user = req.query.username;
	if(!user){
		res.send({code:-1,message:"用户名不能为空"})
	}
	db.query("select id,username,email,phone from user where username = ?",[user],function(result){
		if(result.length){
			res.send({data:result[0],code:"查询成功",code:0})
		}else{
			res.send({data:'用户不存在，请输入正确的用户名',code:1})
		}
	})
})
// 修改用户信息
router.get("/update",function(req,res,next){
	console.log(req.query)
	var id = req.query.id;
	var user = req.query.username;
	var pass = req.query.password;
	var email = req.query.email;
	var phone = req.query.phone;
	if(user==""||user==undefined){
		res.send({code:-1,message:"用户名不能为空"})
	}
	db.query("select * from user where id = ?",[id],function(result){
		if(result.length){
			db.query("update user set username=?,password=?,email=?,phone=? where id =?",[user,pass,email,phone,id],function(result){
				res.send({code:0,message:'修改成功'});
			})
		}else{
			res.send({message:'用户不存在，请输入正确的用户名',code:1})
		}
	})
})
module.exports = router;
