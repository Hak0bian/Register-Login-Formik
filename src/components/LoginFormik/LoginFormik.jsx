import { useState } from 'react'
import { Formik } from "formik";
import UserCard from '../UserCard/UserCard';
import "./LoginFormik.css"

const LoginFormik = ({ users, showPass, showPassFunc, showLoginForm, showRegFormFunc, 
  IoEyeSharp, FaEyeSlash, openEyesImg, closeEyesImg }) => { 
    
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [loginErr, setLoginErr] = useState("")
  
  const checkUser = (values, resetForm) => {
    const findUser = users.find( (user) => user.email === values.email && user.pass === values.pass );
    if (findUser) {
          setLoggedInUser(findUser);
      } else {
          setLoginErr("Incorrect email or Password !");
      } 
      resetForm();
  }


  return (
    <div className={showLoginForm ? "rightDivShow" : "rightDivHidden"}>
      <div className="loginDiv">
        { showPass ? <img src={closeEyesImg} /> : <img src={openEyesImg}/> }
          <h2>Welcome Back !</h2>
          <p className="text"> Enter your personal details to use all of site features </p>
        
        <Formik
          initialValues={{
            email: "",
            pass: ""
          }}

          onSubmit={(values, { resetForm }) => checkUser(values, resetForm)}
        >

          {
          ({ values, handleChange, handleSubmit, errors, touched }) => (
            <form onSubmit={handleSubmit}>
              <input 
                  type="email"
                  placeholder="Email"
                  value={values.email} 
                  onChange={handleChange} 
                  name="email" 
              />
              { errors.email && touched.email && <p>{errors.email}</p> }

              <div className="passDiv">
                <input 
                    className='pass'
                    placeholder="Password"
                    type={showPass ? "text" : "password"}
                    value={values.pass} 
                    onChange={handleChange} 
                    name="pass" 
                />
                {
                showPass 
                  ? <IoEyeSharp onClick={showPassFunc} className="eye" />
                  : <FaEyeSlash onClick={showPassFunc} className="eye" />
                }
              </div>
              { errors.pass && touched.pass && <p>{errors.pass}</p> }
              { loginErr ? <p>{loginErr}</p> : "" }

              <button type="submit" className='btn'>Sign In</button>
              <button type="submit" className="btn btn2" onClick={showRegFormFunc}>Sign Up</button>
            </form>
          )
          }
        </Formik>
      </div>

      <div>
        {loggedInUser && (
          <UserCard user={loggedInUser}/>
        )}
      </div>
    </div>
  );
};

export default LoginFormik;