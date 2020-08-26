import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import allReducers from './reducers'
import Product from './components/product'
import Routing from './components/routing'
import { HashRouter, Router } from 'react-router-dom/cjs/react-router-dom.min';

const store = createStore(allReducers)
console.log(store);
console.log("Store is created....");
ReactDOM.render(
  <HashRouter>
  <Provider store={store}>
    <Routing></Routing>
    </Provider></HashRouter>,
  document.getElementById('root')
);

