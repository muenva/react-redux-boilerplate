var path = require('path')
var webpack = require('webpack')
var autoprefixer = require('autoprefixer')

module.exports = {
  devtool: 'source-map',
  entry: [
    'webpack-dev-server/client?http://localhost:1337',
    path.resolve(__dirname, './src/app/index')
  ],
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js',
    publicPath: '/dist/'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel',
      include: path.resolve(__dirname, './src')
    }, {
      test: /\.css$/,
      loaders: ['style', 'css?sourceMap', 'postcss']
    }, {
      test: /\.scss$/,
      loaders: ['style', 'css?sourceMap', 'postcss', 'sass?sourceMap']
    }, {
      test: /\.(eot|ttf|woff|woff2)$/,
      loader: 'file?name=assets/fonts/[name].[ext]'
    }, {
      test: /\.(jpg|jpeg|gif|png|ico)$/,
      exclude: /node_modules/,
      loader: 'file-loader?name=[path][name].[ext]'
    }, {
      test: /\.svg$/,
      loader: 'svg-inline'
    }]
  },
  sassLoader: {
    includePaths: path.resolve(__dirname, './src/style')
  },
  postcss: [ autoprefixer({ browsers: ['last 2 versions'] }) ],
  resolve: {
    root: [
      path.resolve(__dirname, './src')
    ]
  }
}
