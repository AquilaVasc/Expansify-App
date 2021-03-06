import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import RouterApp from './routers/RouterApp';
import {addExpense} from './actions/expenses';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import configureStore from './store/configureStore';
import 'react-dates/lib/css/_datepicker.css'

const store = configureStore();
store.dispatch(addExpense({description: 'Gas bill', amount: 4500}));
store.dispatch(addExpense({description: 'Water bill', createdAt: 1000}));
store.dispatch(addExpense({description: 'Rent', amount: 109500}));

const visibleExpenses = getVisibleExpenses(store.getState().expenses, store.getState().filters);
console.log(visibleExpenses);

const jsx = (
    <Provider store={store}>
        <RouterApp/>
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));

