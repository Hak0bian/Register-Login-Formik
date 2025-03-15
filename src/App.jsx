import React from 'react'
import { useState } from 'react'
import RegisterFormik from "./components/RegisterFormik/RegisterFormik"
import LoginFormik from "./components/LoginFormik/LoginFormik"
import { IoEyeSharp } from "react-icons/io5";
import { FaEyeSlash } from "react-icons/fa";
import openEyesImg from "./assets/open-eyes.png";
import closeEyesImg from "./assets/close-eyes.png";
import './App.css'

function App() {
  const [users, setUsers] = useState([]); 
  const [showPass, setShowPass] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(false);

  const showPassFunc = () => {
    setShowPass(!showPass);
  };

  const showLoginFormFunc = () => {
    setShowLoginForm(true)
  }

  const showRegFormFunc = () => {
    setShowLoginForm(false)
    setUsers([])
  }

  console.log("Users:", users);
  
  return (
    <section className='mainSection'>
      <RegisterFormik 
        users={users} 
        setUsers={setUsers} 
        showPass={showPass}
        showLoginForm={showLoginForm}
        showPassFunc={showPassFunc}
        showLoginFormFunc={showLoginFormFunc}
        IoEyeSharp={IoEyeSharp}
        FaEyeSlash={FaEyeSlash}
        openEyesImg={openEyesImg}
        closeEyesImg={closeEyesImg}
        />
      <LoginFormik 
        users={users} 
        showPass={showPass}
        showPassFunc={showPassFunc}
        showLoginForm={showLoginForm}
        showRegFormFunc={showRegFormFunc}
        IoEyeSharp={IoEyeSharp}
        FaEyeSlash={FaEyeSlash}
        openEyesImg={openEyesImg}
        closeEyesImg={closeEyesImg}
      />
    </section>
  )
}

export default App