// 引入库
import React, { Component } from 'react';
import { render } from 'react-dom';
// 引入样式
import './header.less';

// 定义组件并暴露接口
export default class Header extends Component {
	// 构造函数
	constructor(props) {
		super(props);
		// 外部接收的数据，存储到组件内部
		this.state = {
			page: {
				[this.props.page]: 'choose'
			}
		}
	}
	// 点击导航，切换页面 
	choosePage(id) {
		// 根据事件对象，获取绑定的数据，找到点击的页面
		// console.log(e.target.getAttribute('data-id'))
		// console.log(id)
		// 根据排他法。更新导航的选中态
		// 所有页面变成未选中
		let { page } = this.state;
		for (let key in page) {
			page[key] = ''
		}
		// 设置选中的页面
		page[id] = 'choose';
		// 更新状态
		this.setState({page})
		// 子组件执行方法
		this.props.method(id);
	}
	render() {
		let { start, home, css, js, component, marker } = this.state.page;
		return (
			<div className="app-header navbar navbar-static-top">
				<div className="container">
					<div className="navbar-header">
						<a href="javascript:void(0)" className="navbar-brand"  onClick={e => this.choosePage('home')}>Bootstrap</a>
					</div>
					<ul className="navbar-nav nav nav-pills pull-left">
						<li>
							<a href="javascript:void(0)" className={start} data-id="start" onClick={e => this.choosePage('start')}>起步</a>
						</li>
						<li>
							<a href="javascript:void(0)" className={css} onClick={e => this.choosePage('css')}>全局 CSS 样式</a>
						</li>
						<li>
							<a href="javascript:void(0)" className={component} onClick={e => this.choosePage('component')}>组件</a>
						</li>
						<li>
							<a href="javascript:void(0)" className={js} onClick={e => this.choosePage('js')}>JavaScript 插件</a>
						</li>
						<li>
							<a href="javascript:void(0)" className={marker} onClick={e => this.choosePage('marker')}>定制</a>
						</li>
						<li>
							<a href="javascript:void(0)">网站实例</a>
						</li>
					</ul>
					<ul className="navbar-nav nav nav-pills pull-right">
						<li>
							<a href="">Bootstrap中文网</a>
						</li>
					</ul>
				</div>
			</div>
		)
	}
}