import React from "react";
import { NavLink } from 'react-router-dom';

const ExpensesList = ({ match, budgets, deleteExpense}) => {
  let bdgt = budgets.find(budget => budget.id === parseInt(match.params.id))

  const renderExpenses = () => (bdgt.expenses).map((expense) => (
    <ul>
        <li>
            {expense.name} - ${expense.amount}
            {/* <button onClick={deleteExpense(expense.budget_id, expense.id)}> x </button> */}
       </li>
    </ul>
  ));

  
  return <div>{!!bdgt ? renderExpenses() : null} 
    <NavLink to={`/budgets/${match.params.id}/expenses/new`}> 
      Add Expense to Budget
    </NavLink>
  </div>;
};

export default (ExpensesList)
