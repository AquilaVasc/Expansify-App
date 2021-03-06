import React from 'react';
import {shallow} from 'enzyme';
import {AddExpensePage} from '../../components/AddExpensePage';
import expenses from '../fixtures/expenses';

let addExpenseSpy, history, wrapper;
beforeEach(() => {
    addExpenseSpy = jest.fn();
    history = {
        push: jest.fn()
    };
    wrapper = shallow(<AddExpensePage addExpense={addExpenseSpy} history={history}/>);
});

test('should add expense page correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should hendle on submit', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[0]);
    expect(addExpenseSpy).toHaveBeenLastCalledWith(expenses[0]);
    expect(history.push).toHaveBeenCalledWith('/');
});