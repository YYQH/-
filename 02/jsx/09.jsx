// 引入相关库
import React, { Component } from 'react';
import { render } from 'react-dom';

// 非约束性单选下拉框
// class Demo extends Component {
// 	// 查看数据
// 	showResult() {
// 		// 2 通过this.refs获取数据
// 		// 3 通过元素获取值
// 		console.log(this.refs.color.value)
// 	}
// 	// 修改数据
// 	changeValue() {
// 		// 1 设置ref
// 		// 2 获取元素
// 		// 3 通过元素，修改数据
// 		this.refs.color.value = 'isRed'
// 	}
// 	// 渲染方法
// 	render() {
// 		return (
// 			<div>
// 				{/*通过defaultValue定义默认值*/}
// 				<select ref="color" defaultValue="isGreen">
// 					{/*选项一旦定义value值，value就不再是默认值了*/}
// 					<option value="isRed">red</option>
// 					<option value="isGreen">green</option>
// 					<option value="isBlue">blue</option>
// 				</select>
// 				<button onClick={this.showResult.bind(this)}>获取数据</button>
// 				<button onClick={e => this.changeValue(e)}>修改数据</button>
// 			</div>
// 		)
// 	}
// }
// 约束性单选下拉框
// class Demo extends Component {
// 	// 定义状态数据
// 	constructor(props) {
// 		super(props);
// 		this.state = {
// 			color: 'isBlue'
// 		}
// 	}
// 	// 查看数据
// 	showResult() {
// 		console.log(this.state.color)
// 	}
// 	// 修改数据
// 	changeValue() {
// 		this.setState({
// 			color: 'isRed'
// 		})
// 	}
// 	// 渲染方法
// 	render() {
// 		return (
// 			<div>
// 				{/*选项一旦定义value值，value就不再是默认值了*/}
// 				<select value={this.state.color} onChange={e => this.setState({color: e.target.value})}>
// 					<option value="isRed">red</option>
// 					<option value="isGreen">green</option>
// 					<option value="isBlue">blue</option>
// 				</select>
// 				<button onClick={this.showResult.bind(this)}>获取数据</button>
// 				<button onClick={e => this.changeValue(e)}>修改数据</button>
// 			</div>
// 		)
// 	}
// }

// 非约束性多选下拉框
class Demo extends Component {
	// 查看数据
	showResult() {
		// 获取所有选项
		let options = this.refs.color.options
		// console.log(options)
		// 结果
		let result = []
		// 遍历选项
		for (let i = 0; i < options.length; i++) {
			// 如果选项被选中，
			if (options[i].selected) {
				// 我们要存储选项的值
				result.push(options[i].value)
			}
		}
		// 查看结果
		console.log(result)
	}
	// 修改数据
	changeValue() {
		// 定义选中的结果
		let choose = ['isRed', 'isGreen'];
		// 获取所有选项
		let options = this.refs.color.options;
		// 遍历选项
		// for (let i = 0; i < options.length; i++) {
		// 	// 遍历choose数组，查看option选项值是否存在
		// 	if (choose.indexOf(options[i].value) >= 0) {
		// 		options[i].selected = true;
		// 	// 否则不存在，设置false
		// 	} else {
		// 		options[i].selected = false;
		// 	}
			
		// }
		// 遍历选项
		ickt: for (let i = 0; i < options.length; i++) {
			// 遍历choose数组
			for (let j = 0; j < choose.length; j++) {
			// console.log(i, j, options[i].value , choose[j])
				// 如果第i个option与第j个choose成员值相等，我们找到这个选项了，设置为选中态
				if (options[i].value === choose[j]) {
					// 设置为选中态
					options[i].selected = true;
					// 遍历下一个option
					continue ickt;
					// break;
				}
			}
			// console.log(111, i)
			// 遍历完choose，发现没有该选项的值，此时选项就是未选中的，我们要设置成未选中
			options[i].selected = false;
		}
	}
	// 渲染方法
	render() {
		return (
			<div>
				{/*通过defaultValue定义默认值*/}
				<select ref="color" multiple defaultValue={['isGreen', 'isBlue']}>
					{/*选项一旦定义value值，value就不再是默认值了*/}
					<option value="isRed">red</option>
					<option value="isGreen">green</option>
					<option value="isBlue">blue</option>
				</select>
				<button onClick={this.showResult.bind(this)}>获取数据</button>
				<button onClick={e => this.changeValue(e)}>修改数据</button>
			</div>
		)
	}
}

// 约束性多选下拉框
// class Demo extends Component {
// 	// 定义状态数据
// 	constructor(props) {
// 		super(props);
// 		this.state = {
// 			color: ['isRed', 'isGreen']
// 		}
// 	}
// 	// 查看数据
// 	showResult() {
// 		console.log(this.state.color)
// 	}
// 	// 修改数据
// 	changeValue(e) {
// 		// console.log(e.target.value)
// 		// 遍历所有的选项，找出选中的选项，将其值存储在状态中
// 		let options = e.target.options;
// 		// 选项的值
// 		let color = [];
// 		// 4中判断数组方式 1 instanceof Array 2 constructor === Array 3 Object.prototype.toString.call [objct Array]  4 isArray
// 		// console.log(Array.isArray(options))
// 		// 遍历
// 		for (let i = 0; i < options.length; i++) {
// 			// 选项是否被选中
// 			if (options[i].selected) {
// 				// 存储选项的值
// 				color.push(options[i].value)
// 			}
// 		}
// 		// 更新状态
// 		this.setState({ color })
// 	}
// 	changeColorValue() {
// 		// 修改状态值
// 		this.setState({
// 			color: ['isRed', 'isBlue']
// 		})
// 	}
// 	// 渲染方法
// 	render() {
// 		return (
// 			<div>
// 				{/*选项一旦定义value值，value就不再是默认值了*/}
// 				<select multiple value={this.state.color} onChange={this.changeValue.bind(this)}>
// 					<option value="isRed">red</option>
// 					<option value="isGreen">green</option>
// 					<option value="isBlue">blue</option>
// 				</select>
// 				<button onClick={this.showResult.bind(this)}>获取数据</button>
// 				<button onClick={e => this.changeColorValue(e)}>修改数据</button>
// 			</div>
// 		)
// 	}
// }

// 渲染组件
render(<Demo></Demo>, app)