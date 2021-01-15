import React from 'react';
import ReactDOM, { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/app';
import { store } from './reducers';
import './style.less';

render(
    <Provider store={store}>
        <App />
    </Provider>
    ,
    document.getElementById('root'));