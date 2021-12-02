import React from "react";
import { Link } from "react-router-dom";

const BudgetsList = ({ budgets }) => {
  const renderBudgets = Object.keys(budgets).map((budget) => (
    <ul>
        <li>
            <Link key={budget.id} to={`/budgets/${budgets[budget].id}`}>
            {budgets[budget].name}
            </Link>
        </li>
    </ul>
  ));

  return <div>{renderBudgets}</div>;
};

export default BudgetsList;