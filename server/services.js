const db = require('./db.js')
exports.start = (req, res) => {
	let username = req.body.username
	let sql = 'select * from test where username = ?'

	db.base(sql, username, (result, error) => {
		if(result.length) {
			return res.json({status: 0, msg: '用户名已存在'})
		}
		return res.json({status: 1, msg: '用户名可用'})
	})
}
// 登录注册处理
exports.login = (req, res) => {
  let username = req.body.username
  let pwd = req.body.password
  // 查询语句
  let sql = 'select * from test where username = ?'
  db.base(sql, username, (result, error) => {
    if (!result.length) {
      return res.json({ status: 0, msg: '登录失败' })
    } else {
      if (result[0].password == pwd) {
        return res.json({ status: 1, msg: '登录成功' })
      }
      return res.json({ status: 2, msg: '密码错误' })
    }
  })
}
exports.register = (req, res) => {
  let username = req.body.username
  let password = req.body.password
  // 插入语句
  let sql = 'insert into test(username,password) values(?,?)'
  db.base(sql, [username, password], (result, error) => {
    if (error) {
      console.log(result)
      console.log(error + "12345323")
      return res.json({ status: 0, msg: error.sqlMessage })
    } else {
      return res.json({ status: 1, msg: "注册成功" })
    }
  })

}