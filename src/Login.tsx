import React, {useState, useEffect, Dispatch, SetStateAction} from 'react';
import { findAllInRenderedTree } from 'react-dom/test-utils';
import './App.scss';
import appLogo from "./Jernel_Logo.png";

//---DEFINING THE TYPES FOR THE PROP FUNCTIONS---//
type PropFunctionBool = Dispatch<SetStateAction<boolean>>;
type PropFunctionString = Dispatch<SetStateAction<string>>;


type PropFunction  = Dispatch<SetStateAction<void>>;


//---DEFINING THE PROP OBJECTS---//
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



export default function Login (PropObjs : PropObjects){
 
    return( 
        <section className="Login">
            <div className="loginContainer">
                <div className="logoImg">
                    <img className="appLogo" src={appLogo}/>
                </div>


                <p className="errorMsg">{PropObjs.emailError}</p>

                <div className="group">      
                    <input 
                        type="text" required 
                        onClick ={()=>PropObjs.clearErrors()} 
                        onChange={(e) => PropObjs.setEmail(e.target.value)}
                        
                    />

                    <span className="highlight"/>
                    <span className="bar"/>
                    <label>Email</label>
                </div>

                <p className="errorMsg">{PropObjs.passwordError}</p>
                <div className="group">
                    <input type="password" required 
                        onClick={()=> PropObjs.clearErrors()} 
                        onChange={(e) => PropObjs.setPassword(e.target.value)}
                    />

                    <span className="highlight"/>
                    <span className="bar"/>
                    <label>Password</label>
                    
                </div>

               
                <div className="btnContainer">
                    {PropObjs.hasAccount ? (
                        //if has account, sign in
                        <>
                        <button className="glassButton" onClick={() => PropObjs.handleLogin()}>Sign In</button>
                        <p className="haveAccount">Don't have an account?
                            <span className="signInSpan" onClick={() => PropObjs.setHasAccount(false)}>Sign Up</span>
                        </p>
                        </>
                    ) : (
                        //if doesn't have account, sign up
                        <>
                        <button className="glassButton" onClick={()=>PropObjs.handleSignup()}>Sign Up</button>
                        <p>Have an account? 
                            <span className="signInSpan" onClick={() => PropObjs.setHasAccount(true)}>Sign In</span></p>
                        </>
                    )}
                </div>
            </div>
        </section>
    )
}


