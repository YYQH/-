// 配置
module.exports = {
	// 入口文件
	entry: {
		'01': './jsx/01.jsx',
		'02': './jsx/02.jsx',
		'03': './jsx/03.jsx',
	},
	// 发布文件
	output: {
		filename: './dist/[name].js'
	},
	// 模块
	module: {
		rules: [
			// jsx语法加载机
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