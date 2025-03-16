import { Formik, Form, Field, ErrorMessage } from "formik";
import validation from "../../validation"
import "./RegisterFormik.css"

const RegisterFormik = ({ users, setUsers, showPass, showPassFunc, showLoginForm, 
  showLoginFormFunc, IoEyeSharp, FaEyeSlash, openEyesImg, closeEyesImg
  }) => {

  const addUser = (values, resetForm) => {
    setUsers([
      ...users, values
    ]);
    resetForm();
  }


  return (
    <div className={showLoginForm ? "registerDivHidden" : "registerDivShow" }>
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
          
          onSubmit={(values, { resetForm }) => addUser(values, resetForm)}
          validationSchema={validation}
        >
          {
            <Form> 
              <Field placeholder="Name" name="name" />
              <ErrorMessage name="name" component="div" className="errMsg"/>

              <Field placeholder="Lastname" name="lastName" />
              <ErrorMessage name="lastName" component="div" className="errMsg"/>

              <Field placeholder="Email" name="email" />
              <ErrorMessage name="email" component="div" className="errMsg"/>

              <div className="passDiv">
                <Field placeholder="Password" name="pass" className="pass" type={showPass ? "text" : "password"} />
                {
                  showPass 
                  ? <IoEyeSharp onClick={showPassFunc} className="eye" />
                  : <FaEyeSlash onClick={showPassFunc} className="eye" />
                }
              </div>
                <ErrorMessage name="pass" component="div" className="errMsg"/>

              <button type="submit" className="btn" onClick={showLoginFormFunc}>Sign Up</button>
            </Form>
          }
        </Formik>
      </div>
    </div>
  );
};

export default RegisterFormik;