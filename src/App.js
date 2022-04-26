import './App.css';
import Header from "./components/Header"
import Main from "./components/Main"
import {userContext} from "./context/userContext"
import { useState } from 'react';

function App() {

  const [user,setUser] = useState("");


  const login =(email) =>{
    setUser(email);
  }

  const paint = (user) =>{
    setUser(user)
  }

  const data = {
    user,
    login,
    paint
  }

  return (
    <div className="App">
      <userContext.Provider value={data}>
        <Header/>
        <Main/>
      </userContext.Provider>

    </div>
  );
}

export default App;
