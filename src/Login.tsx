import React, {useState, useEffect, Dispatch, SetStateAction} from 'react';
import './App.scss';
import appLogo from "./Jernel_Logo.png";

type PropFunctionBool = Dispatch<SetStateAction<boolean>>;
type PropFunctionString = Dispatch<SetStateAction<string>>;

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
               

                <div className="group">      
                    <input type="text" required/>
                    <span className="highlight"/>
                    <span className="bar"/>
                    <label>Email</label>
                </div>

                <div className="group">      
                    <input type="password" required/>
                    <span className="highlight"/>
                    <span className="bar"/>
                    <label>Password</label>
                </div>



                <p className="errorMsg">{PropObjs.passwordError}</p>

                <div className="btnContainer">
                    {PropObjs.hasAccount ? (
                        //if has account, sign in
                        <>
                        <button className="glassButton" onClick={() => PropObjs.handleLogin}>Sign In</button>
                        <p className="haveAccount">Don't have an account?
                            <span className="signInSpan" onClick={() => PropObjs.setHasAccount(false)}>Sign Up</span>
                        </p>
                        </>
                    ) : (
                        //if doesn't have account, sign up
                        <>
                        <button className="glassButton" onClick={()=>PropObjs.handleSignup}>Sign Up</button>
                        <p>Have an account? 
                            <span className="signInSpan" onClick={() => PropObjs.setHasAccount(true)}>Sign In</span></p>
                        </>
                    )}
                </div>
            </div>
        </section>
    )
}

export default Login;
