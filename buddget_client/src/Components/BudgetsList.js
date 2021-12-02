import React from 'react'
import { Link } from "react-router-dom";

const BudgetsList = ({ budgets }) => {
    const renderBudgets = Object.keys(budgets).map((budgetID) => (
        <ul>
            <li>
                <Link key={budgetID} to={`/budgets/${budgetID}`}>
                {budgets[budgetID].name}
                </Link>
            </li>
        </ul>
      ));
    
      return <div>{renderBudgets}</div>;
};

export default BudgetsList;
