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
		// 解构数据
		let { style, title, intro } = this.props;
		return (
			<div className="app-page" style={{display: style}}>
				<Banner title={title} intro={intro}></Banner>
				<Content data={this.state.data}></Content>
			</div>
		)
	}
	// 组件创建完成，
	componentDidMount() {
		// 我们请求数据
		axios.get(this.props.url)
			// 监听返回，并存储数据
			.then(({ data }) => this.setState({ data }))

	}
}