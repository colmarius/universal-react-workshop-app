/**
 * Webpack config
 */

const webpack = require('webpack')
const path = require('path')

// Regexs
const node_modules = /node_modules/

module.exports = {

  // It is time to configure Webpack itself. In your webpack.config.js,
  // configure the entry to include the dev server and the hot reloading server.
  // Put them in array before your appʼs entry point:
  //
  // entry: [
  //   'webpack-dev-server/client?http://0.0.0.0:3000', // WebpackDevServer host and port
  //   'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
  //   './scripts/index' // Your appʼs entry point
  // ]

  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './app.jsx'
  ],

  output: {
    filename: 'bundle.js',         // We are gonna produce
    path: __dirname + '/build', // we put all in build
    publicPath: '/' // important for hot realoding see https://github.com/gaearon/react-transform-boilerplate/issues/47#issuecomment-151909080
  },

  // Loaders are kind of like “tasks” are in other build tools, and provide a powerful way to handle frontend build steps.
  // Loaders can transform files from a different language like, CoffeeScript to JavaScript, or inline images as data URLs.

  module: {
    //    preLoaders: [ // Execute ESLint on js / jsx
    //      {test: [js, jsx], loader: 'eslint', exclude: node_modules}
    //    ],
    loaders: [
      {
        test: /\.jsx$/,
        loader: 'babel',
        query: {
          "presets": ["es2015", "stage-0", "react"],
          "plugins": ["react-hot-loader/babel"]
        },
        include: path.join(__dirname)
      }
    ]
  },

// Resolve is used to find “import” and “require” references that are not immediately
// available in the current path. For example: how a call to require(“../homepage”)
// might be translated to (“../homepage/index.js”) or how a import react from ‘react’
// might be interpreted if your node_modules folder is named something else. For more configuration options click here

  resolve: {
    root: [path.resolve(__dirname)],
    extensions: ['', '.jsx', '.js']
  },

  devServer: {
    colors: true,
    historyApiFallback: true,
    inline: false,
    port: 3000,
    hot: true
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin() // not reload if error
  ]

}
