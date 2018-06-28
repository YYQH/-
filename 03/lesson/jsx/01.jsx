// 引入库
import React, { Component } from 'react';
import { render } from 'react-dom';
// 定义父组件
class Parent extends Component {
	// 定义状态
	constructor(props) {
		super(props);
		// 状态
		this.state = {
			msg: ''
		}
	}
	// 父组件方法
	parentMethod(msg) {
		// 3 更新状态
		this.setState({ msg })
	}
	// 渲染
	render() {
		return (
			<div>
				<h1>{this.state.msg}</h1>
				{/*1 向子组件传递方法，并绑定父组件作用域*/}
				<Child method={this.parentMethod.bind(this)}></Child>
			</div>
		)
	}
}
// 子组件
class Child extends Component {
	// 子组件方法中，使用父组件方法
	childMethod(e) {
		// 使用父组件方法，并传递子组件中，input输入的内容
		this.props.method(e.target.value)
	}
	// 渲染
	render() {
		return (
			<div>
				{/*<input onChange={e => this.props.method(e.target.value)} type="text"/>*/}
				<input onChange={this.childMethod.bind(this)} type="text"/>
			</div>
		)
	}
}
// 渲染父组件
render(<Parent></Parent>, app)