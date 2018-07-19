import getVisibleExpenses from '../../selectors/expenses';
import moment from 'moment';
import expenses from '../fixtures/expenses';

test('should return a array of expeses sorted by date', () => {
    const filters = {
        text : '',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    };
    const result = getVisibleExpenses(expenses, filters);

    expect(result).toEqual([     
        {
            id: expect.any(String),
            description: 'rent', 
            amount: 135, 
            note: '', 
            createdAt: moment(0).add(4, 'days').valueOf()
        },
        {
            id: expect.any(String),
            description: 'coffee', 
            amount: 15, 
            note: '', 
            createdAt: 0
        },
        {
            id: expect.any(String),
            description: 'bike', 
            amount: 100, 
            note: '', 
            createdAt: moment(0).subtract(4, 'days').valueOf()
        }
    ]);
});

test('should return a array just with one object filtered by text', () => {
    const filters = {
        text : 'rent',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined 
    };
    const result = getVisibleExpenses(expenses, filters);

    expect(result).toEqual([
        {
            id: expect.any(String),
            description: 'rent', 
            amount: 135, 
            note: '', 
            createdAt: moment(0).add(4, 'days').valueOf()
        }
    ]);
});

test('should return an array sortered by startDate', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: moment(0),
        endDate: undefined
    };
    const result = getVisibleExpenses(expenses, filters);

    expect(result).toEqual([
        {
            id: expect.any(String),
            description: 'rent', 
            amount: 135, 
            note: '', 
            createdAt: moment(0).add(4, 'days').valueOf()
        },
        {
            id: expect.any(String),
            description: 'coffee', 
            amount: 15, 
            note: '', 
            createdAt: 0
        }
    ]);
});

test('should sort by endDate', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: moment(0)
    };
    const result = getVisibleExpenses(expenses, filters);
    expect(result).toEqual([expenses[0], expenses[1]]);
});
test('should sort by amount', () => {
    const filters = {
        text: '',
        sortBy: 'amount',
        startDate: undefined, 
        endDate: undefined
    };

    const result = getVisibleExpenses(expenses, filters);
    expect(result).toEqual([expenses[2], expenses[1], expenses[0]]);
})