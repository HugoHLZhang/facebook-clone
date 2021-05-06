import { Button } from '@material-ui/core';
import React from 'react';
import {auth, provider} from "./firebase";
import "./Login.css";
import { actionTypes } from './reducer';
import { useStateValue } from './StateProvider';

function Login() {
    const [state, dispatch] = useStateValue();

    const signIn = () => {
        auth
            .signInWithPopup(provider)
            .then((result) => {
                dispatch({
                    type: actionTypes.SET_USER,
                    user: result.user,
                });
            })
            .catch((error) => alert(error.message));
        
    }

    return (
        <div className="login">
            <div className="login_logo">
                <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" height="150px"alt=""/>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Facebook_Logo_%282019%29.svg/langfr-1024px-Facebook_Logo_%282019%29.svg.png" height="50px" alt=""/>

            </div>
            <Button type="submit" onClick={signIn}>
                S'identifier
            </Button>
        </div>
    )
}

export default Login
