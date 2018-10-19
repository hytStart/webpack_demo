const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const CleanWebpackPlugin = require("clean-webpack-plugin")

module.exports = {
	devtool: 'null',
	entry:  __dirname + "/app/main.js",  // 已多次提及的唯一入口文件
	output: {
		path: __dirname + "/build",  // 打包后的文件存放的地方
		filename: "bundle-[hash].js"  // 打包后输出文件的文件名
	},
	devServer: {
		contentBase: "./public",
		historyApiFallback: true,
		inline: true,
		port: 0512
	},
	module: {
		rules: [
			{
				test: /(\.jsx|\.js)$/,
				use: {
					loader: "babel-loader",
				},
				exclude: /node_modules/
			},
			{
				test: /\.css$/,
				use: [
                    {
                        loader: "style-loader"
                    }, {
						loader: "css-loader",
						options: {
                            modules: true, // 指定启用css modules
                            localIdentName: '[name]__[local]--[hash:base64:5]' // 指定css的类名格式
                        }
					}, {
                        loader: "postcss-loader"
                    }
                ]
			}
		]
	},
	plugins: [
        new webpack.BannerPlugin('@auth 黄义亭 @date 2018-08-01 @build'),
        new HtmlWebpackPlugin({
            template: __dirname + "/app/index.tmpl.html" // new 一个这个插件的实例，并传入相关的参数
        }),
        new webpack.optimize.OccurrenceOrderPlugin(),
        // new webpack.optimize.UglifyJsPlugin(),  // remove了
        // new ExtractTextPlugin("style.css")  // extract-text-webpack-plugin isn't updated for webpack >= v4.0.0
        new CleanWebpackPlugin('build/*.*', {
            root: __dirname,
            verbose: true,
            dry: false
        })
    ],
}

