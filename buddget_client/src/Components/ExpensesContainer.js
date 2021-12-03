import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchExpenses } from '../Actions/expenseActions'
import {Route, Switch} from 'react-router-dom';
import ExpenseForm from './ExpenseForm';

class ExpensesContainer extends Component {
    componentDidMount () {
        this.props.fetchExpenses()
    }

    render() {
        return (
            <div>
                <ExpenseForm/>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return { expenses: state.expenses }
}

export default connect(mapStateToProps, { fetchExpenses })(ExpensesContainer)
