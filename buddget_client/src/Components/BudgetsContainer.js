import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchBudgets } from '../Actions/budgetActions'
import BudgetList from './BudgetsList';
import {Route, Switch} from 'react-router-dom';
import BudgetForm from './BudgetForm'
import Budget from './Budget'
import ExpenseForm from './ExpenseForm';

class BudgetsContainer extends Component {
    componentDidMount () {
        this.props.fetchBudgets()
    }

    render() {
        return (
            <div>
                <Switch>
                    <Route exact path='/budgets' render={(routerProps) => <BudgetList budgets={this.props.budgets}/>} />
                    <Route exact path='/budgets/new' render={(routerProps) => <BudgetForm/>} />
                    <Route exact path='/budgets/:id' render={(routerProps) => <Budget {...routerProps} budgets={this.props.budgets}/>} />
                    <Route exact path='/budgets/:id/expenses/new' render={(routerProps) => <ExpenseForm {...routerProps}/>} />
                    {/* <Route exact path='/budgets/:id/expenses/:id' render={(routerProps) => <Expense {...routerProps} budgets={this.props.budgets}/>} /> */}
                </Switch>
            </div>
    )}
}

const mapStateToProps = state => {
    return { budgets: state.budgets }
}

export default connect(mapStateToProps, { fetchBudgets })(BudgetsContainer)
