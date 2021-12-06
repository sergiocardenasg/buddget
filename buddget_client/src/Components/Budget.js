import React from "react";
import ExpensesContainer from "./ExpensesContainer";

const Budget = ({ match, budgets }) => {
  let bdgt = budgets.find(budget => budget.id === parseInt(match.params.id))
  return (
    <div>
      <h1> {bdgt && bdgt.name} - ${bdgt && bdgt.fund_amount} </h1>
           <ExpensesContainer budgets={budgets} match={match}/>
    </div>
  );
};

export default Budget;
