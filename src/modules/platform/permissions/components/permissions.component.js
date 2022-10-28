import React, { useEffect, useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useNavigate } from 'react-router-dom';
import { permissionSetNameSchema } from "../permissions.schema";

function Permissions ({ closeModal, getValues }) {
        const [shouldRedirect, setShouldRedirect] = useState(false);

        const navigate = useNavigate();

    return (
        <div className='row mt-4'>
            <div className='col-lg-12'>
                <Formik
                    initialValues={{
                        permissionSetName: "",
                    }} 

                    validationSchema={permissionSetNameSchema}

                    onSubmit={(values, actions) => { 
                        getValues(values);
                        // console.log(values);
                        // console.log("----------------sp");
                        actions.setSubmitting(false);
                        closeModal();
                    }}
                > 
                    {(values) => {
                        return (
                            <Form>
                                <div className="row">
                                    <div className='col-lg-6 me-auto'>
                                        <label 
                                            htmlFor='permissionSetName' className='form-label'>
                                                <h6>
                                                    Permission Name :
                                                </h6>
                                        </label>
                                        <Field placeholder="Permission-name" type="permissionSetName" className="form-control" id="permissionSetName" name="permissionSetName"  />
                                        <div className='invalid-feedback d-block'>
                                            <ErrorMessage name="permissionSetName" />
                                        </div>

                                        <label 
                                            htmlFor='description' className='mt-4 form-label'>
                                                <h6>
                                                    Description :
                                                </h6>
                                        </label>
                                        <Field className="description form-control"
                                        as="textarea" id="description"
                                        placeholder="Description"
                                        name="description"  />
                                        <div className='invalid-feedback d-block'>
                                            <ErrorMessage name="description" />
                                        </div>
                                    </div>
                                    
                                    <div className="col-lg-4 ms-auto" role="group" aria-labelledby="checkbox-group">
                                        <h4>Services</h4>

                                        <div className="row">
                                            <ul className="list-group">
                                                <li className="list-group-item">
                                                    <Field name="checked" className="form-check-input me-1" type="checkbox" value="One" />
                                                    Manage Roles
                                                </li>

                                                <li className="list-group-item">
                                                    <Field name="checked" className="form-check-input me-1" type="checkbox" value="Two" />
                                                    Management of Platform
                                                </li>

                                                <li className="list-group-item">
                                                    <Field name="checked" className="form-check-input me-1" type="checkbox" value="Three" />
                                                    Manage Users
                                                </li>

                                                <li className="list-group-item">
                                                    <Field name="checked" className="form-check-input me-1" type="checkbox" value="Four" />
                                                    Manage profiles
                                                </li>

                                                <li className="list-group-item">
                                                    <Field name="checked" className="form-check-input me-1" type="checkbox" value="Five" />
                                                    Manage Permissions
                                                </li>
                                            </ul>
                                            <button type="submit" className="btn btn-success mt-2 button">Create</button>
                                        </div>
                                    </div>
                                </div>
                            </Form>
                        )
                    }}
                </Formik>
            </div>
        </div>
    )
}

export default Permissions;