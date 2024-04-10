import React, { useState, useContext } from 'react';
import { TodoReducerContext, types } from '../context/TodoReducerContext';
const TodoForm = (props) => {
    const {todos, dispatch} = useContext(TodoReducerContext)
    const [todo, setTodo] = useState('')

    const submitHandler = (e) => {
        e.preventDefault()
        const newTodo = {
            id: todos.length + 1,
            title: todo,
            isComplete: false
        }
        dispatch({type: types.ADD_TODO, payload: newTodo})
        setTodo('')
    }
    return (
        <div>
            <h2>TODO FORM</h2>
            <form onSubmit={submitHandler}>
                <input type="text" value={todo} onChange={(e) => setTodo(e.target.value)} />
                <button>Submit</button>
            </form>
        </div>
    )
}

export default TodoForm;