import React from 'react';
import {shallow} from 'enzyme';
import moment from 'moment';
import ExpenseFrom from '../../components/ExpenseForm';
import expenses from '../fixtures/expenses';

test('should render expense form correctly', () => {
     const wrapper = shallow(<ExpenseFrom/>);
     expect(wrapper).toMatchSnapshot();
});

test('should render expense form correctly with expense data', () =>{
    const wrapper = shallow(<ExpenseFrom expense={expenses[0]}/>);
    expect(wrapper).toMatchSnapshot();
})

test('should render error for invalid form submission', () => {
    const wrapper = shallow(<ExpenseFrom/>);
    wrapper.find('form').simulate('submit', {
        preventDefault: () => {

        } 
    });
    expect(wrapper.state().error).toBe('Please set description and amount correctly');
    expect(wrapper).toMatchSnapshot();
});

test('should set description on input change', () => {
    const value = 'new description'
    const wrapper = shallow(<ExpenseFrom/>);
    wrapper.find('input').at(0).simulate('change', {
        target: {value}
    });
    expect(wrapper.state('description')).toBe(value);
});

test('should set note on textarea field', () => {
    const value = 'new value';
    const wrapper = shallow(<ExpenseFrom />);
    wrapper.find('textarea').simulate('change', {
        target: {value}
    });
    expect(wrapper.state('note')).toBe(value);
});

test('should set amount if valid input', () => {
    const value = '23.50'
    const wrapper = shallow(<ExpenseFrom />);
    wrapper.find('input').at(1).simulate('change', {
        target: {value}
    });
    expect(wrapper.state('amount')).toBe(value);
});

test('should not set amount if invalid input', () => {
    const value = '12.122'
    const wrapper = shallow(<ExpenseFrom />);
    wrapper.find('input').at(1).simulate('change', {
        target: {value}
    });
    expect(wrapper.state('amount')).toBe('');
});

test('should call onSubmit prop for valid form submission', () => {
    const newDescription = 'cream coffee';
    const newAmount = '12.25';
    const onSubmitSpy = jest.fn();
    const wrapper = shallow(
    <ExpenseFrom 
        onSubmit={onSubmitSpy} 
        expense={expenses[0]}
    />);
    wrapper.find('form').simulate('submit', {
        preventDefault: () => {}
    });
    expect(wrapper.state('error')).toBe('');
    expect(onSubmitSpy).toHaveBeenLastCalledWith({
        description: expenses[0].description,
        amount: expenses[0].amount,
        note: expenses[0].note,
        createdAt: expenses[0].createdAt
    });
});

test('should set new date on date change', () => {
    const now = moment()
    const wrapper = shallow(<ExpenseFrom />);
    wrapper.find('withStyles(SingleDatePicker)').prop('onDateChange')(now);
    expect(wrapper.state('createdAt')).toEqual(now);
});

test('should change focused state on focused change', () => {
    const wrapper = shallow(<ExpenseFrom />);
    wrapper.find('withStyles(SingleDatePicker)').prop('onFocusChange')({focused: true});
    expect(wrapper.state('calendarFocused')).toBeTruthy();
});