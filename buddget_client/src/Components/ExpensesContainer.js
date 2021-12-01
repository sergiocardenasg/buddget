import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchExpenses } from '../Actions/expenseActions'
import ExpenseForm from './ExpenseForm';
import ExpenseList from './ExpenseList';

class ExpensesContainer extends Component {
    componentDidMount () {
        this.props.fetchExpenses()
    }

    render() {
        return (
            <div>
                <ExpenseForm/>
                <ExpenseList/>
            </div>
        )
    }
}

export default connect(null, { fetchExpenses })(ExpensesContainer)
