import React from "react";
import { Route } from "react-router-dom";
import ExpenseList from "./ExpenseList";

const ExpensesPage = ({ match, budgets }) => (
  <div>
    <Route
      exact
      path={match.url}
      render={() => <h3>Choose a budget</h3>}
    />
    <Route
      path={`${match.url}/:budgets[budget].id`}
      render={(routerProps) => <ExpenseList {...routerProps} budgets={budgets} />}
    />
  </div>
);

export default ExpensesPage;