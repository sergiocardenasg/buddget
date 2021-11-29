export const budgetReducer = (state = [], action) => {
    switch(action.type) {
        case 'FETCH_BUDGETS':
            return action.payload
        default:
            return state
    }
}