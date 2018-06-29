// 配置
module.exports = {
	entry: './modules/bootstrap.jsx',
	output: {
		filename: './dist/ickt.js'
	},
	module: {
		rules: [
			// jsx语法
			{
				test: /\.jsx$/,
				loader: 'babel-loader',
				query: {
					presets: ['react', 'es2015']
				}
			},
			{
				test: /\.less$/,
				loader: 'style-loader!css-loader!less-loader'
			}
		]
	}
}