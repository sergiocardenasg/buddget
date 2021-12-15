import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addExpense } from '../Actions/budgetActions'
import { Redirect } from 'react-router'
import { FormErrors } from './formErrors'

class ExpenseForm extends Component {
    state = {
        name: '',
        amount: '',
        redirect: false,
        formErrors: {name: '', amount: ''},
        nameValid: false,
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
        let nameValid = this.state.nameValid;
        let amountValid = this.state.amountValid;
      
        switch(fieldName) {
        case 'name':
            nameValid = value.length >= 1;
            fieldValidationErrors.name = nameValid ? '': ' cannot be blank';
        break;
        case 'amount':
            amountValid = /^\d+$/.test(value);;
            fieldValidationErrors.amount = amountValid ? '': ' contains non-numeric characters';
        break;
        default:
            break;
        }
        this.setState({formErrors: fieldValidationErrors,
            nameValid: nameValid,
            amountValid: amountValid
            }, this.validateForm);
      }
      
      validateForm() {
        this.setState({formValid: this.state.nameValid && this.state.amountValid});
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
                    <input type='submit' value="Add Expense" disabled={!this.state.formValid}/>
                </form>
                <div className='panel panel-default'>
                    <FormErrors formErrors={this.state.formErrors} />
                </div>
            </div>
        )
    }
}

export default connect(null, { addExpense })(ExpenseForm)
