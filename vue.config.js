module.exports = {
  // devServer: {
  //   open: true,
  //   host: 'localhost',
  //   port: 3000,
  //   https: false,
  //   //以上的ip和端口是我们本机的;下面为需要跨域的
  //   proxyTable: { //配置跨域
  //     '/api': {
  //       target: 'http://localhost:3000/PyPio/test', //这里后台的地址模拟的;应该填写你们真实的后台接口
  //       ws: true,
  //       changOrigin: true, //允许跨域
  //       pathRewrite: {
  //         '^/api': '/api' //请求的时候使用这个api就可以
  //       }
  //     }

  //   }
  // },
  configureWebpack: {
    resolve: {
      alias: {
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views',
        'php': '@/php'
      }
    }
  }
}