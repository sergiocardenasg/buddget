import React from 'react'
import { connect } from 'react-redux'

function BudgetList( {budgets} ) {
    return (
        <div>
            {budgets.map(budget => <li key={budget.id}> {budget.name} - ${budget.fund_amount}</li>)}
        </div>
    )
}

const mapStateToProps = state => {
    return { budgets: state.budgets }
}


export default connect(mapStateToProps)(BudgetList)
