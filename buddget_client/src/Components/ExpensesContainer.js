import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchExpenses } from '../Actions/expenseActions'
import {Route, Switch} from 'react-router-dom';
import ExpenseForm from './ExpenseForm';
import ExpensesList from './ExpensesList';
//import ExpensesList from './ExpensesList';
//import { NavLink } from 'react-router-dom';

class ExpensesContainer extends Component {
    componentDidMount () {
        this.props.fetchExpenses()
    }

    render () {
        return (
            <div>
                <Switch>
                    <Route exact path='/budgets/:id' render={(routerProps) => <ExpensesList {...routerProps} expenses={this.props.expenses} budgets={this.props.budgets}/>} />
                    <Route path='/budgets/:id' render={(routerProps) => <ExpenseForm/>} />
                </Switch>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return { expenses: state.expenses, budgets: state.budgets  }
}

export default connect(mapStateToProps, { fetchExpenses })(ExpensesContainer)
