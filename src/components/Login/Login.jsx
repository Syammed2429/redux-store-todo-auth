import React from 'react'
import axios from 'axios'
// import { useDispatch } from 'react-redux'


const Login = ({ handleLogin }) => {
    const [email, setEmail] = React.useState("")
    const [password, setPassword] = React.useState("")
    const [token, setToken] = React.useState("")
    // const dispatch = useDispatch();


    const handleSubmit = (e) => {
        e.preventDefault();
        let payload = { email, password, token }
        handleLogin(payload)
        getToken()
    }
    let getToken = async () => {
        try {
            const { data } = await axios.post(`https://reqres.in/api/login`, {

                email: email,
                password: password

            })
            setToken(data.token)

        } catch (err) {
            alert("Please check your credentials")
        }



    }

    return (
        <div className="container">
            <form onSubmit={handleSubmit}>

                <input
                    className="form-control w-25  container my-2"
                    onChange={(e) => setEmail(e.target.value)}
                    type="text" placeholder="Enter Your Email" />
                <input
                    className="form-control w-25  container"
                    onChange={(e) => setPassword(e.target.value)}
                    type="password" placeholder="Enter Your Password" />
                <input
                    className="btn btn-success w-25 mt-1  container"
                    type="submit" value="Login" />
            </form>
        </div>
    )
}

export { Login }
