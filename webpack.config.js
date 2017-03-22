var path = require("path");
var webpack = require("webpack");
var htmlWebpackPlugin = require("html-webpack-plugin");

var outPath = path.resolve(__dirname,'build');

module.exports = {
	// entry:path.resolve(__dirname, "index.js"),
	entry: {
		main:'./main.js',
		main2:'./main2.js',
	},
	output:{
		//定义打包输出文件路径
		path: outPath,
		//指定打包文件名称
		filename: '[name].js'
	},
	resolve: {
        // require时省略的扩展名，如：require('module') 不需要module.js
        extensions: ['.js','.css'],       
    },
    module: {
    	rules: [
    		{
    			test: /\.css$/,
    			use: [
			          { loader: 'style-loader'},
			          {
			            loader: 'css-loader',
			            // options: {
			            //   modules: true
			            // }
			          }
        		]
        	}
    	]
    },
	// resolve: { //解析
	// 	//sextensions: ["",".js",".css"]//自动补全，注意第一个必须是空字符串，后缀一定以点开头
	// },
	devServer: {
		stats:{colors: true},
		port: 8080,
		inline:true, //自动刷新
		contentBase: 'build'//指定静态文件的根目录
	},
	plugins: [
		new webpack.BannerPlugin('This file is created by zhaoda'),
		new htmlWebpackPlugin({
			template:'./main.html',
			filename: outPath + "/main.html",
			hash:true,
			chunks:['main','common.js']
		}),
		new htmlWebpackPlugin({
			template:'./main2.html',
			filename: outPath + "/main2.html",
			hash:true,
			chunks:['main2','common']
		}),
		new webpack.optimize.CommonsChunkPlugin({
			name: 'common',
			filename: 'common.js',
			minChunks: Infinity
	    }),
	]
}
