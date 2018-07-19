import React from 'react';
import {shallow} from 'enzyme';
import ExpenseDeshboard from '../../components/Deshboard';

test('should render ExpenseDeshboard correctly', () => {
    const wrapper = shallow(<ExpenseDeshboard/>);
    expect(wrapper).toMatchSnapshot();
})