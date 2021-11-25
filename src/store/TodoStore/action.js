import { ADD_TODO } from "./actionTypes"


export const addTodo = (data) => {
    return {
        type: ADD_TODO,
        payload: data
    }
}