import React from "react";
import ExpensesContainer from "./ExpensesContainer";
import {Route, Switch} from 'react-router-dom'; 

const Budget = ({ match, budgets }) => {
  let bdgt = budgets.find(budget => budget.id === parseInt(match.params.id))
  console.log(bdgt)
    
  return (
    <div>
      <h1> {bdgt && bdgt.name} - ${bdgt && bdgt.fund_amount} </h1>
      <Switch>
            <Route exact path='/budgets/:id' render={(routerProps) => <ExpensesContainer/>} />
      </Switch>
    </div>
  );
};

export default Budget;
