// 引入库
import React, { Component } from 'react';
import { render } from 'react-dom';
// 引入组件属性类型
import PropTypes from 'prop-types';
// 引入header组件
import Header from "../components/header/header.jsx"
// 引入页面组件
import Home from '../pages/home/home.jsx';
// import Start from '../pages/start/start.jsx';
// import Css from '../pages/css/css.jsx';
// 抽象页面组件
import Page from '../pages/page/page.jsx';
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
				<Home style={home}></Home>
				<Page style={start} url="data/start.json" title="起步" intro="简要介绍 Bootstrap，以及如何下载、使用，还有基本模版和案例，等等。"></Page>
				<Page style={css} url="data/css.json" title="全局 CSS 样式" intro="设置全局 CSS 样式；基本的 HTML 元素均可以通过 class 设置样式并得到增强效果；还有先进的栅格系统。"></Page>
				<Page style={component} url="data/component.json" title="组件" intro="无数可复用的组件，包括字体图标、下拉菜单、导航、警告框、弹出框等更多功能。"></Page>
				<Page style={js} url="data/js.json" title="JavaScript 插件" intro="jQuery 插件为 Bootstrap 的组件赋予了“生命”。可以简单地一次性引入所有插件，或者逐个引入到你的页面中。"></Page>
				<Page style={marker} url="data/marker.json" title="定制并下载 Bootstrap" intro="通过自定义 Bootstrap 组件、Less 变量和 jQuery 插件，定制一份属于你自己的 Bootstrap 版本吧。">定制</Page>
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