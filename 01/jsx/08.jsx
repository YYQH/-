// 引入核心库和渲染库
import React, { Component } from 'react';
import { render } from 'react-dom';

// 定义组件
class Demo extends Component {
	// 定义渲染的方法
	render() {
		console.log(this)
		// 样式对象
		let divStyle = {
			background: 'green'
		}
		// 设置内容
		let html = '<a href="">安徽电信</a>'
		let html2 = '<a style="color: pink" href="">安徽电信</a>'
		// 返回值是渲染的结果
		return (
			<div style={divStyle} className="red">
				<label htmlFor="username" style={{
					color: 'red'
				}}>用户名</label>
				{/*获取元素*/}
				<input id="username" ref="inp" type="text"/>
				<h1>{html}</h1>
				<h2 dangerouslySetInnerHTML={{
					__html: html2
				}}></h2>
			</div>
		)
	}
	// 组件创建完成
	componentDidMount() {
		console.log(this.refs.inp)
	}
}
// 定义默认属性
Demo.defaultProps = {
	color: 'red'
}
// 渲染组件
render(<Demo></Demo>, app)