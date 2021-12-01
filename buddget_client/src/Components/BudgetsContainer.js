import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchBudgets } from '../Actions/budgetActions'
import BudgetForm from './BudgetForm';
import BudgetList from './BudgetsList';

class BudgetsContainer extends Component {
    componentDidMount () {
        this.props.fetchBudgets()
    }

    render() {
        return (
            <div>
                <BudgetForm/>
                <BudgetList/>
            </div>
        )
    }
}

export default connect(null, { fetchBudgets })(BudgetsContainer)
