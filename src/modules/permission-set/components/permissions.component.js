import React, { useState } from "react";
import { Routes, Route, Link } from 'react-router-dom';

function Permissions() {
    const [button, setClass] = useState('btn btn-primary');

    return (
        <div className="row">
            <div className="col-lg-6 me-auto ms-auto text-center">
                <h4>Names</h4>
                <ul className="list-group">
                    <li className="list">
                        <Link className={button} to={'/admin/permissions/create'} type="button">Admin</Link>
                    </li>
                    <li className="list">
                        <Link className={button} to={'/admin/permissions/create/customer'} type="button">Customer</Link>
                    </li>
                    <li className="list">
                        <Link className={button} to={'/admin/permissions/create/seller'} type="button">Seller</Link>
                    </li>
                    <li className="list">
                        <Link className={button} to={'/admin/permissions/create/delivary'} type="button">Delivary</Link>
                    </li>
                </ul>
            </div>
            <div className="col-lg-6">
                <h4>Permission List</h4>
                <ul className="list-group">
                    <li className="list-group-item">
                        <input className="form-check-input me-1" type="checkbox" value="" aria-label="..." />
                        Permission to get
                    </li>
                    <li className="list-group-item">
                        <input className="form-check-input me-1" type="checkbox" value="" aria-label="..." />
                        Permission to delete
                    </li>
                    <li className="list-group-item">
                        <input className="form-check-input me-1" type="checkbox" value="" aria-label="..." />
                        Permission to patch
                    </li>
                    <li className="list-group-item">
                        <input className="form-check-input me-1" type="checkbox" value="" aria-label="..." />
                        Permission to post
                    </li>
                    <li className="list-group-item">
                        <input className="form-check-input me-1" type="checkbox" value="" aria-label="..." />
                        Permission to put
                    </li>
                </ul>
                <Link to={'/admin/permissions/create/successful'} className="btn btn-success mt-2">Create Admin</Link>
            </div>
        </div>
    );
}

export default Permissions;