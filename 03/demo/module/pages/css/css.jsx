// 引入库
import React, { Component } from 'react';
import { render } from 'react-dom';
// 引入异步请求库
import axios from 'axios';
// 引入组件
import Banner from '../../components/banner/banner.jsx';
import Content from '../../components/content/content.jsx';

// 定义css组件
export default class Css extends Component {
	// 初始化数据
	constructor(props) {
		super(props)
		this.state = {
			data: []
		}
	}
	render() {
		return (
			<div className="app-css" style={{display: this.props.style}}>
				<Banner title="全局 CSS 样式" intro="设置全局 CSS 样式；基本的 HTML 元素均可以通过 class 设置样式并得到增强效果；还有先进的栅格系统。"></Banner>
				<Content data={this.state.data}></Content>
			</div>
		)
	}
	// 组件创建完成，
	componentDidMount() {
		// 我们请求数据
		axios.get('data/css.json')
			// 监听返回，并存储数据
			.then(({ data }) => this.setState({ data }))

	}
}