import React from "react";
import { Navigate } from "react-router-dom";

function PublicRoute ({ children }) {
    const loggedInUser = localStorage.getItem("access_token");
    
    if (loggedInUser) {
        return <Navigate to="/admin" replace />
    }
    return children;
}

export default PublicRoute;