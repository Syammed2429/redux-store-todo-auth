import { ADD_TODO } from "./actionTypes"
import { getData, setData } from "../../utils/localStorage"


const initState = {
    todos: getData("todos") || []
}

export const todoReducer = (state = initState, { type, payload }) => {
    switch (type) {
        case ADD_TODO: {
            const updateDate = [...state.todos, payload];
            setData("todos", updateDate)

            return {
                ...state,
                todos: [...state.todos, payload]
            }
        }
        default:
            return state
    }
}