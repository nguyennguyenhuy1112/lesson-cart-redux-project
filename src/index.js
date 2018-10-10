import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore} from 'redux'; //import store
import appReducers from './reducers/index'; //import 
import {Provider} from 'react-redux'; //khai báo provider

//tạo ra store
const store = createStore(
    appReducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

//phải khai báo provider để cấp store cho thằng App (Provider bọc App lại)
ReactDOM.render(
    <Provider store = {store}>
        <App />
    </Provider>,
    document.getElementById('root'));
serviceWorker.unregister();
