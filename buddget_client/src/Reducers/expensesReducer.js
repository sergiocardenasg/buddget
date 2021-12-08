export const expensesReducer = (state = [], action) => {
    switch(action.type) {
        case 'FETCH_EXPENSES':
            return action.payload
        case 'ADD_EXPENSE':
            return [...state, action.payload]
        default:
            return state
    }
}