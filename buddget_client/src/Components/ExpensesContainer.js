import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchExpenses } from '../Actions/expenseActions'
import ExpensesList from './ExpensesList';

class ExpensesContainer extends Component {
    componentDidMount () {
        this.props.fetchExpenses()
    }

    render () {
        return (
            <div>
                <ExpensesList budgets={this.props.budgets} match={this.props.match}/>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return { budgets: state.budgets  }
}

export default connect(mapStateToProps, { fetchExpenses })(ExpensesContainer)
