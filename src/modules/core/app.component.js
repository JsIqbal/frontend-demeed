import React from "react";
import { Routes, Route  } from 'react-router-dom';

import { Login, AdminClientRoutes } from "../admin";
import { PermissionSet } from '../permission-set';
import Permissions from "../permission-set/components/permissions.component";
import CreateUser from "../permission-set/components/create-user.component";

function App() {
    return (
      <div className="app">
         <div className="container">
            <Routes>
                <Route path="admin/login" element={ <Login />} />
                <Route path="/admin/permissions/create" element={<PermissionSet />} />

                <Route path="/admin/permissions/create/customer" element={<Permissions />} />
                <Route path="/admin/permissions/create/seller"  element={<Permissions />}/>
                <Route path="/admin/permissions/create/delivary"  element={<Permissions />}/>

                <Route path="/admin/permissions/create/successful" element={<CreateUser />} />
            </Routes>
         </div>
      </div>
    );
}
 
export default App;