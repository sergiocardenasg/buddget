import React from "react";
import { NavLink } from 'react-router-dom';

const ExpensesList = ({ match, budgets }) => {
  let bdgt = budgets.find(budget => budget.id === parseInt(match.params.id))
  const renderExpenses = (bdgt.expenses).map((expense) => (
    <ul>
        <li>
            {expense.name} - ${expense.amount}
       </li>
    </ul>
  ));

  return <div>{renderExpenses} 
    <NavLink to={`/budgets/${match.params.id}/expenses/new`}> 
      Add Expense to Budget
    </NavLink>
  </div>;
};

export default ExpensesList;