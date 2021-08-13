import React,{createContext,useReducer} from 'react';
import AppReducer from './AppReducer';
//initial state
const initialState = {
    transactions: [
        // { id:1,text:'Flower',amount:-20},
        // { id:2,text:'Book',amount:-29},
        // { id:3,text:'Salary',amount:+500},
        // { id:4,text:'Book',amount:+90}
    ]
}

//create context
export const GlobalContext = createContext(initialState);

//provider component
export const GlobalProvider = ({children}) => {
    const [state,dispatch] = useReducer(AppReducer,initialState);

    //action
    function deleteTransaction(id) {
        dispatch({
            type:'DELETE_TRANSACTION',
            payload:id
        })
    }
    function addTransaction(transaction) {
        dispatch({
            type:'ADD_TRANSACTION',
            payload:transaction
        })
    }
    return (<GlobalContext.Provider value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction}}>
        {children}
    </GlobalContext.Provider>)
}
