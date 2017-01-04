import { resolve } from 'path'
import { optimize } from 'webpack'

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
      exclude: /node_modules/
    }]
  },
  plugins: [
    new optimize.UglifyJsPlugin()
  ]
}
