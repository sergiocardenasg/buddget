import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchBudgets } from '../Actions/budgetActions'
import { NavLink } from 'react-router-dom';
import BudgetsPage from './BudgetsPage';

class BudgetsContainer extends Component {
    componentDidMount () {
        this.props.fetchBudgets()
    }

    render() {
        return (
            <div>
                <NavLink to="/newBudget"> Create a New Budget</NavLink>
                <p></p>
                <p></p>
                <BudgetsPage/>
            </div>
        )
    }
}

export default connect(null, { fetchBudgets })(BudgetsContainer)
