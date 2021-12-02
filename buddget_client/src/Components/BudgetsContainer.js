import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchBudgets } from '../Actions/budgetActions'
import BudgetList from './BudgetsList';
import { NavLink } from 'react-router-dom';

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
                <BudgetList />
            </div>
        )
    }
}

export default connect(null, { fetchBudgets })(BudgetsContainer)
