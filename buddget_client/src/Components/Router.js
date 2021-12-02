import React from 'react';
import { Routes, Route } from 'react-router-dom'
import Home from './Home';
import { connect } from 'react-redux'
import About from './About';
import BudgetsList from './BudgetsList';

function Router() {
    return (
        <div>
            <Routes>
                <Route exact path='/' element={<Home/>} />
                <Route exact path='/about' element={<About/>} />
                <Route path='/budgets' render={routerProps => <BudgetsList {...routerProps} budgets={this.state.budgets}/>} />
            </Routes>
        </div>
    )
}

const mapStateToProps = state => {
    return { budgets: state.budgets }
}


export default connect(mapStateToProps)(Router)
