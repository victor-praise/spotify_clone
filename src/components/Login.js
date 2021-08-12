import React from 'react'
import '../styles/login.css'
import { loginUrl } from './spotify'

function Login() {
    return (
        <div>
            <div className="login">
                <img src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt="spotify_logo" />
                <a href={loginUrl}>LOGIN WITH SPOTIFY</a>
            </div>
            <div className="mobile__message">
                <h1>PLEASE VIEW ON DESKTOP</h1>
            </div>
        </div>

    )
}

export default Login
