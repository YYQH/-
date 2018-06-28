// 引入相关库
import React, { Component } from 'react';
// 引入jquery
import jQuery from 'jquery';
// 引入axios
import axios from 'axios';
import { render } from 'react-dom';
// console.log(axios)
// 定义常量
const $ = jQuery;

// 定义组件
class News extends Component {
	// 定义默认状态数据
	constructor(props) {
		super(props);
		this.state = {
			// 将属性中的数据转换成状态
			list: this.props.data
		}
	}
	// 创建新闻列表的方法
	createList() {
		return this.state.list.map((item, index) => {
			// 列表要添加key
			return <li style={{
				background: 'pink'
			}} key={index}>{item}</li>
		})
	}
	// 点击推荐按钮，显示新的信息
	showMessage() {
		// 可以通过axios更新数据
		axios.get('data/data.json')
			// 在外部写回调, 参数解构，参数集合不能省略
			.then(({ data }) => this.setState({ list: data }))
		// 缓存this
		// let me = this;
		// 发送异步请求
		// $.get('data/data.json')
			// 监听返回
			// .then(list => this.setState({ list }))
			// .then(list => {
			// 	// console.log(res)
			// 	// 将返回的数据，放在状态中，即可渲染
			// 	this.setState({ list })
			// })
			// ES5
			// .then(function() {}.bind(this))
	}
	// 渲染新闻
	render() {
		return (
			<div>
				<span onClick={this.showMessage.bind(this)}>推荐</span>
				<ul>{this.createList()}</ul>
			</div>
		)
	}
	// 组件渲染完成，我们将li的背景色改成绿色
	componentDidMount() {
		// $('li').css('background', 'green')
	}
	// 存在期再次更新即可
	componentDidUpdate() {
		// $('li').css('background', 'green')
	}
}
// 渲染组件
render(<News data={[
	'乞丐有两套房月入过万 自称地铁老大',
	'妻子被艳照要挟 丈夫相救她却再次出轨',
	'业主买房后进不了门 开发商：补交50万'
]}></News>, app)