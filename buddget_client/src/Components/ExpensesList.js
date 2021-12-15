import React from "react";
import { NavLink } from 'react-router-dom';

const ExpensesList = ({ match, budgets, deleteExp}) => {
  let bdgt = budgets.find(budget => budget.id === parseInt(match.params.id))

  const renderExpenses = () => (bdgt.expenses).map((expense) => (
    <ul>
        <li>
            {expense.name} - ${expense.amount} ({((expense.amount/bdgt.fund_amount)*100).toFixed(2)}% of budget total)
            {"\n"}
            <button onClick={() => deleteExp(expense.budget_id, expense.id)}> X </button>
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
