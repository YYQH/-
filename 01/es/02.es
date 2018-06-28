// 基于ES Module规范使用react
// import React from "react";
// 可以解构createElement方法
// let { createElement } = React;

// 引入的之后即解构
import { createElement } from 'react';
// 引入渲染库
import { render } from 'react-dom';


let h1 = createElement('h1', {
	// 添加属性
	title: '安徽电信',
	id: 'ickt'
}, '安徽电信培训')

// console.log(h1)
// 渲染虚拟DOM
render(h1, document.getElementById('app'))

// console.log(React);