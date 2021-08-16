import React, {useState, useEffect, Dispatch, SetStateAction} from 'react';
import './App.scss';
import appLogo from "./Jernel_Logo.png";

type PropFunctionBool =Dispatch<SetStateAction<boolean>>;
type PropFunctionString =Dispatch<SetStateAction<string>>;

type PropFunction = () => void;

interface PropObjects {
    email: string;
    password: string;
    user: string;

    hasAccount: boolean;

    emailError: string;
    passwordError: string;

    
    handleLogin: PropFunction;
    handleSignup: PropFunction;
    clearErrors: PropFunction;
    
    //set functions
    setUser: PropFunctionString;
    setHasAccount: PropFunctionBool;
    setEmail: PropFunctionString; 
    setPassword: PropFunctionString;
   

}


function Login(PropObjs : PropObjects){
 
    return( 
        <section className="Login">
            <div className="loginContainer">
                <div className="logoImg">
                    <img className="appLogo" src={appLogo}/>
                </div>
               
                <label>Email</label>
                <input className="email" type="text" onClick ={() => PropObjs.clearErrors} autoFocus required value={PropObjs.email} onChange={(e) => PropObjs.setEmail(e.target.value)} />
                
                <p className="errorMsg">{PropObjs.emailError}</p>
                <label>Pass  </label>

                <input className="password" type="password" required value = {PropObjs.password} onChange={(e) => PropObjs.setPassword(e.target.value)} />

                <p className="errorMsg">{PropObjs.passwordError}</p>

                <div className="btnContainer">
                    {PropObjs.hasAccount ? (
                        //if has account, sign in
                        <>
                        <button onClick={() => PropObjs.handleLogin}>Sign In</button>
                        <p>Don't have an account? 
                            <span className="signUpSpan" onClick={() => PropObjs.setHasAccount}>Sign Up</span></p>
                        </>
                    ) : (
                        //if doesn't have account, sign up
                        <>
                        <button onClick={()=>PropObjs.handleSignup}>Sign Up</button>
                        <p>Have an account? 
                            <span className="signInSpan" onClick={() => PropObjs.setHasAccount}>Sign In</span></p>
                        </>
                    )}
                </div>
            </div>
        </section>
    )
}

export default Login;
