// 引入库
import React, { Component } from 'react';
import { render } from 'react-dom';
import './article.less';

// 定义组件并暴露接口
export default class Article extends Component {
	// 渲染列表
	createList() {
		return this.props.data.map((item, index) => {
			return (
				<li key={index} id={item.id}>
					<h2>{item.title}</h2>
					<p>{item.content}</p>
				</li>
			)
		})
	}
	render() {
		return (
			<div className="app-article">
				<ul>{this.createList()}</ul>
			</div>
		)
	}
}