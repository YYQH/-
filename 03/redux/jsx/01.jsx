// 移入react创建三个组件
import React, { Component } from 'react';
import { render } from 'react-dom';
// 引入redux
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';
// console.log(ReactRedux)

// 定义消息名称
const ADD = 'ADD';
const REDUCE = 'REDUCE';

// 定义调度者
function redcer(state = 0, action) {
	// 根据消息类型，修改数据
	switch (action.type) {
		case ADD: 
			return state + action.num;
		case REDUCE:
			return state - action.num;
	}
	// 返回state
	return state;
}

// 创建store
let store = createStore(redcer)




// 显示数据的组件
class ShowChild extends Component {
	// constructor(props) {
	// 	super(props)
	// 	this.state = {
	// 		num: 0
	// 	}
	// }
	render() {
		return (
			<div>
				<h1>{'show： ' + this.props.state}</h1>
			</div>
		)
	}
	// 组件构建完成
	// componentDidMount() {
	// 	// 监听消息
	// 	store.subscribe(() => this.setState({num: store.getState()}))
	// }
}
// 修改数据的组件
class ChangeChild extends Component {
	render() {
		return (
			<div>
				{/*<button onClick={e => store.dispatch({type: ADD, num: 10})}>增加10</button>*/}
				<button onClick={e => this.props.dispatch({ type: ADD, num: 10 })}>增加10</button>
				<button onClick={e => this.props.reduceNum(2)}>减少2</button>
			</div>
		)
	}
}
// 定义组件
class App extends Component {
	render() {
		// console.log(this.props)
		// 将属性解构，传递给组件
		let { state, dispatch, reduceNum } = this.props;
		return (
			<div>
				<ShowChild state={state}></ShowChild>
				<ChangeChild dispatch={dispatch} reduceNum={reduceNum}></ChangeChild>
			</div>
		)
	}
}

// 定义传递state的方式
function mapStateToProps(state) {
	// 将state直接传递给组件的属性对象
	return {
		state
	}
}
// 定义传递dispatch方法的方式
function mapDispatchToProps(dispatch) {
	// 将dispatch方法直接传递给组件
	return {
		dispatch,
		// 定义方法
		reduceNum(num) {
			// 构建消息对象
			dispatch({ type: REDUCE, num })
		}
	}
}
// 对app组件拓展
const DealApp = connect(mapStateToProps, mapDispatchToProps)(App)

// 渲染处理后的DealApp组件
// 通过Provider为组件添加store对象
render(
	<Provider store={store}>
		<DealApp></DealApp>
	</Provider>
, app)