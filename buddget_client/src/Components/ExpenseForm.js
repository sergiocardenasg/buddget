import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addExpense } from '../Actions/budgetActions'
import { Redirect } from 'react-router'

class ExpenseForm extends Component {
    state = {
        name: '',
        amount: '',
        redirect: false
    }

    handleChange = event => {
        const { name, value } = event.target
        this.setState({
            [name]: value
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        this.props.addExpense(this.props.match.params.id, this.state)
        this.setState({
            redirect: true
        })
    }

    render() {
        const { redirect } = this.state;
        
        if (redirect) {
          return <Redirect to={`/budgets/${this.props.match.params.id}`}/>;
        }

        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Expense Name: </label>
                    <input type='text' value={this.state.name} onChange={this.handleChange} name='name'/>
                    <br/>
                    <label>Amount: </label>
                    <input type='text' value={this.state.amount} onChange={this.handleChange} name='amount'/>
                    <br/>
                    <input type='submit' value="Add Expense"/>
                </form>
            </div>
        )
    }
}

export default connect(null, { addExpense })(ExpenseForm)
