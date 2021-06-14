import React from 'react'

function Login(){
    return(
        <div className="login">
            <div className="login__container">
                <h1>Sign in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type="email"/>
                </form>
            </div>

        </div>
    )
}

export default Login;