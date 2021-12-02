import React from 'react';
import { Routes, Route } from 'react-router-dom'
import Home from './Home';
import { connect } from 'react-redux'
import About from './About';
import ExpensesContainer from './ExpensesContainer';
import BudgetForm from './BudgetForm';
import BudgetsPage from './BudgetsPage';
import BudgetsContainer from './BudgetsContainer';

function Router() {
    return (
        <div>
            <Routes>
                <Route exact path='/' element={<Home/>} />
                <Route exact path='/about' element={<About/>} />
                <Route path='/budgets' element={<BudgetsContainer/>}/>
                <Route path='/newBudget' element={<BudgetForm/>} />
                <Route path='/expenses' element={<ExpensesContainer/>} />
            </Routes>
        </div>
    )
}

const mapStateToProps = state => {
    return { budgets: state.budgets }
}


export default connect(mapStateToProps)(Router)
