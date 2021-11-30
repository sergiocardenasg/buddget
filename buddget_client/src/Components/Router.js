import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Home from './Home';
import BudgetsContainer from './BudgetsContainer';
import About from './About';

export default function Router() {
    return (
        <div>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/Budgets' component={BudgetsContainer} />
                <Route exact path='/about' component={About} />
            </Switch>
        </div>
    )
}
