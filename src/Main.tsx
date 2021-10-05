import React, {useState, useEffect, Dispatch, SetStateAction} from 'react';
import './App.scss';


//---PROP RELATED--//

//---PROP FUNCTIONS--//
type PropFunctionBool = Dispatch<SetStateAction<boolean>>;
type PropFunctionString = Dispatch<SetStateAction<string>>;
type PropFunction  = Dispatch<SetStateAction<void>>;

//PROP OBJECTS INTERFACE
interface PropObjects{
    handleLogout: PropFunction;
    userID: string;
}

export default function Main(PropObjs : PropObjects){
    return(
        <div className="main"> 
            
            <button className="glassButton"
                onClick={()=>PropObjs.handleLogout()}>Log out
            </button>
            
            <h2>This is main.</h2>
        </div>
       
    )
};
