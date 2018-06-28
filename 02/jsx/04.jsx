// 引入相关库
import React, { Component } from 'react';
import { render } from 'react-dom';

// 父组件
class Slider extends Component {
	// 状态数据
	constructor(props) {
		super(props);
		// 初始化
		this.state = {
			text: '网址导航'
		}
	}
	// 定义方法
	clickMethods() {
		console.log(this, arguments)
	}
	// 渲染
	render() {
		// let title = '返回顶部';
		return (
			<div>
				{/*传递变量*/}
				{/*<GoBack title={title}></GoBack>*/}
				{/*传递属性数据*/}
				{/*<GoBack title={this.props.text}></GoBack>*/}
				{/*状态数据*/}
				{/*<GoBack title={this.state.text}></GoBack>*/}
				{/*传递方法*/}
				<GoBack parentMethod={this.clickMethods.bind(this, 'red', 'green')} title={this.state.text}></GoBack>
			</div>
		)
	}
}
// 子组件
class GoBack extends Component {
	// 定义事件回调函数
	childCallback(...arg) {
		console.log(this, arg)
		this.props.parentMethod(...arg, 100, 200)
	}
	// 渲染
	render() {
		// <span onClick={this.props.parentMethod.bind(this, 100, 200)}>{this.props.title}</span>
		return (
			<span onClick={this.childCallback.bind(this)}>{this.props.title}</span>
		)
	}
}

// 渲染侧边栏
render(<Slider text="返回顶部2"></Slider>, app)