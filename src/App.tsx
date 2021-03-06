import React, {useState, useEffect} from 'react';
import Login from './Login';
import Main from './Main';
import fireBase from './firebase';

export default function App() {
    //user auth stuff

    const [user, setUser] = useState<any>(null);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [hasAccount, setHasAccount] = useState(true);
    const [userID, setUserID] = useState('');

    function clearInputs(){
      setEmail('');
      setPassword('');
    }

    function clearErrors(){
      setEmailError('');
      setPasswordError('');
    }


    //---FIREBASE AUTHENTICATION FUNCTIONS---//
    function handleLogin(){
    
      clearErrors();
      fireBase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .catch(err => {
          switch(err.code){ 
            case "auth/invalid-email":
            case "auth/user-disabled":
            case "auth/user-not-found":
              setEmailError(err.message);
            
             
              break;
            case "auth/wrong-password":
              setPasswordError(err.message);
              
             
           
          }
        }
         
        );
       
    }

      function handleLogout(){
        fireBase.auth().signOut();
        window.location.reload(); 
      }

      function handleSignup(){
        clearErrors();
        fireBase
          .auth()
          .createUserWithEmailAndPassword(email, password)
          .catch(err => {
            switch(err.code){
              case "auth/email-already-in-use":
              case "auth/invalid-email":
                setEmailError(err.message);
               // clearInputs();
                break;
              case "auth/weak-password":
                setPasswordError(err.message);
               // clearInputs();
                break;
            }
          });
      }   
      const authListener = () => {
        fireBase.auth().onAuthStateChanged(user => {
          if (user){
            clearInputs();
            setUser(user);
           
            setUserID(user.uid);
          }
         
        });
      };
    
      useEffect (() => {
        authListener();
       
      }, [])
      
      //---END FIREBASE AUTHENTICATION FUNCTIONS---//

      return (
      <div className="App">
      
        {user ? 

            <Main  
              handleLogout={handleLogout}
              userID={userID}
            />

            : 

            <Login

                email={email}
                setEmail={setEmail}
                password={password}
                setPassword={setPassword}
                handleLogin={handleLogin}
                handleSignup={handleSignup}
                hasAccount={hasAccount}
                setHasAccount={setHasAccount}
                emailError={emailError}
                passwordError={passwordError}
                clearErrors={clearErrors}
                user={user}
                setUser={setUser}
            
            />
                }
        
    </div>)
    }


