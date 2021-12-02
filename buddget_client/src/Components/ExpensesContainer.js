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

const mapStateToProps = state => {
    return { expenses: state.expenses }
}

export default connect(mapStateToProps, { fetchExpenses })(ExpensesContainer)
