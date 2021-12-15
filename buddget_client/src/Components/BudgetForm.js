import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addBudget } from '../Actions/budgetActions'
import { Redirect } from 'react-router'
import { FormErrors } from './formErrors'

class BudgetForm extends Component {
    state = {
        name: '',
        fund_amount: '',
        redirect: false,
        formErrors: {fund_amount: ''},
        amountValid: false,
        formValid: false
    }

    handleChange = event => {
        const { name, value } = event.target
        this.setState({[name]: value,},
            () => { this.validateField(name, value) });
    }

    validateField(fieldName, value) {
        let fieldValidationErrors = this.state.formErrors;
        let amountValid = this.state.amountValid;
      
        switch(fieldName) {
          case 'fund_amount':
            amountValid = /^\d+$/.test(value);;
            fieldValidationErrors.fund_amount = amountValid ? '': ' contains non-numeric characters';
            break;
          default:
            break;
        }
        this.setState({formErrors: fieldValidationErrors,
            amountValid: amountValid
            }, this.validateForm);
      }
      
      validateForm() {
        this.setState({formValid: this.state.amountValid});
      }

    handleSubmit = event => {
        event.preventDefault()
        this.props.addBudget(this.state)
        this.setState({
            redirect: true
        })
    }

    render() {
        const { redirect } = this.state;

        if (redirect) {
          return <Redirect to='/budgets'/>;
        }

        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Budget Name:</label>
                    <input type='text' value={this.state.name} onChange={this.handleChange} name='name'/>
                    <br/>
                    <label>What is Your Budget?</label>
                    <input type='text' value={this.state.fund_amount} onChange={this.handleChange} name='fund_amount'/>
                    <br/>
                    <input type='submit' value="Create Budget" disabled={!this.state.formValid}/>
                </form>
                <div className='panel panel-default'>
                    <FormErrors formErrors={this.state.formErrors} />
                </div>
            </div>
        )
    }
}

export default connect(null, { addBudget })(BudgetForm)
