export const fetchExpenses = () => {
    return (dispatch) => {
        fetch('http://127.0.0.1:3000/expenses')
        .then(resp => resp.json())
        .then(expenses => dispatch({ type: 'FETCH_EXPENSES', payload: expenses}))
    }
}

export const addExpense = (budget, expense) => {
    return (dispatch) => {
        fetch(`http://127.0.0.1:3000/budgets/${budget}/expenses`, {
            method: 'POST',
            body: JSON.stringify(expense),
            headers: { 'Content-Type': 'application/json'}
        })
        .then(resp => resp.json())
        .then(expense => dispatch({ type: 'ADD_EXPENSE', payload: expense}))
    }
}