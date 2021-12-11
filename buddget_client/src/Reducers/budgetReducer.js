export const budgetReducer = (state = [], action) => {
    let index;
    let budget;

    switch(action.type) {
        case 'FETCH_BUDGETS':
            return action.payload
        case 'ADD_BUDGET':
            return [...state, action.payload]
        case 'ADD_EXPENSE':
            index = state.findIndex(budget => budget.id === action.payload.budget_id);
            budget = state[index];
            return [
              ...state.slice(0, index),
              Object.assign({}, budget, { expenses: budget.expenses.concat(action.payload) }),
              ...state.slice(index + 1)
            ];
        case 'DELETE_EXPENSE':
            index = state.findIndex(budget => budget.id === action.payload.budget_id);
            budget = state[index];
            return [
              ...state.slice(0, index),
              Object.assign({}, budget, { expenses: budget.expenses.filter(action.payload) }),
              ...state.slice(index + 1)
            ];
        default:
            return state
    }
}