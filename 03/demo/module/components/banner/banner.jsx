// 引入库
import React, { Component } from 'react';
import { render } from 'react-dom';
import './banner.less';

// 定义组件并暴露接口
export default class Banner extends Component {
	render() {
		return (
			<div className="app-banner">
				<div className="container">
					<h1>{this.props.title}</h1>
					<p>{this.props.intro}</p>
				</div>
			</div>
		)
	}
}