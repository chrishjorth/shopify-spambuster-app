const webpack = require('webpack')
const path = require('path')

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: [
    './index.js'
  ],
  mode: 'development',
  output: {
    filename: '[name]-bundle.dev.js',
    path: path.resolve(__dirname, 'build'),
    publicPath: '/'
  },
  devServer: {
    hot: true,
    contentBase: path.resolve(__dirname, 'build'),
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin()
  ]
}
