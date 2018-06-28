// 引入库
import React from 'react';
import { render } from 'react-dom';
// 引入应用程序，并渲染出来
import App from './app/app.jsx';

// 渲染应用程序
render(<App page="start"></App>, document.getElementById('app'))
