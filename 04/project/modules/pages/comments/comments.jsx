import React, { Component } from 'react';
import axios from 'axios';
// 引入样式
import './comments.less';

// 定义组件并暴露接口
export default class Comments extends Component {
	// 构造函数
	constructor(props) {
		super(props);
		// 状态
		this.state = {
			id: 0,
			list: [],
			msg: ''
		}
	}
	// 渲染列表
	createList() {
		return this.state.list.map((item, index) => {
			return (
				<li key={index}>
					<h3>{item.user}</h3>
					<p>{item.content}</p>
					<span>{item.time}</span>
				</li>
			)
		})
	}
	// 定义事件回调函数
	submitComment() {
		// 解构数据
		let { msg, list } = this.state;
		// 获取输入的内容
		// 数据检测，如果输入的全是空白符不合法，未输入不合法
		if (/^\s*$/.test(msg)) {
			// 不合法提示用户，并返回
			alert('请输入内容');
			return;
		}
		// 将数据提交给后端，并显示出结果
		// 创建时间
		let date = new Date();
		// 定义提交数据
		let obj = {
			user: '雨夜清荷',
			content: msg,
			time: `刚刚 ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
		}
		// 提交数据，显示结果
		axios.get('data/addComment.json', {
			params: obj
		})
		//监听返回
		.then(({ data }) => {
			// 如果成功，渲染视图
			if (data.errno === 0) {
				// 前面显示，在前面插入
				list.unshift(obj)
				// 后面显示，在后面插入
				// list.push(obj)
				// 更新视图
				this.setState({ list })
				// 提示用户成功
				alert('提交成功')
			}
		})


	}
	render() {
		// console.log(this.state.msg)
		return (
			<div className="app-comments">
				<div className="userinput">
					<textarea value={this.state.msg} onChange={e => this.setState({msg: e.target.value})} placeholder="文明上网,理性发言!"></textarea>
					<span className="btn" onClick={e => this.submitComment()}>提交</span>
				</div>
				<ul>{this.createList()}</ul>
			</div>
		)
	}
	// 组件创建完成，
	componentDidMount() {
		// 请求数据
		axios.get('data/comment.json', {
			// 定义query参数
			params: {
				id: this.props.match.params.id
			}
		})
		// 监听返回
		.then(({ data }) => this.setState({id: data.id, list: data.list}))
	}
}