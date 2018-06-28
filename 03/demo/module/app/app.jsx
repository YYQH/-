// 引入库
import React, { Component } from 'react';
import { render } from 'react-dom';
// 引入组件属性类型
import PropTypes from 'prop-types';
// 引入header组件
import Header from "../components/header/header.jsx"
// 引入页面组件
import Home from '../pages/home/home.jsx';
import Start from '../pages/start/start.jsx';
import './app.less';
// console.log(PropTypes)

// 定义页面组件并暴露出来
export default class App extends Component {
	// 初始化状态
	constructor(props) {
		super(props)
		// 定义页面状态
		let page = {
			home: 'none',
			start: 'none',
			css: 'none',
			component: 'none',
			js: 'none',
			marker: 'none',
		}
		// 根据属性修改状态
		page[this.props.page] = 'block'
		// 状态
		this.state = { page }
	}
	// 获取选中的页面
	getChoosePage() {
		// 解构数据
		let { page } = this.state;
		// 遍历状态，找到选中的页面
		for (var i in page) {
			// 如果属性值为block，就是选中的
			// i表示属性名称,就是页面名称，page[i]表示属性值
			if (page[i] === 'block') {
				// 找到页面了，返回页面名称
				return i;
			}
		}
	}
	// 切换页面方法
	togglePage(id) {
		// console.log('parent', id)
		// 父组件根据id，更新状态，排他法设置
		// 所有页面隐藏
		let { page } = this.state;
		for (let key in page) {
			// 隐藏页面
			page[key] = 'none';
		}
		// 设置选中的页面
		page[id] = 'block';
		// 更新状态
		this.setState({ page })
	}
	render() {
		// 解构
		let { home, start, css, component, js, marker } = this.state.page;
		return (
			<div>
				{/*子组件向父组件通信，父组件向子组件通信*/}
				<Header page={this.getChoosePage()} method={this.togglePage.bind(this)}></Header>
				<Home style={home}>首页</Home>
				<Start style={start}>起步</Start>
				<h1 style={{display: css}}>全局 CSS 样式</h1>
				<h1 style={{display: component}}>组件</h1>
				<h1 style={{display: js}}>JavaScript 插件</h1>
				<h1 style={{display: marker}}>定制</h1>
			</div>
		)
	}
}
// 默认属性数据
// App.defaultProps = {
// 	page: 'home'
// }
// 约束类型
App.propTypes = {
	// 约束属性类型，是必填的
	page: PropTypes.string.isRequired
}