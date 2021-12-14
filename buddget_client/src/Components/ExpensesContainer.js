import React, { Component } from 'react';
import { connect } from 'react-redux';
import ExpensesList from './ExpensesList';
import { deleteExpense } from '../Actions/budgetActions'

class ExpensesContainer extends Component {

  render () {
    return (
      <div>
        <ExpensesList budgets={this.props.budgets} match={this.props.match} deleteExp={this.props.deleteExpense}/>
      </div>
    )
  }
}

const mapStateToProps = state => {
    return { budgets: state.budgets  }
}

export default connect(mapStateToProps, { deleteExpense })(ExpensesContainer)