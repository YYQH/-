// 引入相关库
import React, { Component } from 'react';
import ReactDOM, { render, findDOMNode } from 'react-dom';
// console.log(ReactDOM)
// 定义组件
class Demo extends Component {
	// 2 初始化状态数据
	constructor(props) {
		// props代表属性数据
		// 构造函数继承
		super(props);
		console.log('constructor', this, arguments)
		// 初始化状态
		this.state = {
			num: 100,
			// 将外部的数据，转化成内部的数据
			color: this.props.color
		}
	}
	// 3 组件即将构建
	componentWillMount() {
		console.log('componentWillMount', this.state, this.props, arguments, findDOMNode(this))
	}
	// 4 渲染组件
	render() {
		console.log('render', this.state, this.props, arguments)
		// 解构数据
		let { color, num } = this.state;
		// 返回值就是虚拟DOM
		return (
			<h1>{color + '--' + num}</h1>
		)
	}
	// 组件构建完成
	componentDidMount() {
		console.log('componentDidMount', this.state, this.props, arguments, findDOMNode(this))
	}
}
// 1 默认属性
Demo.defaultProps = {
	color: 'red'
}

// 渲染组件
render(<Demo></Demo>, app)