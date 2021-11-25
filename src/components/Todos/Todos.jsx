import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo } from '../../store/TodoStore/action';
import { nanoid } from 'nanoid'
import DisplayTodos from './DisplayTodos';
import { Redirect } from 'react-router-dom'




const Todos = () => {
    const isAuth = useSelector(state => state.auth.isAuth)

    const dispatch = useDispatch();
    const [query, setQuery] = React.useState("")

    const handleChange = (e) => {
        setQuery(e)
    }

    const handleAdd = () => {
        const payload = {
            id: nanoid(4),
            query,
            status: false,
        }
        const addToTodoAction = addTodo(payload)
        dispatch(addToTodoAction)
    }



    return !isAuth ? <Redirect to="/login" /> : (
        <div>
            <h1 className="mb-3 text-uppercase ">Add Todos</h1>
            <input
                className="form-control container w-25"
                onChange={(e) => {
                    handleChange(e.target.value)
                }}
                type="text"
                placeholder="Todo Name" />

            <button
                className="btn btn-success w-25 my-2"
                onClick={() => {
                    handleAdd()
                }}
            >Add Todo</button>
            <DisplayTodos />


        </div>
    )
}

export { Todos }
