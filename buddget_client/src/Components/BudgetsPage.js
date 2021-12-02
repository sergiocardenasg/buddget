import React from "react";
import { Route } from "react-router-dom";
import ExpenseList from "./ExpenseList";
import BudgetsList from "./BudgetsList";

const BudgetsPage = ({ match, budgets }) => (
  <div>
    <BudgetsList budgets={budgets} />
    <Route
      exact
      path={match.url}
      element={() => <h3>Choose an expense</h3>}
    />
    <Route
      path={`${match.url}/:budgetId`}
      element={(routerProps) => <ExpenseList {...routerProps} budgets={budgets} />}
    />
  </div>
);

export default BudgetsPage;
