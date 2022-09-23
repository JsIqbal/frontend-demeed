import { Routes, Route, useLocation } from 'react-router-dom';
import PermissionSet from './components/permission-set.component';

function PermissionSetRoutes () { // many routes will be here.
    const { pathname } = useLocation(); // Hooks

    return (
        <Routes>
            <Route path={pathname} element={<PermissionSet />} />
        </Routes>
    );
}

export default PermissionSetRoutes;