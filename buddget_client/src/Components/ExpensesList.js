import React from "react";
import { Link } from "react-router-dom";

const ExpensesList = ({ expenses }) => {
  const renderExpenses = Object.keys(expenses).map((expense) => (
    <ul>
        <li>
            <Link key={expense.id} to={`/budgets/${budgets[budget].id}/expenses/${budgets[budget].expenses[expense.id]}`}>
            {budgets[budget].expenses[expense.name]}
            </Link>
        </li>
    </ul>
  ));

  return <div>{renderExpenses}</div>;
};

export default ExpensesList;