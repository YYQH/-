// 引入redux
import { createStore } from 'redux';
// 工作中，我们通常将消息名称定义成常量
const ADD = 'ADD';
const REDUCE = 'REDUCE';
// 定义调度者函数
function reducers(state = 0, action) {
	// 一会会根据action处理state
	switch (action.type) {
		// 增加数字消息
		case ADD:
			return state += action.num
		// 减少数字消息
		case REDUCE: 
			return state -= action.num
	}
	// console.log(action)
	return state;
}
// console.log(Redux)
// 创建store
let store = createStore(reducers)
// 监听要在发布之前, 当state发生改变的时候，我们要输出state
store.subscribe(() => console.log(store.getState()))
// 得到store
// console.log(store)
// 创建消息对象
let AddAction = { type: ADD, num: 5 };
let ReduceAction = { type: REDUCE, num: 10 };
// 发布消息
store.dispatch(AddAction)
store.dispatch(AddAction)
store.dispatch(AddAction)
store.dispatch(ReduceAction)
