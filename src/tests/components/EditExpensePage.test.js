import React from 'react';
import {shallow} from 'enzyme';
import {EditExpensePage} from '../../components/EditExpensePage';
import expenses from '../fixtures/expenses';
import { wrap } from 'module';

let removeExpenseSpy, editExpenseSpy, history, wrapper;
beforeEach(() => {
    removeExpenseSpy = jest.fn();
    editExpenseSpy = jest.fn()
    history = {push: jest.fn()};
    wrapper = shallow(
        <EditExpensePage 
            expense={expenses[0]} 
            editExpense={editExpenseSpy}
            removeExpense={removeExpenseSpy}
            history={history}
        />
    );
});

test("should render EditExpensePage correctly", () => {
    expect(wrapper).toMatchSnapshot();
});

test('should edit an expense correctly', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')({description: 'joseth'});
    expect(editExpenseSpy).toHaveBeenCalledWith(expenses[0].id, {description: 'joseth'});
    expect(history.push).toHaveBeenCalled();
});

test('should remove an expense correctly', () => {
    wrapper.find('button').prop('onClick')();
    expect(removeExpenseSpy).toHaveBeenLastCalledWith({id: expenses[0].id});
    expect(history.push).toHaveBeenCalled();
});