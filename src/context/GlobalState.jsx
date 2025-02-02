import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

// initial state
const initialState = {
    transactions: [
        // { id: 1, text: "flower", amount: -20 },
        // { id: 2, text: "salary", amount: 400 },
        // { id: 3, text: "book", amount: -10 }
    ]
}

// create context
export const GlobalContext = createContext(initialState);

// so other components have access to this state, need provider component
// part in () are props since children need
export const GlobalProvider = ({ children }) => {
    // for reducer action
    const [state, dispatch] = useReducer(AppReducer, initialState);

    // actions that make calls to reducer
    function deleteTransaction(id) {
        dispatch({
            type: "DELETE_TRANSACTION",
            payload: id
        });
    }

    function addTransaction(transaction) {
        dispatch({
            type: "ADD_TRANSACTION",
            payload: transaction
        });
    }

    return (
        <GlobalContext.Provider value={{
            transactions: state.transactions,
            deleteTransaction,
            addTransaction // to access in other components add to provider
        }}>
            {children}
        </GlobalContext.Provider>
    );
}