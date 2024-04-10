import { createContext, useReducer } from "react";

export const TodoReducerContext = createContext();
export const types = {
    ADD_TODO: 'ADD_TODO',
    DELETE_TODO: 'DELETE_TODO',
    UPDATE_TODO: 'UPDATE_TODO'
}
// function for state management
// state is the current state of the application and is passed in implicitly
// action is an object that describes what should happen to the state
const reducer = (state, action) => {
    console.log('STATE: ',state);
    console.log('ACTION: ',action);
    switch(action.type){
        case types.ADD_TODO:
            return [...state, action.payload]
            // setTodos([...todos, todo]) // this is the same as above from useState
        case types.DELETE_TODO:
            return state.filter((todo) => todo.id !== action.payload)
            // newTodos = state.filter((todo) => todo.id !== action.payload)
            // return newTodos
        default:
            return state
    }
}

export const TodoReducerProvider = ({ children }) => {
    const [todos, dispatch] = useReducer(reducer, [])
    return (
        <TodoReducerContext.Provider value={{todos, dispatch}}>
            {children}
        </TodoReducerContext.Provider>
    )
}