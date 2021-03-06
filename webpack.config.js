'use strict'

var path = require('path')
var webpack = require('webpack')

module.exports = {
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'serialise-response.min.js',
    library: 'serialiseResponse',
    libraryTarget: 'umd'
  },
  plugins: [new webpack.optimize.UglifyJsPlugin]
}
