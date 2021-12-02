import React from "react";
import { Route } from "react-router-dom";
import ExpenseList from "./ExpenseList";

const ExpensesPage = ({ match, budgets }) => (
  <div>
    <Route
      path={`${match.url}/:budgetId`}
      render={(routerProps) => <ExpenseList {...routerProps} budgets={budgets} />}
    />
  </div>
);

export default ExpensesPage;