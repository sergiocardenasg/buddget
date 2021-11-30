import React, { Component } from 'react'

export default class BudgetForm extends Component {
    state = {
        name: '',
        funds: 0,
        expenses: 0
    }

    render() {
        return (
            <div>
                <form>
                    <label>Budget Name:</label>
                    <input type='text' value={this.state.name} name='name'/>
                    <br/>
                    <label>What is Your Budget?</label>
                    <input type='text' value={this.state.funds} name='funds'/>
                    <br/>
                    <label>Add Expenses:</label>
                    <input type='text' value={this.state.expenses} name='expenses'/>
                    <br/>
                    <input type='submit' value="Create Budget"/>
                </form>
            </div>
        )
    }
}
