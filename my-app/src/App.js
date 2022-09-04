import React from 'react'
import logo from './logo.svg';
import './App.css';
import Login from "./components/Login";
import Store from "./components/Store";

async function getLoginAPI(){

  const response = await fetch('https://fakestoreapi.com/auth/login',{
            method:'POST',
            body:JSON.stringify({
                username: "kevinryan",
                password: "kev02937@"
            })
        }) 
        .then(res=>res.json())
        .then(json=>console.log(json))

  console.log(response);
 
}

function App() {

  const [isLoggedIn, setLogIn] = React.useState(true);

  return (
    <div className="App">
      {isLoggedIn? <Store /> : <Login />}
    </div>
  );
}

export default App;
