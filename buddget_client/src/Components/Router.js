import React from 'react';
import { Routes, Route } from 'react-router-dom'
import Home from './Home';
import BudgetsContainer from './BudgetsContainer';
import About from './About';

export default function Router() {
    return (
        <div>
            <Routes>
                <Route exact path='/' element={<Home/>} />
                <Route exact path='/budgets' element={<BudgetsContainer/>} />
                <Route exact path='/about' element={<About/>} />
            </Routes>
        </div>
    )
}
