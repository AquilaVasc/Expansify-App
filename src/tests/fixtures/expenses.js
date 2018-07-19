import moment from 'moment';

const expenses = [{
    id: '1',
    description: 'coffee', 
    amount: 15, 
    note: '', 
    createdAt: 0
},
{
    id: '2',
    description: 'bike', 
    amount: 100, 
    note: '', 
    createdAt: moment(0).subtract(4, `days`).valueOf()
},
{
    id: '3',
    description: 'rent', 
    amount: 135, 
    note: '', 
    createdAt: moment(0).add(4, `days`).valueOf()
}
];

export default expenses;