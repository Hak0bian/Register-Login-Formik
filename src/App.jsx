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

  const show = () => {
    setShowPass(!showPass);
  };

  console.log("Users:", users);

  return (
    <section className='mainSection'>
      <RegisterFormik 
        users={users} 
        setUsers={setUsers} 
        showPass={showPass}
        show={show}
        IoEyeSharp={IoEyeSharp}
        FaEyeSlash={FaEyeSlash}
        openEyesImg={openEyesImg}
        closeEyesImg={closeEyesImg}
      />
      <LoginFormik 
        users={users} 
        showPass={showPass}
        show={show}
        IoEyeSharp={IoEyeSharp}
        FaEyeSlash={FaEyeSlash}
        openEyesImg={openEyesImg}
        closeEyesImg={closeEyesImg}
      />

    </section>
  )
}

export default App