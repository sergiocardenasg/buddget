import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Home from './Home';
import About from './About';
import BudgetsContainer from './BudgetsContainer';

const Router = () => {
    return (
        <div>
            <Switch>
                <Route exact path='/' render={() => <Home/>} />
                <Route exact path='/about' render={() => <About/>} />
                <Route path='/budgets' render={(routerProps) => <BudgetsContainer/>} />
                {/* <Route path={`/budgets/:id/expenses/new`} render={() => <ExpenseForm/>}/> */}
            </Switch>
        </div>
    )
}

export default Router
