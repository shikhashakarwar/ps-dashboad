import React, { useState } from 'react';
import './login.scss'; 
import { Formik, Form, Field } from "formik";
import Button from "@material-ui/core/Button"; 
import { TextField } from "material-ui-formik-components/TextField"; 
import { userAuthentication } from '../../dataFetchers/userAuthentication';
import { DASHBOARD_BASE_PATH } from '../../constants/paths';


function Login(props) {
  const [loginData, setLogin] = useState({email: "", password: ""});
  
  const loginDataValidation = (touched , errors) => { 
    const emailTest = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (touched.email === "") {
      errors.email = "Email is required";
    } else if (!emailTest.test(touched.email)) {
      errors.email = "Invalid email address format";
    }

    if (touched.password === "") {
      errors.password = "password is required";
    } 
  }

  const getLogginData = (loginData) => {
    setLogin(loginData);
    userAuthentication(loginData).then((value) => {
      if (value) {
        props.history.push(DASHBOARD_BASE_PATH);
      }
    }, (error) => {
      console.log(error);
    });
  }
  
  return (
    <>
      <div className="col-md-4 col-md-offset-4 login">
      <h1>Login form</h1> 
      <Formik
        initialValues = {loginData} 
        validate = { touched => {
          let errors = {};
          loginDataValidation(touched , errors);
          return errors;
        }}
        onSubmit={(values, {setSubmitting, resetForm}) => {       
          setSubmitting(false); 
          getLogginData(values);         
        }}          
        >
          {({ props,touched, errors, isSubmitting  }) => (
            <Form>
              <Field type="email"  name="email" label="email" component={TextField} />
              <Field type="password" name="password" label="password" component={TextField} />
              <Button variant="contained" type="submit" color="primary">  Submit </Button>
            </Form>
          )}
        </Formik> 
      </div>
    </>
  )
}
export default Login;
