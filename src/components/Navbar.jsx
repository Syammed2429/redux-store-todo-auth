import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className="d-flex justify-content-center gap-5 h5 mb-5 text-uppercase">
            <Link
                className="text-decoration-none text-info"
                to='/'>Add Todo</Link>
            <Link
                className="text-decoration-none text-warning"
                to='/login'>Login</Link>
        </div>
    )
}

export { Navbar }
