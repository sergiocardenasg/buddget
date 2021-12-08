import React from 'react';
import { connect } from 'react-redux';
import { fetchExpenses } from '../Actions/expenseActions'
import { NavLink } from 'react-router-dom';

const ExpensesList = ({ match, budgets }) => {
  let bdgt = budgets.find(budget => budget.id === parseInt(match.params.id))
  const renderExpenses = () => (bdgt.expenses).map((expense) => (
    <ul>
        <li>
            {expense.name} - ${expense.amount}
       </li>
    </ul>
  ));

  
  return <div>{!!bdgt ? renderExpenses() : null} 
    <NavLink to={`/budgets/${match.params.id}/expenses/new`}> 
      Add Expense to Budget
    </NavLink>
  </div>;
};

const mapStateToProps = state => {
    return { budgets: state.budgets  }
}

export default connect(mapStateToProps, { fetchExpenses })(ExpensesList)