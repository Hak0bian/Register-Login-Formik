import { Formik } from "formik"
import validation from "../../validation"

const RegisterFormik = ({ users, setUsers, showRegPass, showRegPassFunc, showLoginForm, 
  showLoginFormFunc, IoEyeSharp, FaEyeSlash, openEyesImg, closeEyesImg
  }) => {

  return (
    <div className={showLoginForm ? "registerDivHidden" : ""}>
      <div className="registerDiv">
        { showRegPass ? <img src={closeEyesImg} /> : <img src={openEyesImg}/> }
          <h2>Hello Friend !</h2>
          <p className="text"> Register with your personal details to use all of site features </p>

          
        <Formik
          initialValues={{
            id: Date.now(),
            name: "",
            lastName: "",
            email: "",
            pass: ""
          }}
          
          onSubmit={(values, { resetForm }) => {
            setUsers([
              ...users, values
            ]); 
            resetForm(); 
          }}
          validationSchema={validation}
        >
          {
          ({ values, handleChange, handleSubmit, errors, touched }) => (
            <form onSubmit={handleSubmit}> 
              
              <input 
                placeholder="Name" 
                value={values.name} 
                onChange={handleChange} 
                name="name" 
              />
              { errors.name && touched.name && <p>{errors.name}</p> }

              <input 
                placeholder="Lastname" 
                value={values.lastName} 
                onChange={handleChange} 
                name="lastName" 
              />
              { errors.lastName && touched.lastName && <p>{errors.lastName}</p> }

              <input 
                placeholder="Email" 
                value={values.email} 
                onChange={handleChange} 
                name="email" 
              />
              { errors.email && touched.email && <p>{errors.email}</p> }

              <div className="passDiv">
                <input 
                  className="pass"
                  placeholder="Password" 
                  type={showRegPass ? "text" : "password"} 
                  value={values.pass} 
                  onChange={handleChange} 
                  name="pass" 
                />
                {
                showRegPass 
                  ? <IoEyeSharp onClick={showRegPassFunc} className="eye" />
                  : <FaEyeSlash onClick={showRegPassFunc} className="eye" />
                }
              </div>
                { errors.pass && touched.pass && <p>{errors.pass}</p> }

              <button type="submit" className="btn">Sign Up</button>
              <button type="submit" className="btn btn2" onClick={showLoginFormFunc}>Log In</button>
            </form>
          )
          }
        </Formik>
      </div>
    </div>
  );
};

export default RegisterFormik;
