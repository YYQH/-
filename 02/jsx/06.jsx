// 引入相关库
import React, { Component } from 'react';
import { render } from 'react-dom';


// 定义组件
class Demo extends Component {
	// 渲染的方法
	render() {
		// 组件有且只能有一个根元素
		return (
			<div>
				<h1>安徽电信</h1>
			</div>
		)
	}
	// 组件渲染完成
	componentWillUnmount() {
		console.log(this, arguments)
	}
}

// 渲染组件
render(<Demo></Demo>, app)

setTimeout(function() {
	// 2秒钟，我们在app中渲染新的虚拟DOM
	render(<h1>爱创课堂</h1>, app)
}, 2000)