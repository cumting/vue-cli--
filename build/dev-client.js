/* eslint-disable */
require('eventsource-polyfill')//简单的服务器端代码
//跨域请求支持
var hotClient = require('webpack-hot-middleware/client?noInfo=true&reload=true')
//Webpack热重载仅使用webpack-dev-middleware。这允许您在没有webpack-dev-server的情况下将热重新加载到现有服务器中。
hotClient.subscribe(function (event) {
  if (event.action === 'reload') {
    window.location.reload()
  }
})
