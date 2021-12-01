import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchExpenses } from '../Actions/expenseActions'
import expenseForm from './expenseForm';
import ExpenseList from './ExpenseList';

class ExpensesContainer extends Component {
    componentDidMount () {
        this.props.fetchExpenses()
    }

    render() {
        return (
            <div>
                <ExpenseList/>
                <ExpenseForm/>
            </div>
        )
    }
}

export default connect(null, { fetchExpenses })(ExpensesContainer)
