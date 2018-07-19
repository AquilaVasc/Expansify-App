import React from 'react';
import moment from 'moment';
import {SingleDatePicker} from 'react-dates';
import 'react-dates/initialize';

const now = moment();
console.log(now.format('YYYY, MMM, DD, H:MM'));

export default class ExpenseForm extends React.Component {
    state = {
        description: this.props.expense ? this.props.expense.description :'',
        note: this.props.expense ? this.props.expense.note :'',
        amount: this.props.expense ? this.props.expense.amount.toString() :'',
        createdAt: this.props.expense ? moment(this.props.expense.createdAt) : moment(), 
        calendarFocused: false,
        error: ''
    };
    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(() => ({description}));
    };
    onNoteChange = (e) => {
        const note = e.target.value;
        this.setState(() => ({note}));
    };
    onAmountChange = (e) => {
        const amount = e.target.value;
        if(!amount || amount.match(/^\d*(\.\d{0,2})?$/)){
            this.setState(() => ({amount}))
        }
    };
    onDateChange = (createdAt) => {
        if(createdAt){
            this.setState(() => ({createdAt}));
        }
    };
    onFocusChange = ({focused}) =>{
        this.setState(() => ({calendarFocused: focused}));
    };
    onSubmit = (e) => {
        e.preventDefault();
        if(this.state.amount && this.state.description){
            this.props.onSubmit(
                {
                    description: this.state.description,
                    note: this.state.note,
                    createdAt: this.state.createdAt.valueOf(),
                    amount: parseFloat(this.state.amount, 10)
                }
            );
            this.setState(() => (
                {
                    description: '',
                    note: '',
                    amount: '',
                    createdAt: moment(), 
                    calendarFocused: false,
                    error: ''
                })
            );
        }else{
            this.setState(() => ({error: 'Please set description and amount correctly'}));
        }
    }
    render(){
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.onSubmit}>
                    <input 
                        type='text'
                        placeholder='Description'
                        autoFocus
                        value={this.state.description}
                        onChange={this.onDescriptionChange}
                    />
                    <input
                        type='text' 
                        value={this.state.amount}
                        placeholder='Amount'
                        onChange={this.onAmountChange}
                    />
                    <SingleDatePicker
                        date={this.state.createdAt}
                        onDateChange={this.onDateChange}
                        focused={this.state.calendarFocused}
                        onFocusChange={this.onFocusChange}
                        numberOfMonths={1}
                        isOutsideRange={() => false}
                    />
                    <textarea
                        placeholder='Add a note for your expense (optional)'
                        value={this.state.note}
                        onChange={this.onNoteChange}
                    >
                    </textarea>
                    <button>Add Expense</button>
                </form>
            </div>
        );
    }
} 
