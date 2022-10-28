import React from "react";
import { Navigate } from "react-router-dom";

function PrivateRoute ({ children }) {
    const loggedInUser = localStorage.getItem("access_token");
    
    if (!loggedInUser) {
        return <Navigate to="/admin/login" replace />
    }
    return children;
}

export default PrivateRoute;