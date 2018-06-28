// 引入相关库
import React, { Component } from 'react';
import { render } from 'react-dom';

// 非约束性组件
// class Demo extends Component {
// 	// 查看数据
// 	showResult() {
// 		// 2 通过this.refs获取数据
// 		// 3 通过元素获取值
// 		console.log(this.refs.username.value, this.refs.intrest.checked)
// 	}
// 	// 修改数据
// 	changeValue() {
// 		// 1 设置ref
// 		// 2 获取元素
// 		// 3 通过元素，修改数据
// 		this.refs.username.value = '安徽电信';
// 		this.refs.intrest.checked = false;
// 	}
// 	// 渲染方法
// 	render() {
// 		return (
// 			<div>
// 				{/*定义默认值*/}
// 				{/*1 设置ref*/}
// 				<input ref="username" type="text" defaultValue="用户名"/>
// 				<input ref="intrest" type="checkbox" defaultChecked/>
// 				<button onClick={this.showResult.bind(this)}>获取数据</button>
// 				<button onClick={e => this.changeValue(e)}>修改数据</button>
// 			</div>
// 		)
// 	}
// }

// 约束性组件
class Demo extends Component {
	// 定义状态
	constructor(props) {
		super(props);
		// 初始化状态
		this.state = {
			username: '爱创课堂',
			intrest: true
		}
	}
	// 查看数据
	showResult() {
		// 获取状态中数据
		console.log(this.state)
	}
	// 修改数据
	changeValue() {
		// 修改状态中数据
		this.setState({
			username: '安徽电信',
			intrest: false
		})
	}
	// 定义事件回调函数
	changeUername(e) {
		// console.log(e.target.value)
		// 根据输入的内容，存储数据
		// this.setState({
		// 	username: e.target.value
		// })
		// 我们认为用户名是4-8位任意的字符
		let username = e.target.value;
		// 检测输入的是否正确
		if (/^.{4,8}$/.test(username)) {
			// 更新数据
			this.setState({
				username
			})
		}
	}
	changeIntrest(intrest) {
		this.setState({
			intrest
		})
	}
	// 渲染方法
	render() {
		// 解构
		let { username, intrest } = this.state;
		return (
			<div>
				{/*默认值要绑定状态*/}
				<input type="text" value={username} onChange={e => this.changeUername(e)}/>
				{/*<input type="checkbox" checked={intrest} onChange={e => this.changeIntrest(e.target.checked)}/>*/}
				<input type="checkbox" checked={intrest} onChange={e => this.setState({intrest: e.target.checked})}/>
				<button onClick={this.showResult.bind(this)}>获取数据</button>
				<button onClick={e => this.changeValue(e)}>修改数据</button>
			</div>
		)
	}
}
// 渲染组件
render(<Demo></Demo>, app)