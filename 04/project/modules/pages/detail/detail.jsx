import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// 引入axios库
import axios from 'axios';
// 引入less
import './detail.less';

// 定义组件并暴露接口
export default class Detail extends Component {
	// 构造函数
	constructor(props) {
		super(props);
		// 定义状态
		this.state = {
			data: {}
		}
	}
	render() {
		// console.log(this.props)
		// 解构数据
		let { data } = this.state
		return (
			<div className="app-detail">
				<h1>{data.title}</h1>
				<div className="status">
					<span className="time">{data.time}</span>
					<span className="comments">{'评论:' + data.comment}</span>
				</div>
				<img src={data.img} alt=""/>
				<p dangerouslySetInnerHTML={{ __html: data.content }}></p>
				<Link to={'/comments/' + data.id} className="btn">查看更多评论</Link>
			</div>
		)
	}
	// 组件创建完成，请求数据
	componentDidMount() {
		// 请求数据, 携带新闻id
		// axios.get('data/detail.json', {
		// 	params: {
		// 		id: this.props.match.params.id
		// 	}
		// })
		axios.get('data/detail.json?id=' + this.props.match.params.id)
			// 接收数据
			.then(({ data }) => this.setState({ data }))
	}
}