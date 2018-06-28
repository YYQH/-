// 引入库
import React, { Component } from 'react';
import { render } from 'react-dom';
// 引入异步请求库
import axios from 'axios';
// 引入组件
import Banner from '../../components/banner/banner.jsx';
import Content from '../../components/content/content.jsx';

export default class Start extends Component {
	// 初始化状态
	constructor(props) {
		super(props);
		// 状态
		this.state = {
			data: []
		}
	}
	render() {
		return (
			<div className="app-start" style={{display: this.props.style}}>
				<Banner title="起步" intro="简要介绍 Bootstrap，以及如何下载、使用，还有基本模版和案例，等等。"></Banner>
				<Content data={this.state.data}></Content>
			</div>
		)
	}
	// 组件创建完成，请求数据
	componentDidMount() {
		// 请求数据
		axios.get('data/start.json')
			// 监听数据返回
			.then(({ data }) => this.setState({ data }))
	}
}