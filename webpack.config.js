let path = require('path')
let webpack = require('webpack')
module.exports = {
  entry: path.join(__dirname, './src/main.js'),
  output: {
    path: path.join(__dirname, './dist'),
    publicPath: '/dist/',
    filename: 'build.js'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options:{
          name: '[name].[ext]?[hash]'
        }
      },
      {
        test:/\.tsx?$/,
        enforce:'pre',
        loader:'tslint-loader'
      },
      {
        test:/\.js$/,
        exclude:/node_modules/,
        loader:'babel-loader',
        include: [path.resolve('src'), path.resolve('test'), path.resolve('node_modules/vue-awesome')]
      }
    ]
  },
  devServer: {
    compress:true,
    historyApiFallback: true,
    proxy: {
      '/l/*':{
        target: 'http://120.25.163.62:8083',
        secure: false,
        changeOrigin: true
      }
    },
    contentBase:[path.join(__dirname,'src'),path.join(__dirname,'src/app')],
    port:9001
  },
  resolve: {
    extensions: ['.css','.scss','.js', '.vue', '.json']
  }
}
