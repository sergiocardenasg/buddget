import React from "react";

const ExpensesList = ({ expenses, budgets }) => {
  const renderExpenses = Object.keys(expenses).map((expense, budget) => (
    <ul>
        <li>
            {expenses && expenses[expense].name} - ${expenses && expenses[expense].amount}
       </li>
    </ul>
  ));

  return <div>{renderExpenses}</div>;
};

export default ExpensesList;