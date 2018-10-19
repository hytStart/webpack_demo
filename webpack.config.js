const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
	devtool: 'eval-source-map',
	entry:  [
		'react-hot-loader/patch', //添加
		__dirname + "/app/main.js" // 已多次提及的唯一入口文件
	],
	output: {
		path: __dirname + "/build", // 打包后的文件存放的地方
		filename: "bundle.js" // 打包后输出文件的文件名
	},
	devServer: {
		contentBase: "./public",
		historyApiFallback: true,
		inline: true,
		port: 0512,
		hot: true
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
			},
			{
				test: /\.less$/,
				use: [
					{
						loader: "style-loader" // creates style nodes from JS strings
					}, {
						loader: "css-loader", // translates CSS into CommonJS
						options: {
                            modules: true, // 指定启用css modules
                            localIdentName: '[name]__[local]--[hash:base64:5]' // 指定css的类名格式
                        }
					}, {
						loader: "less-loader" // compiles Less to CSS
					}
				]
			}
		]
	},
	plugins: [
		new webpack.BannerPlugin('@auth 黄义亭 @date 2018-08-01'),
		new HtmlWebpackPlugin({
            template: __dirname + "/app/index.tmpl.html" // new 一个这个插件的实例，并传入相关的参数
		}),
		new webpack.HotModuleReplacementPlugin() // 热加载插件
    ],
}

