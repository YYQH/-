// 引入库
import React, { Component } from 'react';
import { render } from 'react-dom';
import { Switch, Route, HashRouter, Link, Redirect, BrowserRouter } from 'react-router-dom';
// 引入redex
import { createStore, combineReducers } from 'redux';
// 引入react-redux
import { connect, Provider } from 'react-redux';
// 引入处理路由的调度者
import { routerReducer } from 'react-router-redux';
// 定义消息名称
const ADD = 'ADD';
// 定义调度者
function reducer(state = 0, action) {
	if (action.type === ADD) {
		return state += action.num
	}
	return state;
}
// 创建store
let store = createStore(
	combineReducers({
		num: reducer,
		routerReducer
	})
);
class ShowChild extends Component {
	render() {
		// console.log(this.props)
		return <h3>show: {this.props.state}</h3>
	}
}
class ChangeChild extends Component {
	render() {
		// console.log(this.props)
		return <button onClick={e => this.props.dispatch({ type: ADD, num: 10 })}>点击改变</button>
	}
}
// 定义组件
class App extends Component {
	// 渲染
	render() {
		// console.log(this.props)
		let {state, dispatch} = this.props;
		return (
			<div>
				<h2>应用程序组件</h2>
				<ShowChild state={state.num}></ShowChild>
				<ChangeChild dispatch={dispatch}></ChangeChild>
				{/*第一步定义路由渲染位置*/}
				<Switch>
					{/*列表页，页码是动态改变的*/}
					<Route path="/list/:page" component={DealList}></Route>
					{/*详情页,商品的id是可变的*/}
					<Route path="/detail/:id" component={Detail}></Route>
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
		console.log(123, this.props)
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

// 对应用程序APP拓展store属性和方法
function mapStateToProps(state) {
	return { state }
}
function mapDispatchToProps(dispatch) {
	return { dispatch }
}
// 为应用程序组件APP拓展
let DealApp = connect(mapStateToProps, mapDispatchToProps)(App)
// 为List添加store中是信息
let DealList = connect(mapStateToProps, mapDispatchToProps)(List)
// 第二步 定义渲染策略
let routes = (
	<HashRouter>
		<Route path="/" component={DealApp}></Route>
		{/*<DealApp></DealApp>*/}
	</HashRouter>
)
// 渲染路由规则
render(
	// 渲染应用程序, 为应用程序提供store
	<Provider store={store}>
		{routes}
	</Provider>
	, app)