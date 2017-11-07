const webpack = require('webpack')
module.exports = {
  entry: './index.js',
  output: {
    filename: 'bundle.js'    
  },
  devtool: 'inline-source-map',
  module:{
    rules:[
      {
        test:/\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /.\js$/,
        loader: 'babel-loader'
      },
      {
        test: /\.png$/,
        loader: 'file-loader'
      }
    ]
  },
  plugins:[
	new webpack.optimize.UglifyJsPlugin()
  ]
}

