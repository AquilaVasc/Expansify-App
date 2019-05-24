import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom'
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const ExpenseDeshboardPage = () => (
    <div>This is from my deshboard component</div>
);

const AddExpensePage = () => (
    <div>This is from my Add Expense component</div>
);

const EditExpensePage = () => (
    <div>This is from my Edit Expense component</div>
);

const HelpPage = () => (
    <div>This is from my Help component</div>
);

const routes = (
    <BrowserRouter>
        <div>
            <Route path="/" component={ExpenseDeshboardPage} exact={true}/>
            <Route path="/create" component={AddExpensePage}/>
            <Route path="/edit" component={EditExpensePage} />
            <Route path="/help" component={HelpPage}/>
        </div>
        
    </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('app'));
