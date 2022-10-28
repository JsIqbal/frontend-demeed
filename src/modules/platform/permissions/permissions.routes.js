import { Routes, Route, useLocation } from 'react-router-dom';

import Permissions from './components/permissions.component';
import CreateUser from './components/create-user.component';

import PrivateRoute from '../../core/private-route';
import Sandbox from './components/create-user.component';

function PermissionsRoutes () {
    return (
        <Routes>
            <Route 
                path="/create" 
                element={
                    <PrivateRoute>
                        <CreateUser />
                    </PrivateRoute>
                } 
            />
        </Routes>
    );
}

export default PermissionsRoutes;