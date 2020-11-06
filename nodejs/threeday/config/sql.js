let sqlConfig = {
	userInsert:'insert into user (username,password,email,phone) values (?,?,?,?)',
	userSearch:'select * from user where username = ?'
}
module.exports = sqlConfig