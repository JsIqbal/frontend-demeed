import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { loginSchema } from '../admin.schema';
import { login } from "../admin.actions";
import { useNavigate } from 'react-router-dom';

function Login(props) {
    let navigate = useNavigate();
    return (
        
        <div className='container ' style={{ marginTop: "12%" }} >
            <Formik
                initialValues={{
                    email: "",
                    password: ""
                }}
                validationSchema={loginSchema}
                onSubmit={(values, actions) => {
                    login(values)
                        .then(response => {
                            const token = response.accessToken;
                            localStorage.setItem("access_token", token);
                            navigate("/admin", { state: { someData: token } });
                        })
                        .catch(error => {
                            console.log("Error");
                        })
                    actions.setSubmitting(false);
                }}
            >
                {(formikprops) => {
                    return (
                        <Form>
                            <div className='form-group mb-3 col-3 m-auto'>
                                <label htmlFor='email' className='form-label'>Email Address</label>
                                <Field type="email" className="form-control" id="email" name="email" />
                                <div className='invalid-feedback d-block'>
                                    <ErrorMessage name="email" />
                                </div>
                            </div>

                            <div className='form-group mb-3 col-3 m-auto'>
                                <label htmlFor='password' className='form-label'>Password</label>
                                <Field type="password" className="form-control" id="password" name="password" />
                                <div className='invalid-feedback d-block'>
                                    <ErrorMessage name="password" />
                                </div>
                                <br />
                            </div>
                            <div className='form-group mb-3 col-3 m-auto'>
                                <button type="submit"  className="btn btn-primary col-4">Login</button>
                            </div>
                        </Form>
                    );
                }}
            </Formik>
        </div>
    )
}

export default Login;