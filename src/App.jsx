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
  const [showRegPass, setShowRegPass] = useState(false);
  const [showLoginPass, setShowLoginPass] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(false);

  const showRegPassFunc = () => {
    setShowRegPass(!showRegPass);
  };

  const showLoginPassFunc = () => {
    setShowLoginPass(!showLoginPass)
  }

  const showLoginFormFunc = () => {
    setShowLoginForm(true)
  }

  const showRegFormFunc = () => {
    setShowLoginForm(false)
  }

  console.log("Users:", users);
  
  return (
    <section className='mainSection'>
      <RegisterFormik 
        users={users} 
        setUsers={setUsers} 
        showRegPass={showRegPass}
        showLoginForm={showLoginForm}
        showRegPassFunc={showRegPassFunc}
        showLoginFormFunc={showLoginFormFunc}
        IoEyeSharp={IoEyeSharp}
        FaEyeSlash={FaEyeSlash}
        openEyesImg={openEyesImg}
        closeEyesImg={closeEyesImg}
        />
      <LoginFormik 
        users={users} 
        showLoginPass={showLoginPass}
        showLoginPassFunc={showLoginPassFunc}
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