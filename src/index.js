import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import configStore from './store'
import Index from './pages/index'
import 'antd-mobile/dist/antd-mobile.css';

const store = configStore()
ReactDOM.render(
  <Provider store={store}>
    <div>
      <Index/>
    </div>
  </Provider>
  , document.getElementById('root'));
