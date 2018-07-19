import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import ExpenseDeshboardPage from '../components/Deshboard';
import ExpenseHelpPage from '../components/ExpenseHelpPage';
import Header from '../components/Header';
import NotFoundPage from '../components/NotFound';

const RouterApp = () => (
    <BrowserRouter>
        <div>
            <Header/>
            <Switch>
                <Route 
                    path='/' 
                    component={ExpenseDeshboardPage}
                    exact={true}
                />
                <Route 
                    path='/create' 
                    component={AddExpensePage}
                />
                <Route
                    path='/edit/:id'
                    component={EditExpensePage}
                />
                <Route
                    path='/help'
                    component={ExpenseHelpPage}
                />
                <Route
                    component={NotFoundPage}
                />
            </Switch>
        </div>   
    </BrowserRouter>
);

export default RouterApp;