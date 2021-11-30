import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addBudget } from '../Actions/budgetActions'

class BudgetForm extends Component {
    state = {
        name: '',
        funds: 0,
        expenses: 0
    }

    handleChange = event => {
        const { name, value } = event.target
        this.setState({
            [name]: value
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        this.props.addBudget(this.state)
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Budget Name:</label>
                    <input type='text' value={this.state.name} onChange={this.handleChange} name='name'/>
                    <br/>
                    <label>What is Your Budget?</label>
                    <input type='text' value={this.state.funds} onChange={this.handleChange} name='funds'/>
                    <br/>
                    <label>Add Expenses:</label>
                    <input type='text' value={this.state.expenses} onChange={this.handleChange} name='expenses'/>
                    <br/>
                    <input type='submit' value="Create Budget"/>
                </form>
            </div>
        )
    }
}

export default connect(null, { addBudget })(BudgetForm)
