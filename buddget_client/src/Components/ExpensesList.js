import React from "react";

const ExpensesList = ({ match, budgets }) => {
  let bdgt = budgets.find(budget => budget.id === parseInt(match.params.id))
  const renderExpenses = (bdgt.expenses).map((expense) => (
    <ul>
        <li>
            {expense.name} - ${expense.amount}
       </li>
    </ul>
  ));

  return <div>{renderExpenses}</div>;
};

export default ExpensesList;