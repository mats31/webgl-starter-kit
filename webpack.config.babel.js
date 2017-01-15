import path from 'path';
import webpack from 'webpack';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const Config = {
  devtool: 'inline-source-map',
  entry: './src/main.js',
  output: {
    path: `${__dirname}/build`,
    filename: 'bundle.js',
  },
  resolve: {
    root: path.resolve( __dirname, 'src' ),
    extensions: [
      '',
      '.js',
      '.vue',
      '.json',
      '.styl',
    ],
  },
  module: {
    postLoaders: [
      {
        test: /\.js$/,
        loader: 'ify',
      },
    ],
    loaders: [
      {
        test: /\.html$/,
        loader: 'html',
      },
      {
        test: /node_modules/,
        loader: 'ify',
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
      },
      {
        test: /\.json$/,
        loader: 'json',
      },
      {
        test: /\.styl$/,
        loader: 'style-loader!css-loader!stylus-loader',
      },
      {
        test: /\.(glsl|vs|fs)$/,
        loader: 'shader',
      },
      {
        test: /animation.gsap\.js$/,
        loader: 'imports?define=>false',
      },
    ],
  },
  // glsl: {
  //   chunkPath: path(__dirname, '/glsl/chunks'),
  // },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      inject: 'body',
      template: 'src/template/index.tpl.html',
    }),
    new webpack.ProvidePlugin({
      THREE: 'three',
      Vue: 'vue/dist/vue',
    }),
    new CopyWebpackPlugin([
      { from: 'static' },
    ]),
  ],
};

module.exports = Config;
