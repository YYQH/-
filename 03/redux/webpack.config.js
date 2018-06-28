// 配置
module.exports = {
	// 入口文件
	// entry: './es/01.es',
	entry: './jsx/01.jsx',
	// 发布文件
	output: {
		filename: './dist/ickt.js'
	},
	// 编译
	module: {
		// 加载机
		rules: [
			// es6加载机
			{
				test: /\.es$/,
				loader: 'babel-loader',
				query: {
					presets: ['es2015']
				}
			},
			// jsx
			{
				test: /\.jsx$/,
				loader: 'babel-loader',
				query: {
					presets: ['react', 'es2015']
				}
			},
			// less
			{
				test: /\.less$/,
				loader: 'style-loader!css-loader!less-loader'
			}
		]
	}
}