import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchBudgets } from '../Actions/budgetActions'
import BudgetForm from './BudgetForm';
import ExpenseList from './ExpenseList';

class BudgetsContainer extends Component {
    componentDidMount () {
        this.props.fetchBudgets()
    }

    render() {
        return (
            <div>
                <ExpenseList/>
                <BudgetForm/>
            </div>
        )
    }
}

export default connect(null, { fetchBudgets })(BudgetsContainer)
