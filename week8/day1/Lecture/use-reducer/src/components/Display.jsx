import React, {useState, useContext} from 'react';
import { TodoReducerContext, types } from '../context/TodoReducerContext';
const Display = (props) => {
    const {todos, dispatch} = useContext(TodoReducerContext)

    return (
        <div>
            <h2>DISPLAY</h2>
            {
                todos.map((todo) => (
                    <div key={todo.id}>
                        <h4>{todo.title}</h4>
                        <button onClick={() => dispatch({type:types.DELETE_TODO, payload:todo.id})}>Delete</button>
                    </div>
                ))
            }
        </div>
)}

export default Display;