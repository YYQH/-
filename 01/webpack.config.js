// 基于comonjs规范，定义配置
module.exports = {
	// 通过entry定义入口文件
	// entry: './es/02.es',
	// entry: './js/main.js',
	entry: {
		// key表示发布的文件名称
		'02': './es/02.es',
		'04': './es/04.es',
		'05': './esx/05.esx',
		'06': './es/06.es',
		'07': './jsx/07.jsx',
		'08': './jsx/08.jsx',
		'09': './jsx/09.jsx'

	},
	// mode: 'production',
	// 发布的文件
	output: {
		// 文件名称，可以包含路径，也可以通过path属性定义路径
		// filename: './pack/02.js'
		// 可以通过[name]表示发布的文件名称
		filename: './pack/[name].js'
	},
	// 编译ES6的语法
	module: {
		// 编译文件要定义加载机（器）
		rules: [
			// 每一个成员代表一个加载机
			{
				// 定义文件规则
				test: /\.es$/,
				// 定义加载机
				loader: 'babel-loader?presets[]=es2015'
				// loader: 'babel-loader?presets[]=es2015'
				// loader: 'babel-loader',
				// query: {
				// 	presets: ['es2015']
				// }
			},
			// jsx语法加载机
			{
				// 定义文件规则
				test: /\.esx$/,
				// 加载机
				// loader: 'babel-loader',
				loader: 'babel-loader',
				query: {
					presets: ['react', 'es2015']
				}

			},
			// jsx语法加载机
			{
				// 定义文件规则
				test: /\.jsx$/,
				// 加载机
				// loader: 'babel-loader',
				loader: 'babel-loader',
				query: {
					presets: ['react', 'es2015']
				}

			}
		]
	}
}