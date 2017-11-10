// see http://vuejs-templates.github.io/webpack for documentation.
var path = require('path')

module.exports = {
  build: {
    env: require('./prod.env'),
            // 下面是相对路径的拼接，假如当前跟目录是config，那么下面配置的index属性的属性值就是dist/index.html
    index: path.resolve(__dirname, '../dist/index.html'),//__dirname：当前模块的文件夹名称
            // 下面定义的是静态资源的根目录 也就是dist目录
    assetsRoot: path.resolve(__dirname, '../dist'),
            // 下面定义的是静态资源根目录的子目录static，也就是dist目录下面的static
    assetsSubDirectory: 'static',
            // 下面定义的是静态资源的公开路径，也就是真正的引用路径
    assetsPublicPath: '/',//资源的根目录
                  // 下面定义是否生成生产环境的sourcmap，sourcmap是用来debug编译后文件的，通过映射到编译前文件来实现
 productionSourceMap: true,
    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
            // 下面定义是否生成生产环境的sourcmap，sourcmap是用来debug编译后文件的，通过映射到编译前文件来实现
    productionGzip: false,
            // 下面定义要压缩哪些类型的文件
    productionGzipExtensions: ['js', 'css'],
    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
   //  下面是用来开启编译完成后的报告，可以通过设置值为true和false来开启或关闭
        // 下面的process.env.npm_config_report表示定义的一个npm_config_report环境变量，可以自行设置
    bundleAnalyzerReport: process.env.npm_config_report
  },
  dev: {
    env: require('./dev.env'),
    port: 8083,
    autoOpenBrowser: true,
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    
//  下面是proxyTable的一般用法
//  vue-cli使用这个功能是借助http-proxy-middleware插件，一般解决跨域请求api
//  proxyTable: {
//      '/list': {
//          target: 'http://api.xxxxxxxx.com', -> 目标url地址
//          changeOrigin: true, -> 指示是否跨域
//          pathRewrite: {
//          '^/list': '/list' -> 可以使用 /list 等价于 api.xxxxxxxx.com/list
//          }
//      }
//  }
//这样我们在写url的时候，只用写成/list/1就可以代表api.xxxxxxxx.com/list/1.
//那么又是如何解决跨域问题的呢？其实在上面的'list'的参数里有一个changeOrigin参数，接收一个布尔值，如果设置为true,那么本地会虚拟一个服务端接收你的请求并代你发送该请求，
//这样就不会有跨域问题了，当然这只适用于开发环境

    proxyTable: {},//代理
    // CSS Sourcemaps off by default because relative paths are "buggy"
    // with this option, according to the CSS-Loader README
    // (https://github.com/webpack/css-loader#sourcemaps)
    // In our experience, they generally work as expected,
    // just be aware of this issue when enabling this option.
    cssSourceMap: false
  }
}
