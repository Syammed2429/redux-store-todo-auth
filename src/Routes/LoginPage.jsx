import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { Login } from '../components/Login/Login'
import { loginFailure, loginSuccess } from '../store/AuthStore/action'


const LoginPage = () => {
    const dispatch = useDispatch()
    const isAuth = useSelector(state => state.auth.isAuth)
    const handleLogin = ({ email, password, token }) => {
        if (email === "eve.holt@reqres.in" && password === "cityslicka" && token === "QpwL5tke4Pnpja7X4") {
            const action = loginSuccess(token);
            dispatch(action)
        } else {
            const action = loginFailure("Wrong password");
            dispatch(action)
        }
    }
    if (isAuth) {
        return <Redirect to="/" />
    }

    return (
        <div>
            <Login handleLogin={handleLogin} />

        </div>
    )
}

export { LoginPage }
