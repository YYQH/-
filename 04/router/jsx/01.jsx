// 引入库
import React, { Component } from 'react';
import { render } from 'react-dom';
import { Switch, Route, HashRouter, Link, Redirect, BrowserRouter } from 'react-router-dom';

// 定义组件
class App extends Component {
	// 渲染
	render() {
		return (
			<div>
				<h2>应用程序组件</h2>
				<Link to="/list/1">进入列表页</Link>
				<br/>
				<Link to="/detail/1">进入详情页</Link>
				<br/>
				<Link to="/">首页</Link>
				{/*第一步定义路由渲染位置*/}
				<Switch>
					{/*列表页，页码是动态改变的*/}
					<Route path="/list/:page" component={List}></Route>
					{/*详情页,商品的id是可变的*/}
					<Route path="/detail/:id" component={Detail}></Route>
					{/*输入ickt进入列表页的第二页*/}
					<Redirect from="/ickt" to="/list/2"></Redirect>
					{/*默认路由，输入其他的，我们都想进入首页*/}
					<Route path="*" component={Home}></Route>
				</Switch>
			</div>
		)
	}
}
// home
class Home extends Component {
	// 渲染
	render() {
		return <h1>home page</h1>
	}
}
// list
class List extends Component {
	// 渲染
	render() {
		// 将页码渲染出来
		// console.log(this.props)
		return (
			<div>
				<h1>list page : {this.props.match.params.page}</h1>
				<Demo match={this.props.match}></Demo>
			</div>
		)
	}
}
class Demo extends Component {
	// 渲染
	render() {
		// 将页码渲染出来
		console.log('demo', this.props)
		return <h3>demo page </h3>
	}
}

// detail
class Detail extends Component {
	// 渲染
	render() {
		return <h1>detail page</h1>
	}
}

// 第二步 定义渲染策略
let routes = (
	<HashRouter>
		<App></App>
	</HashRouter>
)
// 渲染路由规则
render(routes, app)