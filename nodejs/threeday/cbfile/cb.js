let sqlconfig = require("../config/sql.js")
let db = require("../config/db.js");
// 登录生成token
const jswt = require("jsonwebtoken")
const {md5} = require("../config/method.js");
const { PWD,PRIVATE_KEY,EXPIRESD } = require("../config/constant.js")
class Bfile {
	UserRegister(req,res,next){
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
			db.query(sqlconfig.userSearch, [user], function(result) {
				if (result.length) {
					res.send({
						message: "该用户已注册",
						code: 1
					})
				} else {
					pass = md5(`${pass}${PWD}`);
					db.query(sqlconfig.userInsert, [user, pass, email, phone],
						function(result) {
							res.send({
								code: 0,
								message: '注册成功~'
							})
						})
				}
			})
		}
	}
	userLogin(req,res,next){
		var user = req.body.username;
		var pass = req.body.password;
		if (!user && !pass) {
			res.send({
				code: -1,
				message: "用户名或密码不能为空"
			})
		} else {
			db.query(sqlconfig.userSearch, [user], function(result) {
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
	}
}
module.exports = new Bfile()