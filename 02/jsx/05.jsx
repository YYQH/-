// 引入相关库
import React, { Component } from 'react';
import { render } from 'react-dom';
// 引入样式
// import {} from './demo.css';
// 简便方式
import './demo.css';

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
				<GoBack title={this.state.text}></GoBack>
			</div>
		)
	}
	// 监听窗口的滚动
	// componentDidMount() {
	// 	window.onscroll = () => {
	// 		// 如果滚动条距离顶部200,显示返回顶部
	// 		if (window.scrollY > 200) {
	// 			this.setState({ text: '返回顶部' })
	// 		// 否则显示网址导航
	// 		} else {
	// 			this.setState({ text: '网址导航' })
	// 		}
	// 	}
	// }
}
// 子组件
class GoBack extends Component {
	// 初始化状态数据
	constructor(props) {
		super(props);
		// 初始化
		this.state = {
			// 创建时候，将外部的数据，存储在内部
			title: this.props.title
		}
	}
	// 监听窗口的滚动
	componentDidMount() {
		window.onscroll = () => {
			// 如果滚动条距离顶部200,显示返回顶部
			if (window.scrollY > 200) {
				this.setState({ title: '返回顶部' })
			// 否则显示网址导航
			} else {
				this.setState({ title: '网址导航' })
			}
		}
	}
	// 定义事件回调函数
	childCallback(...arg) {
		// 返回顶部
		window.scrollTo(0, 0)
	}
	// 存在期的五个方法
	// 1 组件即将接收新的属性数据
	componentWillReceiveProps(props, state) {
		console.log(111, 'componentWillReceiveProps', props, state, this.props, this.state, props.title, this.props.title)
		// 将外部的数据，存储在内部
		this.setState({
			title: props.title
		})
	}
	// 2 组件是否应该更新
	shouldComponentUpdate(props, state) {
		// this.setState({title: '123'})
		console.log(222, 'shouldComponentUpdate', props, state, this.props, this.state, state.title, this.state.title)
		// 再去更新状态，将死循环
		// this.setState({color: 'red'})
		// 是否应该更新
		// return true;
		// 如果属性或者状态数据改变了，往下进行才有必要
		return props.title !== this.props.title || state.title != this.state.title
		return true
	}
	// 3 组件即将更新
	componentWillUpdate(...arg) {
		// this.setState({title: '123'})
		console.log(333, 'componentWillUpdate', arg, this.props, this.state)
	}
	// 4 组件渲染新的虚拟DOM
	render(...arg) {
		console.log(444, 'render', arg, this.props, this.state)
		// <span className="go-back" onClick={this.childCallback.bind(this)}>{this.props.title}</span>

		return (
			<span className="go-back" onClick={this.childCallback.bind(this)}>{this.state.title}</span>
		)
	}
	// 5 组件更新完毕
	componentDidUpdate(...arg) {
		// this.setState({title: '123'})
		console.log(555, 'componetnDidUpdate', arg, this.props, this.state)
	}
}

// 渲染侧边栏
render(<Slider text="返回顶部2"></Slider>, app)