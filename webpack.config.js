const path = require('path');

module.exports = {
  entry: './src/pages/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    contentBase: "./dist",
    watchContentBase: true
  },
  module: {
  	rules: [
  		{
  			test:/\.css$/,
  			use: [
  				'style-loader',
  				'css-loader',
  			],
  		},
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader',
        ],
      },
  	],
  },
};
