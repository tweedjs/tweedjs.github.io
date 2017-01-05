import { resolve } from 'path'
import { optimize } from 'webpack'
import ExtractTextPlugin from 'extract-text-webpack-plugin'

export default {
  entry: './src/main',
  output: {
    path: resolve(__dirname, 'dist'),
    filename: 'main.js'
  },
  module: {
    loaders: [{
      loader: 'babel',
      test: /\.js$/,
      exclude: /node_modules|Code\/tweed(\/.*)?$/
    }, {
      test: /\.css$/,
      loader: ExtractTextPlugin.extract('css-loader?modules=true&localIdentName=[hash:base64:5]')
    }]
  },
  plugins: [
    new ExtractTextPlugin('style.css'),
    new optimize.UglifyJsPlugin()
  ]
}
