const express = require('express')
const app = express()
// 注册解释 表单数据的body-parser
const bodyParser = require('body-parser')

const router = require('./router')

// 解决跨域问题
app.use('/api/*', (req, res, next) => {
	// 设置请求头为允许跨域
	res.header("Access-Control-Allow-Origin", "*");
	// 设置服务器支持的所有头信息字段
	res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
	// 设置服务器支持的所有跨域请求的方法
	res.header("Access-Control-Allow-Methods", "POST,GET");
	// next()方法表示进入下一个路由
	next();
})


app.use(bodyParser.urlencoded({ extended: false}))

app.use(bodyParser.json())

if(app.use(router)) console.log('success')


app.listen(3000, () => console.log(`success: 3000`))