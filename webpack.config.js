const glob = require('glob')
const path = require('path')

const moveArrItem = (arr, elem, index) =>
  [elem].concat(arr.filter(x => x !== elem))

module.exports = {
  entry: moveArrItem(glob.sync('./app/**/*.js'), './app/app.module.js', 0),
  output: {
    path: path.resolve('./dist/'),
    filename: 'app.bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /.html$/,
        loader: 'html-loader'
      }
    ]
  }
}
