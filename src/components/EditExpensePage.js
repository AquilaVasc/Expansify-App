import React from 'react';
import ExpenseForm from './ExpenseForm';
import {connect} from 'react-redux';
import { editExpense, removeExpense } from '../actions/expenses';

export class EditExpensePage extends React.Component{
    onSubmit = (update) => {
        this.props.editExpense(this.props.expense.id, update);
        this.props.history.push('/');
    };
    onClick =() => {
        this.props.removeExpense({id: this.props.expense.id});
        this.props.history.push('/');
    };
    render(){
        return (
            <div>
                <ExpenseForm 
                    onSubmit={this.onSubmit} 
                    expense={this.props.expense}
                />
                <button onClick={this.onClick}>Remove</button>
            </div>
        );
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        removeExpense: (data) => dispatch(removeExpense(data)),
        editExpense: (ExpenseId , updates) => dispatch(editExpense(ExpenseId, updates))
    }
}

const mapStateToProps = (state, props) => {
    return {
        expense: state.expenses.find((expense) => {
            return expense.id === props.match.params.id;
        }),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);