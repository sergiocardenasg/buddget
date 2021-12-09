import React, { Component } from 'react';
import { connect } from 'react-redux';
import ExpensesList from './ExpensesList';

class ExpensesContainer extends Component {

  render () {
    return (
      <div>
        <ExpensesList budgets={this.props.budgets} match={this.props.match} />
      </div>
    )
  }
}

const mapStateToProps = state => {
    return { budgets: state.budgets  }
}

export default connect(mapStateToProps)(ExpensesContainer)