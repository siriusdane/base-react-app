import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import configureStore from './store';
import FooHandler from './handlers/FooHandler.jsx';
import './styles/index.scss';

const store = configureStore();

ReactDOM.render(
    <Provider store={ store }>
        <Router>
            <Route path='/' component={ FooHandler } />
        </Router>
    </Provider>,
    document.getElementById('root')
);
