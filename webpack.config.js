const webpack = require('webpack')
const path = require('path')

module.exports = (env, argv) => {
  if (argv.mode === 'production') {
    return {
      context: path.resolve(__dirname, 'src'),
      entry: [
        './index.js'
      ],
      mode: 'production',
      output: {
        filename: '[name]-bundle-prod.js',
        path: path.resolve(__dirname, 'build/prod'),
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
        new webpack.NamedModulesPlugin()
      ]
    }
  } else {
    return {
      context: path.resolve(__dirname, 'src'),
      entry: [
        './index.js'
      ],
      mode: 'development',
      output: {
        filename: '[name]-bundle-dev.js',
        path: path.resolve(__dirname, 'build/dev'),
        publicPath: '/'
      },
      devServer: {
        hot: true,
        contentBase: path.resolve(__dirname, 'build/dev'),
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
  }
}
