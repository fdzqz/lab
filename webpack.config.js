var path = require('path');

module.exports = {
  entry: {
    'index': './public/js/index.js',
    'admin': './public/js/admin.js',
    'admin-login': './public/js/admin-login.js'
  },
  output: {
    path: './public/js/build',
    filename: '[name].bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader?modules"
      },
      {
          test: /\.(png|jpe?g|gif|svg|woff2?|eot|ttf|otf)(\?.*)?$/,
          loader: 'url?limit=8192&context=client&name=[path][name].[hash:7].[ext]'
      }
  ]
  }
};
