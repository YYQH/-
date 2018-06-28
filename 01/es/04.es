// 引入的之后即解构
import React, { Component, createElement } from 'react';
// 引入渲染库
import { render } from 'react-dom';
// console.log(React)
// 创建列表
// let ul = createElement(
// 	'ul', 
// 	null, 
// 	// 创建三个li虚拟DOM
// 	createElement('li', null, '教你理财'),
// 	createElement('li', null, '天猫购物季'),
// 	createElement('li', null, '热门房源')
// ) 
// 定义组件
class Nav extends Component {
	// 通过render方法渲染组件的虚拟DOM
	render() {
		// 返回值就是渲染的虚拟DOM
		return createElement(
			'ul', 
			null, 
			// 创建三个li虚拟DOM
			createElement('li', null, '教你理财1'),
			createElement('li', null, '天猫购物季1'),
			createElement('li', null, '热门房源1')
		) 
	}
}
// 将组件转换成虚拟DOM
let nav = createElement(Nav);
// 渲染虚拟DOM
render(nav, app)
// 实例化组件
let nav2 = createElement(Nav);
// 渲染虚拟DOM
render(nav2, app2)