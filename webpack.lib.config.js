const path = require('path');
const webpack = require('webpack');

module.exports = {
  context: process.cwd(),
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.less', '.css'],
    modules: [__dirname, 'node_modules']
  },

  entry: {
    lib: [
      'date-fns',
    ]
  },
  output: {
    filename: '[name].dll.js',
    path: path.resolve(__dirname, './dist/lib'),
    library: '[name]'
  },
  plugins: [
    new webpack.DllPlugin({
      name: '[name]',
      path: './dist/lib/[name].json'
    })
  ],
  
  optimization: {
    minimize: false,
  }
};