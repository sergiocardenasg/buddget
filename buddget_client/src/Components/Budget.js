import React from "react";

const Budget = ({ match, budgets }) => {
  let bdgt = budgets.find(budget => budget.id === parseInt(match.params.id))
  console.log(bdgt)
    
  return (
    <div>
      <h1> {bdgt && bdgt.name} </h1>
    </div>
  );
};

export default Budget;
