// 引入React
import React from 'react';
import { HashRouter } from 'react-router-dom';
// 引入应用程序
import App from '../app/app.jsx';

// 第二步 确定路由渲染策略
export let routes = (
	<HashRouter>
		<App></App>
	</HashRouter>
)