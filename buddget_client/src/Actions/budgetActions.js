export const fetchBudgets = () => {
    return (dispatch) => {
        fetch('http://127.0.0.1:3000/budgets')
        .then(resp => resp.json())
        .then(budgets => dispatch({ type: 'FETCH_GRADS', payload: budgets}))
    }
}