// 配置
module.exports = {
	// 入口文件
	entry: {
		'01': './jsx/01.jsx',
		'02': './jsx/02.jsx',
		'03': './jsx/03.jsx',
		'04': './jsx/04.jsx',
		'05': './jsx/05.jsx',
		'06': './jsx/06.jsx',
		'07': './jsx/07.jsx',
		'08': './jsx/08.jsx',
		'09': './jsx/09.jsx',
		'10': './jsx/10.jsx',
	},
	// 发布文件
	output: {
		filename: './dist/[name].js'
	},
	// 编译
	module: {
		// 加载机
		rules: [
			{
				// 规则
				test: /\.jsx$/,
				// 加载机
				loader: 'babel-loader',
				// 插件
				query: {
					presets: ['react', 'es2015']
				}
			},
			// css加载机
			{
				// 规则
				test: /\.css$/,
				// 加载机
				loader: 'style-loader!css-loader'
			}
		]
	}
}