module.exports = {
  entry: './index.js',
  output: {
    filename: 'bundle.js'    
  },
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
  }
}

