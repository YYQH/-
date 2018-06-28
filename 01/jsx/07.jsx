// 引入核心库和渲染库
import React, { Component } from 'react';
import { render } from 'react-dom';

// 定义组件
class Nav extends Component {
	// 渲染li的方法
	renderList() {
		// return [<li>{this.props.data[0]}</li>,
		// 		<li>{this.props.data[1]}</li>,
		// 		<li>{this.props.data[2]}</li>];
		// 根据map方法，将data数据映射成虚拟DOM数组
		return this.props.data.map(function(item, index) {
			// 返回虚拟DOM
			return <li key={index}>{item + '111'}</li>
		})
	}
	// 定义渲染的方法
	render() {
		// {[<li>{this.props.data[0]}</li>,
		// 		<li>{this.props.data[1]}</li>,
		// 		<li>{this.props.data[2]}</li>]}
		console.log(this)
		// 返回值是渲染的结果
		return (
			<ul>
				{// 单行注释
				}
				{/*
				 * 多行注释
				 */}
				
				{/*如果有一个方法，能更具数组，映射一个虚拟DOM数组，我们就不需要一边一边的写li了*/} 
				{this.renderList()}

			</ul>
		)
	}
}
// 定义默认属性数据
Nav.defaultProps = {
	data: ['默认数据']
}
// 定义两组数据
let arr1 = ['新浪新闻', '腾讯新闻', '百度新闻'];
let arr2 = ['淘宝网', '苏宁易购', '今日特价'];
// 渲染组件
render(<Nav data={arr1}></Nav>, app1)
render(<Nav data={arr2} />, app2)
render(<Nav />, app2)