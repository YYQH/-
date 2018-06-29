// 引入react
import React, { Component } from 'react';
// 引入样式
import './header.less';
// 创建组件
export default class Header extends Component {
	// 渲染
	render() {
		return (
			<div className="app-header">
				<div className="go-back">
					<span className="arrow">
						<span className="arrow blue"></span>
					</span>
				</div>
				<div className="login">登录</div>
				<h1>安徽电信新闻平台</h1>
			</div>
		)
	}
}