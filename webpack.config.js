var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var ROOT_PATH = path.resolve(__dirname);


module.exports = {

  entry: {
    main: ROOT_PATH + '/src/main.js'
  },

  output: {
    path: ROOT_PATH + '/dist',
    filename: '[name]-bundle.js',
    // libraryTarget: 'system'
  },

   module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
      },
    ],
  },

  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  
  plugins: [
    new webpack.DllReferencePlugin({
      context: __dirname,
      manifest: require('./dist/lib/lib.json')
    }),
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    })
  ],

  optimization: {
    minimize: false,
  }

};
