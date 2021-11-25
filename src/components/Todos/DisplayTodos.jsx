import React from 'react'
import { useSelector } from 'react-redux';



const DisplayTodos = () => {
    const todoList = useSelector(state => state.todo.todos);

    return (
        <div className="h3 my-2">
            {todoList.map((e) => (
                <div key={e.id}>
                    {e.query}
                </div>
            ))}

        </div>
    )
}

export default DisplayTodos
