import React, {useState} from 'react'
import './Login.css';
import { Link, useHistory } from 'react-router-dom'
import {auth} from './firebase'

function Login() {
    const history = useHistory();
    const [useremail, setUserEmail] = useState('');
    const [userpassword, setUserPassword] = useState('');
    const loginuser = event => {
        event.preventDefault();
        auth.signInWithEmailAndPassword(useremail,userpassword)
        .then((auth) => {
            history.push('/')
        })
        .catch(e => alert("Adresse email ou mot de passe erroné.\n"+ e.message))
    }

    const signupuser = event => {
        event.preventDefault();
        auth.createUserWithEmailAndPassword(useremail,userpassword)
        .then((auth) => {
            history.push('/login')
            alert("Votre compte a été créé !\nVous pouvez dès à présent vous connecter.")
        })
        .catch(e => alert("L'adresse email est déjà utilisée.\n"+ e.message))
    }
    return (
        <div className="login">
            <Link>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" alt="" className="login__logo"/>
            </Link>
            <div className="login__container">
                <h1>Se connecter</h1>
                <form>
                    <h5>E-mail</h5>
                    <input value={useremail} onChange={event => setUserEmail(event.target.value)} type="email" />
                    <h5>Password</h5>
                    <input value={userpassword} onChange={event => setUserPassword(event.target.value)} type="password" />
                    <button onClick={loginuser} type="submit" className="login__signInButton">Se connecter</button>
                </form>
                <p>
                    By signin-in, you agree to Amazon's Terms and Conditions
                </p>
                <button onClick={signupuser} className="login__registerButton">Créer un compte</button>
            </div>

        </div>
    )
}

export default Login;