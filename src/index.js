import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'regenerator-runtime/runtime';
import {createStore} from "redux";
import initialReducer from './reducers/initialReducer';
import {Provider} from "react-redux";

const store = createStore(initialReducer)

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

module.hot.accept();
