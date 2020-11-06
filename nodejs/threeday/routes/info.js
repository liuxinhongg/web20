var express = require('express');
var router = express.Router();
var db = require("../db.js");
// 注册密码加密
const crypto = require("crypto");
var PWD = "user_register"; //加密需要密钥，我们定义一个密钥
function md5(s) {
	// 注意参数必须是string类型,不然会报错
	return crypto.createHash("md5").update(String(s)).digest('hex');
}
// 登录生成token
const jswt = require("jsonwebtoken")
var PRIVATE_KEY = "liuxinhong";
// 过期时间,时间是按秒算的 设置一天过期
var EXPIRESD = 60 * 60 * 24;


router.post("/register", function(req, res, next) {
	console.log(req.body)
	var user = req.body.username;
	var pass = req.body.password;
	var email = req.body.email;
	var phone = req.body.phone;
	if ((user == "" || user == undefined) && (pass == "" || pass == undefined)) {
		res.send({
			code: -1,
			message: "用户名不能为空"
		})
	} else {
		db.query("select * from user where username = ?", [user], function(result) {
			if (result.length) {
				res.send({
					message: "该用户已注册",
					code: 1
				})
			} else {
				pass = md5(`${pass}${PWD}`);
				db.query("insert into user (username,password,email,phone) values (?,?,?,?)", [user, pass, email, phone],
					function(result) {
						res.send({
							code: 0,
							message: '注册成功~'
						})
					})
			}
		})
	}
})
router.post("/login", function(req, res, next) {
	var user = req.body.username;
	var pass = req.body.password;
	if (!user && !pass) {
		res.send({
			code: -1,
			message: "用户名或密码不能为空"
		})
	} else {
		db.query("select * from user where username = ?", [user], function(result) {
			if (result.length) {
				pass = md5(`${pass}${PWD}`);
				// 首先要确保用户存在,这样我们就可以生成一个token,
				if (result[0].password === pass) {
					// 生成token jswt.sign({user},密钥，过期时间)
					let token = jswt.sign({
						user
					}, PRIVATE_KEY, {
						expiresIn: EXPIRESD
					});
					res.send({
						code: 0,
						message: "登录成功",
						token: token
					})
				} else {
					res.send({
						code: 1,
						message: "密码错误"
					})
				}
			} else {
				res.send({
					code: 2,
					message: "用户名不存在，请先注册"
				})
			}
		})
	}
})
module.exports = router;
