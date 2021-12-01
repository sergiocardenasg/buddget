import React from 'react';
import { Routes, Route } from 'react-router-dom'
import Home from './Home';
//import ExpenseList from './ExpenseList';
import About from './About';
import ExpensesContainer from './ExpensesContainer';

export default function Router() {
    return (
        <div>
            <Routes>
                <Route exact path='/' element={<Home/>} />
                <Route exact path='/expenses' element={<ExpensesContainer/>} />
                <Route exact path='/about' element={<About/>} />
            </Routes>
        </div>
    )
}
