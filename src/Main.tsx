import React, {useState, useEffect, Dispatch, SetStateAction} from 'react';
import './App.scss';

type PropFunctionBool = Dispatch<SetStateAction<boolean>>;
type PropFunctionString = Dispatch<SetStateAction<string>>;
type PropFunction  = Dispatch<SetStateAction<void>>;

interface PropObjects{
    handleLogout: PropFunction;
    userID: string;
}

export default function Main(PropObjs : PropObjects){
    return(
        <div className="main"> 
        <h2>This is main.</h2>
        <button onClick={()=>PropObjs.handleLogout()}>Log out</button>
        </div>
       
    )
};
