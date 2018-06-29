// 引入react
import React, { Component } from 'react';
// 引入路由模块
import { Switch, Route } from 'react-router-dom';
// 引入页面组件
import Home from '../pages/home/home.jsx';
import Detail from '../pages/detail/detail.jsx';
import Comments from '../pages/comments/comments.jsx';

// 定义组件
export default class App extends Component {
	render() {
		return (
			<div>
				<h1>App</h1>
				{/* 第一步 定义渲染位置 */}
				<Switch>
					{/*详情页*/}
					<Route path="/detail/:id" component={Detail}></Route>
					{/*评论页*/}
					<Route path="/comments/:id" component={Comments}></Route>
					{/*首页*/}
					<Route path="*" component={Home}></Route>
				</Switch>
			</div>
		)
	}
}