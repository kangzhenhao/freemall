module.exports = {
  publicPath: '',
  // 自定义服务器端口
  devServer: {
    host: 'localhost',
    port: '8080',
    // 配置跨域代理
    proxy: {
      '/mock': {
        target: 'http://localhost:8080',
        ws: false, /* 是否开启websock */
        changeOrigin: false /* 将主机头的原点改为目标的URL */
      }
    }
  }
}
