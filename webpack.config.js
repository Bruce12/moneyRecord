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
        loader:'babel-loader'
      }
    ]
  },
  devServer:{
    compress:false,
    contentBase:[path.join(__dirname,'src'),path.join(__dirname,'src/app')],
    port:9001
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  }
}