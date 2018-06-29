import React, { Component } from 'react';
// 引入Link
import { Link } from 'react-router-dom';
// 引入请求库
import axios from 'axios';
import './home.less'

// 定义组件并暴露接口
export default class Home extends Component {
	// 初始化状态
	constructor(props) {
		super(props);
		// 初始化状态
		this.state = {
			data: []
		}
	}
	// 创建新闻列表
	createList() {
		return this.state.data.map((item, index) => {
			return (
				<li key={index}>
					{/*<a className="home-list-container" href={'#/detail/' + item.id}></a>*/}
					{/*Link不能携带#*/}
					<Link className="home-list-container" to={'/detail/' + item.id}>
						<img src={item.img} alt=""/>
						<div className="content">
							<h3>{item.title}</h3>
							<p>
								<span>{item.content}</span>
								<span className="home-comments">{'评论:' + item.comment}</span>
							</p>
						</div>
					</Link>
				</li>
			)
		})
	}
	render() {
		return (
			<div className="app-home">
				<ul>{this.createList()}</ul>
			</div>
		)
	}
	// 组件创建完成，我们请求数据
	componentDidMount() {
		// 请求数据
		axios.get('data/list.json')
			// 监听数据返回
			.then(({ data }) => this.setState({ data }))
	}
}