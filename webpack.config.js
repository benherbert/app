const path = require('path')
const autoprefixer = require('autoprefixer')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

const isDev = process.env.NODE_ENV === 'development'

const config = {
  context: path.join(__dirname),

  mode: isDev ? 'development' : 'production',

  entry: {
    'styles': [
      path.join(__dirname, 'src/assets/styles/scss/app.scss')
    ]
  },

  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },

  resolve: {
    extensions: ['.js', '.json']
  },

  devtool: 'source-map',

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
      }
    ]
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
    })
  ]

}

module.exports = config
