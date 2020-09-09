import React, {useState} from 'react'
import "./Login.css"
import {Link, useHistory} from "react-router-dom";
import {auth} from "./firebase.js";

function Login() {
    const history = useHistory();
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    const login =(event)=>{
        event.preventDefault(); //stop refresh
        //login
        auth.signInWithEmailAndPassword(email,password)
        .then((auth) => {
            //logged in, redirect
            history.push('/');

        }).catch((e) => alert(e.message))
    }
    const register =(event)=>{
        event.preventDefault(); // stop refresh

        auth.createUserWithEmailAndPassword(email,password)
        .then((auth) =>{
            //created user and logged in, redirect
            history.push('/');
        })
        .catch((e) => alert(e.message));
    }
    return (
        <div className="login">
            <Link to="/">
                <img className="login_logo"
                src="https://i.ibb.co/SNyyVYV/hiclipart-com-1.png"
                alt=""/>
            </Link>


        <div className="login_container">

        <h1>Sign-in</h1>

            <form>
                <h5>E-mail</h5>
                <input value={email} onChange={event => setEmail(event.target.value)} type="text"/>
                <h5>Password</h5>
                <input className="login_password" type="password" name="password"  value={password} onChange={event => setPassword(event.target.value)} type="text"/>
                <button onClick={login} type="submit" className="login_signInButton">Sign In</button>
            </form> 

            <p className="login_subtext">By continuing, you agree to Amazon's Conditions of Use and Privacy Notice. </p>
            <button onClick={register} className="login_registerButton">Create your Amazon Account</button>
        </div>
        </div>
    )
}

export default Login
