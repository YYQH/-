// 引入相关库
import React, { Component } from 'react';
import { render } from 'react-dom';

// 定义组件
class Demo extends Component {
	// 初始化状态数据
	constructor(props) {
		// 构造函数继承
		super(props);
		// 初始化状态
		this.state = {
			// 显示的新闻索引
			num: 0
		}
	}
	// 创建字列表
	createChildItem(arr) {
		// 根据数组创建列表
		return arr.map((item, index) => {
			return <span key={index}>{item}</span>
		})
	}
	// 创建每一行列表
	createList() {
		let len = this.props.data.length;
		// 遍历属性数据
		return this.props.data.map((item, index) => {
			// 列表要设置key
			// 根据index和num值决定到底应该显示哪一个
			return <li key={index} style={{
				display: index === this.state.num % len ? 'block' : 'none'
			}}>{this.createChildItem(item)}</li>
		})
	}
	// 切换li
	toggleLi() {
		// 更新num数据
		this.setState({
			num: ++this.state.num
		})
	}
	render() {
		// console.log(this)
		// 渲染
		return (
			<div>
				<span onClick={this.toggleLi.bind(this)}>换一换</span>
				<ul>{this.createList()}</ul>
			</div>
		);
	}
}

// 渲染
render(<Demo data={[
	['11岁身高2.06米'],
	['大阪惊现神秘文字'],
	['中国船队夺总冠军'],
	['林心如晒素颜'],
	['景区发布谢客令'],
	['韩足协抗议FIFA']
]}></Demo>, app)
render(<Demo data={[
	['2018国际禁毒日', '英美欧央行分歧'],
	['小米集团出现抽飞', '罗志祥周扬青试婚'],
	['深圳惊现龙吸水', '马拉多纳被送医院']
]}></Demo>, app2)