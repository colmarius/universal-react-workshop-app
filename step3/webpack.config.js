/* eslint-disable */

// See: https://webpack.github.io/docs/configuration.html
const webpack = require('webpack')
const path = require('path')

const js = /\.js$/
const jsx = /\.jsx$/
const json = /\.json$/
const node_modules = /node_modules/

module.exports = {
  context: __dirname,
  entry: {
    app: ['./client/app.js']
  },
  output: {
    path: './build',
    publicPath: '/public/',
    filename: 'bundle.js'
  },
  module: {
//    preLoaders: [
//      {test: [js, jsx], loader: 'eslint', exclude: node_modules}
//    ],
    loaders: [
      {test: js, loader: 'babel', exclude: node_modules},
      {test: jsx, loaders: ['react-hot', 'babel?presets[]=es2015,presets[]=stage-0,presets[]=react'], exclude: node_modules}
    ]
  },
  resolve: {
    root: [path.resolve(__dirname, 'client')],
    extensions: ['', '.jsx', '.js']
  },

  devtool: 'source-map',
  devServer: {
    port: 4000,
    historyApiFallback: true
  }
}
