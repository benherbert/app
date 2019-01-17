import path from 'path'
import autoprefixer from 'autoprefixer'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import OptimizeCssAssetsPlugin from 'optimize-css-assets-webpack-plugin'
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'

const isDev = process.env.NODE_ENV === 'development'

const config = {
  context: path.join(__dirname),

  mode: isDev ? 'development' : 'production',

  entry: {
    // JS
    'app': [
      path.resolve(__dirname, 'src/index.js')
    ],
    // CSS
    'styles': [
      path.join(__dirname, 'src/assets/styles/app.scss')
    ]
  },

  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'commonjs2'
  },

  resolve: {
    extensions: ['.js', '.json']
  },

  devtool: 'cheap-module-source-map',

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
        test: /\.js$/,
        loader: 'babel-loader',
        include: [
          path.join(__dirname, 'src/')
        ]
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
