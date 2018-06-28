// 引入库
import React, { Component } from 'react';
import { render } from 'react-dom';
// 一个子组件输入，一个子组件显示
// 父组件
class Parent extends Component {
	// 定义状态
	constructor(props) {
		super(props);
		this.state = {
			msg: ''
		}
	}
	// 定义方法
	parentMethod(msg) {
		// 更新状态
		this.setState({msg})
	}
	// 渲染
	render() {
		return (
			<div>
				{/*传递的方法要绑定状态*/}
				{/*<Child method={this.parentMethod.bind(this)}></Child>*/}
				<Child method={msg => this.setState({msg})}></Child>
				{/*将状态传递给另一个组件*/}
				<Other msg={this.state.msg}></Other>
			</div>
		)
	}
}
// 子组件
class Child extends Component {
	// 渲染
	render() {
		return (
			<div>
				{/*当用户输入的时候，更新状态*/}
				<input type="text" onChange={e => this.props.method(e.target.value)} />
			</div>
		)
	}
}
// 另一个子组件
class Other extends Component {
	// 渲染
	render() {
		return (
			<div>
				<h1>{this.props.msg}</h1>
			</div>
		)
	}
}
// 渲染父组件
render(<Parent></Parent>, app)