const path = require('path')
const webpack =  require('webpack')

module.exports = {
  entry: './index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist/'
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
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader'
      }
    ]
  },
  devtool:"source-map",
  devServer:{    
    inline: true
  },
  resolve:{
    alias:{
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
  plugins:[]
}
// 
// if(process.env.NODE_ENV==='production'){
//   module.exports.plugins = (module.exports.plugins || []).concat([
//     new webpack.optimize.UglifyJsPlugin()
//   ])
// }

