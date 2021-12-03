import React from "react";

const Budget = ({ match, expenses, budgets }) => {
  let bdgt = budgets.find(budget => budget.id === parseInt(match.params.id))
  let expnses = bdgt.expenses.map(expense => <li> {expense && expense.name} - ${expense && expense.amount} </li>)
  return (
    <div>
      <li> {expnses && expnses} </li>
    </div>
  );
};

export default Budget;
