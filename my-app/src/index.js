import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// 根实例渲染
ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
