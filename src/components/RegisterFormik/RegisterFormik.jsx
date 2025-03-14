import { Formik } from "formik"
import validation from "../../validation"

const RegisterFormik = ({ users, setUsers, IoEyeSharp, FaEyeSlash, showPass, show, openEyesImg, closeEyesImg }) => {

  return (
    <div className="registerDiv">
      { showPass ? <img src={closeEyesImg} /> : <img src={openEyesImg}/> }
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

            <button type="submit" className="btn">Sign Up</button>
          </form>
        )
        }
      </Formik>
    </div>
  );
};

export default RegisterFormik;
