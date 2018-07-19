import {setEndDate, setStartDate, sortByAmount, sortByDate, setTextFilter} from '../../actions/filters';
import moment from 'moment';

test('should generate an action to setStartDate', () => {
    const result = setStartDate(moment(1000));
    expect(result).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(1000)
    });
});

// test('should generate an action to setStartDate when no arguments were passed', () => {
//     const result = setStartDate();
//     expect(result).toEqual({
//         type: 'SET_START_DATE',
//         startDate: undefined
//     });
// });

test('should generate setEndDate action object', () => {
    const result = setEndDate(moment(1005));
    expect(result).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(1005)
    });
});

// test('should generate an action to setEndDate when no arguments were passed', () => {
//     const result = setEndDate();
//     expect(result).toEqual({
//         type: 'SET_END_DATE',
//         endDate: undefined
//     });
// });

test('should generate a sortByDate action object', () => {
    const result = sortByDate();
    expect(result).toEqual({
        type: 'SORT_BY_DATE'
    });
});

test('should generate a sortByAmount action object', () => {
    const result = sortByAmount();
    expect(result).toEqual({
        type: 'SORT_BY_AMOUNT'
    });
});

test('should generate a setTextFilter action object', () => {
    const result = setTextFilter('O Lampião roubou pão na casa do João');
    expect(result).toEqual({
        type: 'SET_TEXT_FILTER',
        text: 'O Lampião roubou pão na casa do João'
    });
});
    
test('should generate a setTextFilter action object with no arguments', () => {
    const result = setTextFilter();
    expect(result).toEqual({
        type: 'SET_TEXT_FILTER',
        text: ''
    })
});