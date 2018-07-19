import filtersReducer from '../../reducers/filters';
import moment from 'moment';

test('shoul set up the state as default', () => {
    const filters = filtersReducer(undefined, {type: '@@init'});
    expect(filters).toEqual({
        text : '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month') 
    });
});

test('should set up the sortBy amount', () => {
    const state = filtersReducer(undefined, {type: 'SORT_BY_AMOUNT'});
    expect(state.sortBy).toBe('amount');
});

test('should set up sortBy to date', () => {
    const currentState = {
        text: '',
        sortBy: 'amount',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month') 
    }
    const state = filtersReducer(currentState, {type: 'SORT_BY_DATE'});
    expect(state.sortBy).toBe('date')
});

test('should set text filter', () => {
    const state = filtersReducer(undefined, {
        type:'SET_TEXT_FILTER', 
        text: 'Roubaram pão na casa do João'
    });
    expect(state.text).toBe('Roubaram pão na casa do João');
});

test('should set startDate filter', () => {
    const state = filtersReducer(undefined, {type: 'SET_START_DATE', startDate: moment(0)});
    expect(state.startDate).toEqual(moment(0));
});

test('should set endDate filter', () => {
    const state = filtersReducer(undefined, {type: 'SET_END_DATE', endDate: moment(0)});
    expect(state.endDate).toEqual(moment(0));
});