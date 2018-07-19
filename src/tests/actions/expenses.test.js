import {addExpense, removeExpense, editExpense} from '../../actions/expenses';

test('Remove expense shawl return a action object', () => {
    const result = removeExpense({id: 15});
    expect(result).toEqual({type: 'REMOVE_EXPENSE', idRemove: 15});
})

test('Shawl return a object action', () => {
    const result = editExpense(15, {description: 'feijão', amount: 15});
    expect(result).toEqual({
        type: 'EDIT_EXPENSE', 
        id: 15, 
        updates: {description: 'feijão', amount: 15}})
})

test('add Expense must return a object', () => {
    const ExpenseData = {
        description: 'coffe', 
        amount: 15, 
        createdAt: 1000,
        note: 'lest criation'
    };
    const result = addExpense(ExpenseData);
    expect(result).toEqual({
        type: 'ADD_EXPENSE', 
        expense: {
            ...ExpenseData,
            id: expect.any(String)
        }
    });
})

test('should generate the action to add a expense with default values', () => {
    const result = addExpense();
    expect(result).toEqual({type: 'ADD_EXPENSE', expense: {
        description: '', 
        amount: 0, 
        note: '',
        createdAt: 0,
        id: expect.any(String)
    }});
})