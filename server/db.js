let mysql = require('mysql')

exports.base = (sql, data, callback) => {
  let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'test',
    port: '3306'
  })
  connection.connect();
  connection.query(sql, data, (error, results, fields) => {
    if (error) {
      console.log(error)
    }
    console.log(results)
    callback && callback(results, error)
  })
  connection.end();
}
