export const fetchBudgets = () => {
    return (dispatch) => {
        fetch('http://127.0.0.1:3000/budgets')
        .then(resp => resp.json())
        .then(budgets => dispatch({ type: 'FETCH_BUDGETS', payload: budgets}))
    }
}

export const addBudget = budget => {
    return (dispatch) => {
        fetch('http://127.0.0.1:3000/budgets', {
            method: 'POST',
            body: JSON.stringify(budget),
            headers: { 'Content-Type': 'application/json'}
        })
        .then(resp => resp.json())
        .then(budget => dispatch({ type: 'ADD_BUDGET', payload: budget}))
    }
}

export const addExpense = (budgetId, expense) => {
    return (dispatch) => {
        fetch(`http://127.0.0.1:3000/budgets/${budgetId}/expenses`, {
            method: 'POST',
            body: JSON.stringify(expense),
            headers: { 'Content-Type': 'application/json'}
        })
        .then(resp => resp.json())
        .then(expense => {
                dispatch({ 
                type: 'ADD_EXPENSE', 
                payload: expense
            })
        })
    }
}

export const deleteExpense = (budgetId, expense) => {
    return (dispatch) => {
        fetch(`http://127.0.0.1:3000/budgets/${budgetId}/expenses/${expense.id}`, {
            method: 'DELETE',
        })
        .then(updatedBudget => updatedBudget.json())
        .then(updatedBudget => {
            // console.log(updatedBudget)
            dispatch({
                type: 'DELETE_EXPENSE',
                payload: updatedBudget
             })
        })
    }
 }