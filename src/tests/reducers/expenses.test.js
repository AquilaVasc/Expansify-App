import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should set default state', () => {
    const state = expensesReducer(undefined, {type: '@@INIT'});
    expect(state).toEqual([]);
});

test('should remove expense by id', () => {
    const state = expensesReducer(expenses, {type: 'REMOVE_EXPENSE', idRemove: '1'});
    expect(state).toEqual([expenses[1], expenses[2]]);
});

test('should not remove expense if id not found', () => {
    const state = expensesReducer(expenses, {type: 'REMOVE_EXPENSE', idRemove: '4'});
    expect(state).toEqual(expenses);
});

test('should add a new expense', () => {
    const state = expensesReducer(expenses, {
        type: 'ADD_EXPENSE', 
        expense: {
                    id: '4',
                    description: 'Cell Phone', 
                    note: '', 
                    amount: 200, 
                    createdAt: 0
                }
    });
    expect(state).toEqual([...expenses, {
            id: expect.any(String),
            description: 'Cell Phone', 
            note: '', 
            amount: 200, 
            createdAt: 0
    }]);
});

test('should edit expense by id', () => {
    const state = expensesReducer(expenses, {type:'EDIT_EXPENSE', id: '2', updates: {description: 'car'}});
    expect(state).toEqual([expenses[0], {...expenses[1], description:'car'},expenses[2]]);
});

test('should not edit expense if id not found', () => {
    const state = expensesReducer(expenses, {type: 'EDIT_EXPENSE', id: '5', updates:{}});
    expect(state).toEqual(expenses);
});

