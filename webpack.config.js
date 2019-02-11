const path = require('path')
const autoprefixer = require('autoprefixer')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const HtmlWebPackPlugin = require('html-webpack-plugin')

const isDev = process.env.NODE_ENV === 'development'

const config = {
  context: path.join(__dirname),

  mode: isDev ? 'development' : 'production',

  entry: {
    'app': [
      path.join(__dirname, 'src/index.js')
    ],
    'styles': [
      path.join(__dirname, 'src/assets/styles/scss/app.scss')
    ]
  },

  output: {
    filename: '[name].js',
    chunkFilename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },

  resolve: {
    modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    extensions: ['.scss', '.js', '.json']
  },

  devtool: isDev ? 'inline-source-map' : 'source-map',

  target: 'web',

  devServer: {
    contentBase: path.join(__dirname),
    watchContentBase: true,
    disableHostCheck: true,
    historyApiFallback: true
  },

  module: {
    rules: [
      {
        test: /\.(woff|woff2|png|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]'
        }
      },
      {
        test: /\.s?css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              sourceMap: isDev,
              importLoaders: 2
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: isDev,
              plugins: [
                autoprefixer()
              ]
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: isDev,
              precision: 10
            }
          }
        ],
        include: path.join(__dirname, '/src')
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader'
          }
        ]
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        include: [
          path.resolve(__dirname, 'src/')
        ]
      },
    ]
  },

  optimization: {
    splitChunks: {
      chunks: 'all',
      minSize: 30000,
      maxSize: 0,
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      automaticNameDelimiter: '~',
      name: true,
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all'
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true
        }
      }
    }
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css'
    }),
    new OptimizeCssAssetsPlugin({
      cssProcessor: require('cssnano'),
      cssProcessorOptions: { safe: true, discardComments: { removeAll: true } }
    }),
    new BundleAnalyzerPlugin({
      openAnalyzer: false,
      analyzerMode: 'static',
      reportFilename: isDev ? './reports/bundle-report-dev.html' : './reports/bundle-report-prod.html'
    }),
    new HtmlWebPackPlugin({
      template: './src/index.ejs',
      filename: 'index.html',
      inject: false,
      meta: {
        'viewport': 'width=device-width, initial-scale=1, shrink-to-fit=no',
        'theme-color': '#ffffff'
      }
    })
  ]

}

module.exports = config
