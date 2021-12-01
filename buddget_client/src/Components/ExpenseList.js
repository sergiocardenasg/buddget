import React from 'react'
import { connect } from 'react-redux'

function ExpenseList( {expenses} ) {
    return (
        <div>
            {expenses.map(expense => <li key={expense.id}> {expense.name} - ${expense.amount}</li>)}
        </div>
    )
}

const mapStateToProps = state => {
    return { expenses: state.expenses }
}


export default connect(mapStateToProps)(ExpenseList)
