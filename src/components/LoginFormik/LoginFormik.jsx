import { useState } from 'react'
import { Formik } from "formik";
import UserCard from '../UserCard/UserCard';
// import validation from "../../validation"

const LoginFormik = ({ users,  IoEyeSharp, FaEyeSlash, showPass, show, openEyesImg, closeEyesImg }) => { 
  const [loggedInUser, setLoggedInUser] = useState(null);
  
  const checkUser = (values) => {
    const findUser = users.find( (user) => user.email === values.email && user.pass === values.pass );
    if (findUser) {
          setLoggedInUser(findUser);
      } else {
          console.log("Incorrect email or Password !" );
      } 
  }


  return (
    <div className="rightDiv">
      <div className="loginDiv">
        { showPass ? <img src={closeEyesImg} /> : <img src={openEyesImg}/> }
          <h2>Welcome Back !</h2>
          <p className="text"> Enter your personal details to use all of site features </p>
        
        <Formik
          initialValues={{
            email: "",
            pass: ""
          }}

          onSubmit={(values) => checkUser(values)}
          // validationSchema={validation}
        >

          {
          ({ values, handleChange, handleSubmit, errors, touched }) => (
            <form onSubmit={handleSubmit}>
              <input 
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
                  ? <IoEyeSharp onClick={show} className="eye" />
                  : <FaEyeSlash onClick={show} className="eye" />
                }
              </div>
              { errors.pass && touched.pass && <p>{errors.pass}</p> }

              <button type="submit" className='btn'>Sign In</button>
            </form>
          )
          }
        </Formik>
      </div>

      <div>
        {loggedInUser && loggedInUser.email && (
          <UserCard user={loggedInUser}/>
        )}
      </div>
    </div>
  );
};

export default LoginFormik;