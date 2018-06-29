// 引入库
import React, { Component } from 'react';
import { render } from 'react-dom';

// 定义混合类
class ListMixin extends Component {
	// 渲染列表
	createList() {
		return this.props.data.map((item, index) => {
			return <li key={index}>{item}</li>
		})
	}
}


// 定义首页组件
// 组件类继承混合类
class Home extends ListMixin {
	render() {
		return (
			<div>
				<h2>Home page</h2>
				<ul>{this.createList()}</ul>
			</div>
		)
	}
}

// 定义list组件
class List extends ListMixin {
	render() {
		return (
			<div>
				<h2>list page</h2>
				<ul>{this.createList()}</ul>
			</div>
		)
	}
}

render(<Home data={["不能去了！九寨沟景区7月1日起关闭", "书记：若你丈夫对你不好 我找人做了他", "现场画面：长征火箭残骸坠落贵州爆炸"]}></Home>, app)
render(<List data={["比利时1-0胜英格兰进死亡半区！", "世界杯第一欢乐男！踢球自虐 这一幕...", "小组赛最佳阵:C罗携凯恩 魔笛库鸟领衔", "中国男足饮食曝光 难怪进不了世界杯！"]}></List>, app2)
