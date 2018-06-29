// 定义配置
module.exports = {
	// 入口文件
	entry: './jsx/01.jsx',
	// 发布文件
	output: {
		filename: './dist/ickt.js'
	},
	// 加载机
	module: {
		rules: [
			// jsx加载机
			{
				test: /\.jsx$/,
				loader: 'babel-loader',
				query: {
					presets: ['react', 'es2015']
				}
			}
		]
	}
}