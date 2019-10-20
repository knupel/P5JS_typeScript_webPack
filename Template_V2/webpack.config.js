const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: {
		export: './src/sketch.ts',
	},
	/*
	plugins: [
		new HtmlWebpackPlugin({
			title: 'Mon nom de projet',
		}),
	],
*/
	devtool: 'inline-source-map',
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: 'ts-loader',
				exclude: /node_modules/
			}
		]
	},
	resolve: {
		extensions: [ '.tsx', '.ts', '.js' ]
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].js',
	}
};
