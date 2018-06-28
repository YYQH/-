// 引入库
import React, { Component } from 'react';
import { render } from 'react-dom';
import './slider.less';

// 定义组件并暴露接口
export default class Slider extends Component {
	// 创建列表
	createList() {
		return this.props.data.map((item, index) => {
			return (
				<li key={index}>
					<a href={'#' + item.id}>{item.title}</a>
				</li>
			)
		})
	}
	render() {
		return (
			<div className="app-slider">
				<ul>{this.createList()}</ul>
			</div>
		)
	}
}