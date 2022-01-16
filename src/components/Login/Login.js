import React, { useContext } from 'react';
import "./Login.css"
import icon from '../../img/icon/icon-1.png'
import google from '../../img/icon/google.png'
import { initializeApp } from "firebase/app";
import firebaseConfig from './firebaseConfig';
import { UserContext } from '../../App';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useLocation, useNavigate } from 'react-router-dom';

initializeApp(firebaseConfig);

const Login = () => {

    const [loggedInuser,setloggedInuser] = useContext( UserContext )

    const provider = new GoogleAuthProvider();

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const signInGoogle =()=>{

        const auth = getAuth();
        signInWithPopup(auth, provider)
        .then((result) => {
            const {displayName, photoURL ,email} = result.user;
            const loggedInuserInfo = {name:displayName, img:photoURL , email}
            setloggedInuser(loggedInuserInfo)
            navigate(from, { replace: true });
        }).catch((error) => {
            const errorMessage = error.message;
            const email = error.email;
        });

    }

    return (
        <div className='container mt-5'>
            <div className="row">
                <div className="col-lg-3 mx-auto logo-box">
                    <img src={icon} alt="" />
                </div>
            </div>
            <div className="row">
                <div className="col-lg-3 mx-auto login-box">
                    <h3>login with</h3>
                    <ul>
                        <li onClick={signInGoogle}> <img src={google} alt="" /> Continue with google</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Login;