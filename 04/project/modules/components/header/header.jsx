// 引入react
import React, { Component } from 'react';
// 引入样式
import './header.less';
// 创建组件
export default class Header extends Component {
	// 返回上一个页面
	goBack() {
		// react的路由会存在再浏览器的历史记录中，所以可以通过浏览器的history对象更改
		history.go(-1)
	}
	// 渲染
	render() {
		return (
			<div className="app-header">
				<div className="go-back">
					<span className="arrow" onClick={e => this.goBack()}>
						<span className="arrow blue"></span>
					</span>
				</div>
				<div className="login">登录</div>
				<h1>安徽电信新闻平台</h1>
			</div>
		)
	}
}