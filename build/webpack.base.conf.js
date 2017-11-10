var path = require('path')
var utils = require('./utils')
var config = require('../config')
var vueLoaderConfig = require('./vue-loader.conf')

function resolve (dir) {
  return path.join(__dirname, '..', dir)//__dirname：当前模块的文件夹名称，在这里指/build
}
//console.log(__dirname)
module.exports = {
  entry: {
    app: './src/main.js'
  },
  output: {
    path: config.build.assetsRoot, // webpack输出的目标文件夹路径（例如：/dist）
    filename: '[name]+66666.js',// /dist/[name].js   ?????解释：开发并没有产生真实文件，只是存在内存里，目录结构如前
    publicPath: process.env.NODE_ENV === 'production'
    //publicPath: "/assets/",
    // 输出解析文件的目录，url 相对于 HTML 页面
      ? config.build.assetsPublicPath
      : config.dev.assetsPublicPath// webpack编译输出的发布路径（例如'//cdn.xxx.com/app/'）跟目录
  },
  resolve: {//这些选项能设置模块如何被解析。webpack 提供合理的默认值
  	  // 别名，方便引用模块，例如有了别名之后，
    // import Vue from 'vue/dist/vue.common.js'可以写成 import Vue from 'vue'
    extensions: ['.js', '.vue', '.json'],
    //创建 import 或 require 的别名，来确保模块引入变得更简单
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src')
    }
  },
  module: {//这些选项决定了如何处理项目中的不同类型的模块。
    rules: [//创建模块时，匹配请求的规则数组。这些规则能够修改模块的创建方式。这些规则能够对模块(module)应用 loader，或者修改解析器(parser)。
     //每个规则可以分为三部分 - 条件(condition)，结果(result)和嵌套规则(nested rule)。
     {
        test: /\.vue$/,
        loader: 'vue-loader',
        //ule.options 和 Rule.query 是 Rule.use: [ { options } ] 的简写
        options: vueLoaderConfig
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('src'), resolve('test')]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('media/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      }
    ]
  }
}

