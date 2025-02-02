export default (state, action) => {
    switch(action.type) {
        case 'DELETE_TRANSACTION':
            return {
                ...state,
                // transactions minus one to delete
                transactions: state.transactions.filter(transaction => transaction.id !== action.payload)
            }
        case 'ADD_TRANSACTION':
            return {
                ...state,
                // transactions already there plus payload
                // spread takes all values from array
                transactions: [action.payload, ...state.transactions]
            }
        default:
            return state;
    }
}

// how to specify app state changes in response to certain actions to context
// change state and send it to component
