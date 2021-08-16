import React, {useState, useEffect} from 'react';
import Login from './Login';
import Main from './Main';
//connect to MongoDB Atlas 

function App() {
    //user auth stuff

    const [user, setUser] = useState('');
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

    function handleLogin(){

    }

    function handleLogout(){

    }

    function handleSignup(){

    }


    

  return (
   <div className="App">
  
     {user ? 
        <Main/>
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

export default App;
