/**
 * Created by wyvern on 16/3/1.
 */
var path = require('path');

module.exports = {
	entry: path.join(__dirname, 'app', 'index.js'),
	output: {
		pathinfo: true,
		path: path.join(__dirname, 'dist'),
		filename: 'bundle.js'
	},
	module: {
		loaders: [{
			test: /\.(js|jsx|es6)/,
			loader: 'babel',
			exclude: path.join(__dirname, 'node_modules')
		}]
	},
	callbackLoader: {
		loadavg: function () {
			return 1;
		}
	}
}