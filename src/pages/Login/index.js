import React, {useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";
import Verify from "./Verify";
import LoginForm from "./LoginForm";
import {ADMIN} from "./contants";

function Login() {
    const [passLogin, setPassLogin] = useState(false);
    const [passVerifyLogin, setPassVerifyLogin] = useState(false);
    const navigate = useNavigate ();

    const handleLoginSuccess = () => {
        setPassLogin(true);
    }

    const handleVerifyLoginSuccess = () => {
        setPassVerifyLogin(true);
    }

    useEffect(() => {
        const props = { position: ADMIN }
        if (passVerifyLogin) {
            navigate(`/`, { state: {props} });
        }
    }, [passVerifyLogin, navigate]);
    return (
        <>
            {
                passLogin
                    ? <Verify onVerifyLoginSuccess={handleVerifyLoginSuccess} />
                    : <LoginForm onLoginSuccess={handleLoginSuccess}/>
            }
        </>
    );
}

export default Login;