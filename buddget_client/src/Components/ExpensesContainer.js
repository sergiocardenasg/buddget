import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchExpenses } from '../Actions/expenseActions'
import {Route, Switch} from 'react-router-dom';
import ExpenseForm from './ExpenseForm';
import ExpensesList from './ExpensesList';

class ExpensesContainer extends Component {
    componentDidMount () {
        this.props.fetchExpenses()
    }

    render () {
        return (
            <div>
                <Switch>
                    <Route exact path='/budgets/:id' render={(routerProps) => <ExpensesList {...routerProps} budgets={this.props.budgets}/>} />
                </Switch>
            </div>
        )
    }
}

//<Route path='/budgets/:id/expenses/new' render={(routerProps) => <ExpenseForm/>} />


const mapStateToProps = state => {
    return { budgets: state.budgets  }
}

export default connect(mapStateToProps, { fetchExpenses })(ExpensesContainer)
