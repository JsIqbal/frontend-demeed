import React from "react";
import { Routes, Route, Navigate  } from 'react-router-dom';

import { Login, AdminClientRoutes } from "../platform/user";
import Dashboard from "../platform/user/components/dashboard.component";
import { PermissionsClientRoutes, Permissions, CreateUser } from '../platform/permissions';
import PublicRoute from "./public-route";

function App() {
    return (
      <div className="app">
         <div className="container-fluid">
            <Routes>
                <Route path="/" element={<Navigate to="/admin/login" />} />
                {/* <PublicRoute exact path="/" component={CustomerHome} /> */}
                <Route 
                    path="/admin/login" 
                    element={
                        <PublicRoute>
                            <Login />
                        </PublicRoute>
                    }
                />
                <Route 
                    path="/admin" 
                    element={
                        <Dashboard />
                    }
                />
                <Route 
                    path="/admin/platform/permissions/*" 
                    element={<PermissionsClientRoutes />} 
                />
                <Route 
                    path="/admin/permissions/create/successful" 
                    element={
                        <CreateUser />
                    } 
                />
            </Routes>
         </div>
      </div>
    );
}
 
export default App;