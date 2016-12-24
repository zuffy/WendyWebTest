var webpack = require('webpack');
var path = require('path');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');

module.exports = {
  /*devServer: {
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true,
    contentBase: './app',
    port: 8080
  },*/

  entry: {
    // main: path.resolve(__dirname, './main.jsx') ,
    art: path.resolve(__dirname, './js/art/art.jsx')
  },

  output: {
    path: __dirname + '/build',
    publicPath: '/',
    filename: './[name].js'
  },
  module: {
    loaders: [
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },

            {
              test: /\.jsx?$/,//表示要变异的文件的类型，这里要编译的是js文件
              loader: 'babel-loader',//装载的哪些模块
              exclude: /node_modules/,//标示不变异node_modules文件夹下面的内容
              query: {//具体的编译的类型，
                  compact: false,//表示不压缩
                  presets: ['es2015', 'react']//我们需要编译的是es6和react
              }
          }
        ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new OpenBrowserPlugin({ url: 'http://localhost:8080' })
  ]
};