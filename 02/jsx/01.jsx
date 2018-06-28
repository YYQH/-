// 引入相关库
import React, { Component } from 'react';
import { render } from 'react-dom';

let obj = {
	color: 'red'
}

// 定义组件
class Demo extends Component {
	// 事件回调函数
	clickBtn1(e) {
		console.log(this, arguments)
		console.log(e.target, e.currentTarget)
	}
	// 渲染的方法
	render() {
		// 组件有且只能有一个根元素
		return (
			<div>
				{/*事件*/}
				<button onClick={this.clickBtn1}>按钮1</button>
				{/*改变作用域*/}
				<button onClick={this.clickBtn1.bind(this, 100, true)}>按钮2</button>
				<button onClick={this.clickBtn1.bind(obj, 100, true)}>按钮2</button>
				{/*ES6改变作用域*/}
				<button onClick={(e) => {this.clickBtn1(e, 200, true)}}>按钮3</button>
				{/*两点省略*/}
				<button onClick={e => this.clickBtn1(e, 300, true)}>按钮3</button>
			</div>
		)
	}
}

// 渲染组件
render(<Demo></Demo>, app)