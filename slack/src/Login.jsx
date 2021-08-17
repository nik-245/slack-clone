import React from 'react'
import "./Login.css";
import { Button } from '@material-ui/core';
import {auth, provider} from "./firebase";
import {useStateValue} from "./StateProvider"
import { actionTypes } from './Reducer';

const Login = () => {
    const [state , dispatch] = useStateValue()
    const signIn =()=>{
        auth
        .signInWithPopup(provider)
        .then((result) => {
            console.log(result);
            dispatch({
              type : actionTypes.SET_USER ,
              user : result.user 
            })
        })
        .catch((error) => {alert(error.message)})
    }
    return (
        <div className="login">
            <div className="login__container">
                <img src="https://cdn.mos.cms.futurecdn.net/SDDw7CnuoUGax6x9mTo7dd.jpg" alt="Slack logo" />
            <h1>Login into Slack Clone <br/> <a style={{fontSize : '25px'}} href="https://github.com/nik-245" target="_blank">https://github.com/nik-245</a></h1>
            <p> <br/>secure Google leval Authentication</p>
            <Button onClick={signIn}>Sing in with Google</Button>
            </div>
        </div>
    )
}

export default Login
