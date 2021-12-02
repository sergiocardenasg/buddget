import React from "react";

const ExpenseList = ({ match, budgets }) => {
  return (
    <div>
      <h3>{budgets[match.params.budgetId].name}</h3>
    </div>
  );
};

export default ExpenseList;
