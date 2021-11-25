import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Navbar } from '../components/Navbar'
import { Todos } from '../components/Todos/Todos'
import { LoginPage } from './LoginPage'

const Routers = () => {
    return (
        <div>
            <Navbar />
            <Switch>
                <Route exact path="/" component={Todos}></Route>
                <Route path="/login" component={LoginPage}></Route>
                <Route>
                    404 Page Not Found
                </Route>

            </Switch>

        </div>
    )
}

export { Routers }
