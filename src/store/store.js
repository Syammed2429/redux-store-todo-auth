import { createStore, compose, combineReducers, applyMiddleware } from 'redux';
import { authReducer } from './AuthStore/authReducer';
import { todoReducer } from './TodoStore/todoReducer';


const rootReducer = combineReducers({
    todo: todoReducer,
    auth: authReducer
});



const middleWare1 = (store) => (next) => (action) => {
    console.log('Middle Ware 1')

    next(action)
}

const middleWare2 = (store) => (next) => (action) => {
    console.log("Middle Ware 2")

    next(action)
}


export const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(middleWare1, middleWare2),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

    )

)