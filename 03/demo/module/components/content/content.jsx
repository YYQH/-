// 引入库
import React, { Component } from 'react';
import { render } from 'react-dom';
// 引入两个组件
import Article from '../article/article.jsx';
import Slider from '../slider/slider.jsx';

// 定义组件并暴露接口
export default class Content extends Component {
	render() {
		// console.log(this.props.data)
		// 将数据分发
		return (
			<div className="container">
				<Slider data={this.props.data}></Slider>
				<Article data={this.props.data}></Article>
			</div>
		)
	}
}